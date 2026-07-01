import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-gray-400 py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. Company Info */}
        <div className="space-y-6">
          <Link href="/">
            {/* ඔයාගේ Logo එක තියෙනවනම් මෙතන src එක මාරු කරන්න */}
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="rounded-xl" />
          </Link>
          <p className="text-sm leading-relaxed">
            For over a decade, <strong className="text-white">MJ Lanka Group of Company (Pvt) Ltd.</strong> has grown into Sri Lanka's leading valuation firm, trusted for accuracy, integrity, and unmatched professional standards.
          </p>
        </div>

        {/* 2. Company Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-[#E53935] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#E53935] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#E53935] transition">Services</Link></li>
            <li><Link href="/valuation" className="hover:text-[#E53935] transition">Valuations</Link></li>
            <li><Link href="/contact" className="hover:text-[#E53935] transition">Contact</Link></li>
          </ul>
        </div>

        {/* 3. Our Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services" className="hover:text-[#E53935] transition">Certificate of Valuation</Link></li>
            <li><Link href="/services" className="hover:text-[#E53935] transition">Pre Accident Valuations</Link></li>
            <li><Link href="/services" className="hover:text-[#E53935] transition">Auction & Yard Valuations</Link></li>
            <li><Link href="/services" className="hover:text-[#E53935] transition">Consultation Services</Link></li>
          </ul>
        </div>

        {/* 4. Contact Us */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <span className="text-[#E53935] mt-1">📍</span>
              <div>
                <strong className="text-gray-200 block mb-1">Head Office:</strong>
                No. 268/1 Ratnapura Road, <br />Getaheththa, Sri Lanka.
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#E53935] mt-1">📞</span>
              <div>
                <strong className="text-gray-200 block mb-1">Call Us:</strong>
                +94 778 905 771
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        <p>© {new Date().getFullYear()} MJ Lanka Group of Company (Pvt) Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}