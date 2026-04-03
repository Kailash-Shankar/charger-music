import './globals.css';
import SiteHeader from '@/components/SiteHeader';

export const metadata = {
  title: 'Strawberry Crest Music',
  description: 'Strawberry Crest High School Music Department',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
