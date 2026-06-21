import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// Programmatically generate seed textures
function createSeedTexture(canvas: HTMLCanvasElement, hue: number, saturation: number, lightness: number): string {
  const ctx = canvas.getContext('2d')!;
  canvas.width = 90;
  canvas.height = 180;

  ctx.clearRect(0, 0, 90, 180);
  ctx.save();
  ctx.translate(45, 90);

  const grad = ctx.createRadialGradient(0, -20, 5, 0, 0, 70);
  grad.addColorStop(0, `hsl(${hue}, ${saturation}%, ${lightness + 15}%)`);
  grad.addColorStop(0.5, `hsl(${hue}, ${saturation}%, ${lightness}%)`);
  grad.addColorStop(1, `hsl(${hue}, ${saturation}%, ${lightness - 10}%)`);

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(0, -80);
  ctx.bezierCurveTo(22, -70, 28, -30, 26, 10);
  ctx.bezierCurveTo(24, 50, 18, 75, 8, 82);
  ctx.bezierCurveTo(0, 86, -8, 82, -18, 72);
  ctx.bezierCurveTo(-28, 50, -26, 10, -24, -20);
  ctx.bezierCurveTo(-22, -60, -12, -75, 0, -80);
  ctx.fill();

  ctx.strokeStyle = `hsl(${hue}, ${saturation - 10}%, ${lightness - 15}%)`;
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(0, -65);
  ctx.quadraticCurveTo(3, 0, -1, 75);
  ctx.stroke();

  ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness + 25}%, 0.3)`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-8, -60);
  ctx.quadraticCurveTo(-12, 0, -6, 60);
  ctx.stroke();

  ctx.restore();
  return canvas.toDataURL();
}

interface SeedData {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  theta: number;
  radius: number;
  rotSpeed: number;
  rotation: number;
  textureIdx: number;
  vx: number;
  vy: number;
  actualR: number;
}

export default function SunflowerHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const seedsRef = useRef<SeedData[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isAttractingRef = useRef(true);
  const rafRef = useRef(0);
  const texturesRef = useRef<HTMLImageElement[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const dimsRef = useRef({ w: 0, h: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;

    const dpr = Math.min(1.6, window.devicePixelRatio);
    const isMobile = window.innerWidth < 768;
    const MAX_SEEDS = isMobile ? 300 : 600;

    const resize = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      dimsRef.current = { w, h, dpr };
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();

    const seedDefs = [
      { h: 42, s: 55, l: 54 },
      { h: 38, s: 52, l: 87 },
      { h: 40, s: 50, l: 58 },
      { h: 35, s: 42, l: 32 },
      { h: 42, s: 50, l: 48 },
      { h: 38, s: 80, l: 92 },
      { h: 38, s: 56, l: 42 },
      { h: 43, s: 60, l: 53 },
    ];

    const offCanvas = document.createElement('canvas');
    const loadedTextures: HTMLImageElement[] = [];
    let loaded = 0;

    seedDefs.forEach((def) => {
      const dataUrl = createSeedTexture(offCanvas, def.h, def.s, def.l);
      const img = new Image();
      img.onload = () => {
        loaded++;
        if (loaded === seedDefs.length) {
          texturesRef.current = loadedTextures;
          initSeeds();
          startLoop();
        }
      };
      img.src = dataUrl;
      loadedTextures.push(img);
    });

    const GOLDEN_ANGLE = 137.508 * (Math.PI / 180);
    const C = 8;

    function initSeeds() {
      const seeds: SeedData[] = [];
      const cx = dimsRef.current.w / 2;
      const cy = dimsRef.current.h / 2;

      for (let i = 0; i < MAX_SEEDS; i++) {
        const r = C * Math.sqrt(i);
        const theta = i * GOLDEN_ANGLE;
        const x = cx + r * Math.cos(theta);
        const y = cy + r * Math.sin(theta);

        seeds.push({
          x, y,
          baseX: x,
          baseY: y,
          theta,
          radius: r,
          rotSpeed: (Math.random() - 0.5) * 0.003,
          rotation: theta,
          textureIdx: i % 8,
          vx: 0,
          vy: 0,
          actualR: r,
        });
      }
      seedsRef.current = seeds;
    }

    function startLoop() {
      if (!ctx) return;
      const animate = () => {
        if (!ctx) return;
        const { w, h } = dimsRef.current;
        ctx.clearRect(0, 0, w, h);

        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        seedsRef.current.forEach(seed => {
          seed.rotation += seed.rotSpeed;
          const dx = seed.x - mx;
          const dy = seed.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const distMarge = 80;

          if (dist < distMarge && dist > 0) {
            const force = (distMarge - dist) / distMarge * 3;
            seed.vx += (dx / dist) * force;
            seed.vy += (dy / dist) * force;
          }

          if (isAttractingRef.current) {
            const cdx = seed.baseX - seed.x;
            const cdy = seed.baseY - seed.y;
            seed.vx += cdx * 0.02;
            seed.vy += cdy * 0.02;
            seed.rotation += 0.005;
          }

          seed.vx *= 0.92;
          seed.vy *= 0.92;
          seed.x += seed.vx;
          seed.y += seed.vy;

          if (!isAttractingRef.current && dist >= distMarge) {
            seed.x += (seed.baseX - seed.x) * 0.01;
            seed.y += (seed.baseY - seed.y) * 0.01;
          }

          const tex = texturesRef.current[seed.textureIdx];
          if (tex) {
            ctx.save();
            ctx.translate(seed.x, seed.y);
            ctx.rotate(seed.rotation + Math.PI / 2);
            ctx.drawImage(tex, -4, -8, 8, 16);
            ctx.restore();
          }
        });

        rafRef.current = requestAnimationFrame(animate);
      };

      animate();
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const onClick = () => {
      isAttractingRef.current = false;
      seedsRef.current.forEach(seed => {
        const angle = Math.random() * Math.PI * 2;
        const force = Math.random() * 15 + 5;
        seed.vx += Math.cos(angle) * force;
        seed.vy += Math.sin(angle) * force;
      });
    };

    const onDblClick = () => {
      isAttractingRef.current = true;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('click', onClick);
    canvas.addEventListener('dblclick', onDblClick);

    const onResize = () => {
      resize();
      const cx = dimsRef.current.w / 2;
      const cy = dimsRef.current.h / 2;
      seedsRef.current.forEach((seed, i) => {
        const r = C * Math.sqrt(i);
        seed.baseX = cx + r * Math.cos(seed.theta);
        seed.baseY = cy + r * Math.sin(seed.theta);
      });
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('click', onClick);
      canvas.removeEventListener('dblclick', onDblClick);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });
    tl.fromTo('.hero-headline-word', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out' })
      .fromTo('.hero-sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[calc(100vh-68px)] mt-[68px] overflow-hidden bg-light-sand">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ cursor: 'pointer' }}
      />

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12 max-w-[620px]">
        <p className="hero-sub text-caption text-muted-olive mb-4">SUNFLOWER DESIGNS</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[96px] lg:leading-[90px] text-dark-taupe tracking-[-0.02em]">
          <span className="hero-headline-word inline-block">Designed</span>{' '}
          <span className="hero-headline-word inline-block">Slowly.</span>{' '}
          <span className="hero-headline-word inline-block">Worn</span>{' '}
          <span className="hero-headline-word inline-block">Beautifully.</span>
        </h1>
        <p className="hero-sub text-lg md:text-xl text-warm-grey mt-6 leading-relaxed">
          Cape Town garments shaped by Farah Davids, made for comfort, craft and quiet confidence.
        </p>
        <Link
          to="/shop"
          className="hero-cta text-button inline-block mt-8 bg-dark-taupe text-white px-8 py-3.5 rounded hover:bg-sunflower-gold transition-colors duration-250"
        >
          EXPLORE THE COLLECTION
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0">
        <div className="relative w-px h-10 bg-earth-tan">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sunflower-gold"
            style={{ animation: 'scrollIndicator 1.5s ease-in-out infinite' }}
          />
        </div>
      </div>

      {/* Interaction hint */}
      <div className="absolute top-6 right-6 text-[10px] text-warm-grey/60 font-body tracking-wider uppercase hidden lg:block">
        Click to scatter • Double-click to gather
      </div>
    </section>
  );
}
