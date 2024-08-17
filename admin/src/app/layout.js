import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
    </head>
      <body className={inter.className}>
      <div className="row">
            <div className="col-md-2 bg-dark text-white p-4">
              <h3 className="text-center"><span className="text-danger">HPL</span>SHOP</h3>
              <hr />
              <p><i className="bi bi-pie-chart-fill me-2"></i><Link href="thongke" className="text-decoration-none text-white">Quản lý thống kê</Link></p>
              <p><i className="bi bi-tag-fill me-2"></i><Link href="danhmuc" className="text-decoration-none text-white">Quản lý danh mục</Link></p>
              <p><i className="bi bi-box-seam me-2"></i><Link href="sanpham" className="text-decoration-none text-white">Quản lý sản phẩm</Link></p>
              <p><i className="bi bi-people-fill me-2"></i><Link href="nguoidung" className="text-decoration-none text-white">Quản lý người dùng</Link></p>
              <p><i className="bi bi-cart-fill me-2"></i><Link href="donhang" className="text-decoration-none text-white">Quản lý đơn hàng</Link></p>
              <p><i className="bi bi-chat-left-text-fill me-2"></i><Link href="binhluan" className="text-decoration-none text-white">Quản lý bình luận</Link></p>
              <hr />
              <div className="text-center">
                <Link href="?mod=user&act=logout" className="btn btn-danger">Đăng xuất</Link>
              </div>
            </div>
            <div className="col-md-10 p-0">
              <div className="shadow bg-danger text-white d-flex justify-content-between align-content-center p-3 pb-1">
                <p>TRANG QUẢN TRỊ WEBSITE HPLSHOP</p>
                <div><span>Admin</span><img className="rounded m-1 border border-1 border-white" width="30px" height="30px" src="" alt="" /></div>
              </div>
              <div className="row">
                {children}
              </div>

            </div>
            <div className="bg-danger text-white text-center p-2">
                <p>@2024 by HPLSHOP</p>
              </div>
          </div>
      </body>
    </html>
  );
}