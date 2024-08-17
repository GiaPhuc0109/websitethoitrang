import Header from "./components/header.js";
import Footer from "./components/footer.js";
import "../../public/bootstrap/css/bootstrap.min.css";
import Providers from "@/app/redux/slices/Provider.js";
import { Inter } from "next/font/google"; // Đảm bảo import đúng cách

const inter = Inter({ subsets: ["latin"] }); // Khởi tạo font

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          {" "}
          {/* Áp dụng class font */}
          <Header />
          {children}
          <script src="../../public/bootstrap/js/bootstrap.bundle.min.js"></script>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
