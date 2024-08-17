import Link from "next/link";
import "../globals.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h4>Thông tin liên hệ</h4>
              <p>
                Công viên phân mền Quang Trung,Tòa T,Tô Ký,p.Tân Chánh Hiệp,Quận
                12,TP.Hồ Chí Minh
              </p>
              <p>Email: provip1323gmail.com</p>
              <p>Điện thoại: 123-456-789</p>
            </div>
            <div className="footer-column">
              <h4>Chính sách</h4>
              <ul>
                <li>
                  <Link href="#">Phước thức thanh toán</Link>
                </li>
                <li>
                  <Link href="#">Chính sách bảo mật</Link>
                </li>
                <li>
                  <Link href="#">Điều khoản sử dụng</Link>
                </li>
                <li>
                  <Link href="#">Chính sách hoàn trả</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Liên kết nhanh</h4>
              <ul>
                <li>
                  <Link href="#">Trang chủ</Link>
                </li>
                <li>
                  <Link href="#">Visa</Link>
                </li>
                <li>
                  <Link href="#">Liên hệ</Link>
                </li>
              </ul>
            </div>
          </div>

          <p className="footer-duoi">
            © 2023 Bhaise travel around the world. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
