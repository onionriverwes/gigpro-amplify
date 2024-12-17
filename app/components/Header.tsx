import Link from 'next/link';
import './HeaderFooter.css';

export default function Header() {
  return (
      <header>
        <div className="logo-title">
          <img src="/amplify.svg" alt="Logo" className="logo"/>
          <h1 className="title">Your App Title</h1>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pages/act-manager">Act Manager</Link></li>
            <li><Link href="/pages/website-manager">Website Manager</Link></li>
            <li><Link href="/pages/gig-manager">Gig Manager</Link></li>
          </ul>
        </nav>
      </header>
  );
}