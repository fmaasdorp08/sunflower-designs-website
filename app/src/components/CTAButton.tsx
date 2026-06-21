import { Link } from 'react-router-dom';

interface CTAButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'dark' | 'light' | 'gold' | 'white';
  className?: string;
}

export default function CTAButton({ children, to, onClick, variant = 'dark', className = '' }: CTAButtonProps) {
  const base = 'text-button inline-block px-8 py-3.5 rounded transition-colors duration-250';

  const variants = {
    dark: 'bg-dark-taupe text-white hover:bg-sunflower-gold',
    light: 'bg-white text-dark-taupe hover:bg-sunflower-gold hover:text-white',
    gold: 'bg-sunflower-gold text-dark-taupe hover:bg-white',
    white: 'bg-transparent text-white border border-white/30 hover:bg-white hover:text-dark-taupe',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
}
