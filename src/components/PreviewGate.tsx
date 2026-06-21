import { useEffect, useState } from 'react';

const PREVIEW_CODE = 'FARAH2026';
const SESSION_KEY = 'sunflower_preview_session_active';
const USED_KEY = 'sunflower_preview_link_used';

interface PreviewGateProps {
  children: React.ReactNode;
}

export default function PreviewGate({ children }: PreviewGateProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [allowed, setAllowed] = useState(false);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const activeSession = sessionStorage.getItem(SESSION_KEY) === 'true';
    const alreadyUsed = localStorage.getItem(USED_KEY) === 'true';

    if (activeSession) {
      setAllowed(true);
      return;
    }

    if (alreadyUsed) {
      setExpired(true);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const previewParam = params.get('preview');

    if (previewParam && previewParam.toUpperCase() === PREVIEW_CODE) {
      unlockPreview();
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const unlockPreview = () => {
    sessionStorage.setItem(SESSION_KEY, 'true');
    localStorage.setItem(USED_KEY, 'true');
    setAllowed(true);
    setExpired(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code.trim().toUpperCase() === PREVIEW_CODE) {
      unlockPreview();
      return;
    }

    setError('That preview code is not valid. Please check the code and try again.');
  };

  if (allowed) {
    return <>{children}</>;
  }

  return (
    <main className="min-h-screen bg-light-sand flex items-center justify-center px-6 py-16">
      <section className="w-full max-w-[520px] bg-white rounded-3xl shadow-sm border border-dark-taupe/10 p-8 md:p-10 text-center">
        <p className="text-caption text-muted-olive mb-4">SUNFLOWER DESIGNS</p>
        <h1 className="font-display text-4xl md:text-5xl text-dark-taupe tracking-[-0.02em]">
          Private Website Preview
        </h1>

        {expired ? (
          <>
            <p className="text-warm-grey leading-relaxed mt-5">
              This preview link has expired. Please ask Fouad for a fresh preview code if you need to view the website again.
            </p>
            <div className="mt-8 rounded-2xl bg-light-sand p-5 text-left">
              <p className="text-caption text-muted-olive mb-2">NOTE</p>
              <p className="text-sm text-warm-grey leading-relaxed">
                This is a temporary concept preview prepared for review only.
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="text-warm-grey leading-relaxed mt-5">
              This concept website is currently under private review. Enter the preview code to continue.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="text"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                  setError('');
                }}
                placeholder="Enter preview code"
                className="w-full rounded-full border border-dark-taupe/15 bg-light-sand px-5 py-3 text-center text-dark-taupe placeholder:text-warm-grey/60 focus:outline-none focus:border-sunflower-gold"
              />
              {error && <p className="text-sm text-red-700">{error}</p>}
              <button
                type="submit"
                className="w-full rounded-full bg-dark-taupe px-6 py-3 text-button text-white hover:bg-sunflower-gold transition-colors duration-250"
              >
                VIEW PREVIEW
              </button>
            </form>
            <p className="text-xs text-warm-grey/70 mt-5">
              For Farah Davids only. This preview will expire after use on this device.
            </p>
          </>
        )}
      </section>
    </main>
  );
}
