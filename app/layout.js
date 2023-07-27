import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/components/StoreProvider";
import { QueryProvider } from "@/components/QueryProvider";
import FloatingButton from "@/components/FloatingButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <ToastContainer />
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
