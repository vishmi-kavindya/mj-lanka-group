import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 text-sm text-gray-600 px-10 flex justify-between">
        <span>Open Hours - Mon - Fri: 8.30 AM - 5.00 PM | Saturday: 9.00 AM - 1.00 PM</span>
        <div className="flex gap-4">
          <span>info@ceyloncredit.lk</span>
          <span>(f)</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-10 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">CEYLON CREDIT</div>
        <nav className="flex gap-8 font-semibold text-gray-700">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT US</Link>
          <Link href="/services">PRODUCTS AND SERVICES</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>
        <div className="bg-blue-900 text-white px-4 py-2 rounded">
          Call Now: +94 11 123 4567
        </div>
      </div>
    </header>
  );
}