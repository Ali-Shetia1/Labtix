import {Outfit} from 'next/font/google';
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from 'react-hot-toast';

const outfit = Outfit({subsets: ['latin'], weight: ["300", "400", "500"]})
export const metadata = {
  title: "Labtix - Egypt best laptops store",
  description: "We sell top laptop brands in Egypt with real warranties, fair prices, and great service—online and in-store.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`} >
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
  );
}
