import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/act-manager">Act Manager</Link></li>
          <li><Link href="/website-manager">Website Manager</Link></li>
          <li><Link href="/gig-manager">Gig Manager</Link></li>
        </ul>
      </nav>
    </header>
  );
}