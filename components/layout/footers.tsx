// components/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="text-ink-400 mb-4 mt-8 w-full text-center text-sm">
      © Manifold Markets, Inc.
      <span className="mx-2">•</span>
      <Link href="/terms" target="_blank" className="hover:underline">Terms</Link>
      <span className="mx-2">+</span>
      <Link href="/mana-only-terms" target="_blank" className="hover:underline">Mana-only Terms</Link>
      <span className="mx-2">•</span>
      <Link href="/privacy" target="_blank" className="hover:underline">Privacy</Link>
      <span className="mx-2">•</span>
      <Link href="/sweepstakes-rules" target="_blank" className="hover:underline">Rules</Link>
    </footer>
  );
};

export default Footer;
