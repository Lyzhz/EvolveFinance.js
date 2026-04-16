import './globals.css';
import Sidebar from '@/components/sidebar';
import TopBar from '@/components/topbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-full">
          {/* Sidebar */}
          <Sidebar />
          {/* Main content area */}
          <div className="flex flex-col flex-1">
            {/* TopBar */}
            <TopBar />

            {/* Main content */}
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
