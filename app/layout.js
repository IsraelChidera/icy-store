import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/components/StoreProvider";
import { QueryProvider } from "@/components/QueryProvider";
import FloatingButton from "@/components/FloatingButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageWrapper from "@/components/PageWrapper";

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
            <PageWrapper>
              <ToastContainer />
              <Navbar />
              <FloatingButton />
              {children}
              <Footer />
            </PageWrapper>
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
