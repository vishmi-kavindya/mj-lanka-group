export default function CeylonFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-white font-bold mb-4">CEYLON CREDIT</h4>
          <p className="text-sm">Your trusted partner for financial growth and lending solutions.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2 cursor-pointer">
            <li className="hover:text-red-500">Loan Calculator</li>
            <li className="hover:text-red-500">Terms & Conditions</li>
            <li className="hover:text-red-500">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <p className="text-sm">Head Office: Colombo, Sri Lanka.</p>
          <p className="text-sm">Email: info@ceyloncredit.lk</p>
        </div>
      </div>
      <div className="text-center mt-12 text-xs border-t border-gray-800 pt-8">
        © 2026 Ceylon Credit Business LTD. All Rights Reserved.
      </div>
    </footer>
  );
}