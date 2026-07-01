import Link from 'next/link'; // 1. Link component එක import කරන්න

export default function CeylonNavbar() {
  // 2. වචනය සහ ඊට අදාළ Path එක මෙලෙස සකසන්න
  const navLinks = [
    { name: "HOME", path: "/" }, // ඔයාගේ Home page එකේ path එක
    { name: "ABOUT US", path: "/about" }, // About page එකේ path එක
    { name: "SERVICES", path: "/credit/services" }, // Services page එකට යන path එක මෙතන දාන්න
    { name: "CONTACT US", path: "/contact" }
  ];
  
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between py-6 px-10 bg-transparent">  
      {/* Logo - අකුරු සුදු පාට කර ඇත (text-white) */}
      <div className="text-2xl font-bold text-white z-10 drop-shadow-md">
        LCB <span className="text-gray-200 font-normal">Finance PLC</span>
      </div>

      {/* Links - අකුරු සුදු පාට කර ඇත (text-white) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 text-[15px] font-bold text-white uppercase tracking-wide">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.path} 
            // Hover වෙනකොට ලා නිල් පාටක් එන්න හදලා තියෙනවා (hover:text-cyan-400)
            className="hover:text-cyan-400 transition-colors drop-shadow-md"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}