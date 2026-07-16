import CeylonNavbar from '@/components/CeylonNavbar';
import CeylonFooter from '@/components/CeylonFooter';

export default function CreditLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <CeylonNavbar />
      <main className="flex-grow">{children}</main>
      <CeylonFooter />
    </div>
  );
}
