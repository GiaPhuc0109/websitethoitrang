"use client";  // Thêm dòng này để biến component thành Client Component

import Link from "next/link";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
export default function Header() {
  // Lấy dữ liệu các mặt hàng trong giỏ hàng từ Redux store
  const cartItems = useSelector((state) => state.cart.items);
  // Tính tổng số lượng mặt hàng trong giỏ hàng
  const cartCount = cartItems.reduce((count, item) => count + Number(item.quantity), 0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
        const token = document.cookie.split(';').find((c) => c.trim().startsWith('token='));
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="container-fluid"
          style={{ backgroundColor: "black", padding: "12px" }}
        >
          <Link
            className="navbar-brand"
            style={{ marginLeft: "50px", color: "white" }}
            href="/"
          >
            Trang Chủ
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="navbar-brand"
                  aria-current="page"
                  style={{ marginLeft: "80px", color: "white" }}
                  href="/sanpham"
                >
                  Sản Phẩm
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand"
                  href="#"
                  style={{ marginLeft: "80px", color: "white" }}
                >
                  Giới Thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href=""
                  className="navbar-brand "
                  aria-disabled="true"
                  style={{ marginLeft: "80px", color: "white" }}
                >
                  Liên Hệ
                </Link>
              </li>
              <li id="account" className="nav-item">
                <Link href={isLoggedIn ? '/info' : '/dangnhap'}
                  className="navbar-brand "
                  aria-disabled="true"
                  style={{ marginLeft: "80px", color: "white" }}
                >
                  Đăng Nhập
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/dangky"
                  className="navbar-brand "
                  aria-disabled="true"
                  style={{ marginLeft: "80px", color: "white" }}
                >
                  Đăng Kí
                </Link>
              </li>
            </ul>
            <form className="d-flex ms-4" action="/timkiem">
              <input
                className="form-control me-2"
                name="keyword"
                placeholder="Nhập tên sản phẩm"
              />
              <button className="btn btn-outline-success" type="submit">
                Tìm
              </button>
            </form>
            {/* Chèn phần hiển thị số lượng giỏ hàng */}
            <div className="d-flex ms-4">
              <Link href="/giohang" className="text-white position-relative">
                <i className="fa fa-shopping-cart fa-2x"></i>
                {/* Hiển thị số lượng giỏ hàng */}
                <span id="amount-cart" className="text-white position-absolute top-0 start-100 translate-middle bg-success px-2 rounded-circle">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
