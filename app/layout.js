import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/components/StoreProvider";
import { QueryProvider } from "@/components/QueryProvider";
import FloatingButton from "@/components/FloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Icy Store",
  description: "your modern store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <StoreProvider>
          <QueryProvider>
            <Navbar />
            <FloatingButton />
            {children}
            <Footer />
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
