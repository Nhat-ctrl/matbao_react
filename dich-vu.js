import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
function App() {
  return (
        <>

          {/* Google tag (gtag.js) */}
          <ul className="h-card hidden-vcard">
            <li className="h-fn fn">Mắt Bão BPO</li>
            <li className="h-org org">Mắt Bão BPO</li>
            <li className="h-tel tel">02873019988</li>
            <li>
              <a className="u-url ul" href="/">
                https://matbaobpo.com/
              </a>
            </li>
          </ul>
          <h1 className="hidden-seoh">Dịch vụ</h1>
          <section className="menu menu-inpage" id="menu">
            <div className="container">
              <div className="desc-menu d-flex justify-content-between align-items-center">
                <div className="logo-header">
                  <a href="/">
                    <img src="upload/photo/logo-3797.svg" alt="Mắt Bão BPO" />
                  </a>
                </div>
                <ul className="menu-i d-flex align-items-center justify-content-between">
                  <li className="li-home">
                    <a
                      className="transition active"
                      title="Trang chủ"
                      href="/"
                    >
                      <img src="assets/images/home.svg" alt="Trang chủ" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition "
                      href="javascript:void(0)"
                      title="Giới thiệu"
                    >
                      Giới thiệu
                    </a>
                    <ul>
                      <li>
                        <a
                          title="Về Mắt Bão BPO"
                          href="gioi-thieu/ve-mat-bao-bpo.html"
                        >
                          Về Mắt Bão BPO
                        </a>
                      </li>
                      <li>
                        <a title="Thành viên" href="gioi-thieu/thanh-vien.html">
                          Thành viên
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="transition active"
                      title="Dịch vụ"
                      href="dich-vu.html"
                    >
                      Dịch vụ
                    </a>
                    <ul>
                      <li>
                        <a title="Contact Center" href="dich-vu/contact-center.html">
                          Contact Center
                        </a>
                      </li>
                      <li>
                        <a
                          title="Thuê ngoài nhân sự"
                          href="dich-vu/thue-ngoai-nhan-su.html"
                        >
                          Thuê ngoài nhân sự
                        </a>
                      </li>
                      <li>
                        <a title="Tính lương" href="dich-vu/tinh-luong.html">
                          Tính lương
                        </a>
                      </li>
                      <li>
                        <a
                          title="Quản lý tòa nhà"
                          href="dich-vu/quan-ly-toa-nha.html"
                        >
                          Quản lý tòa nhà
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="transition "
                      href="javascript:void(0)"
                      title="Tuyển dụng"
                    >
                      Tuyển dụng
                    </a>
                    <ul>
                      <li>
                        <a
                          title="Chính sách- chế độ của Mắt Bão BPO"
                          href="viec-lam/van-hoa-mat-bao-bpo.html"
                        >
                          Chính sách- chế độ của Mắt Bão BPO
                        </a>
                      </li>
                      <li>
                        <a title="Tin tuyển dụng" href="viec-lam/tuyen-dung.html">
                          Tin tuyển dụng
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="transition " title="Tin tức" href="tin-tuc.html">
                      Tin tức
                    </a>
                    <ul>
                      <li>
                        <a title="Tin tức ngành" href="tin-tuc/tin-tuc-nganh.html">
                          Tin tức ngành
                        </a>
                      </li>
                      <li>
                        <a title="Tin tức nội bộ" href="tin-tuc/tin-tuc-noi-bo.html">
                          Tin tức nội bộ
                        </a>
                      </li>
                      <li>
                        <a
                          title="Kiến thức- Góc nhìn"
                          href="tin-tuc/kien-thuc-goc-nhin.html"
                        >
                          Kiến thức- Góc nhìn
                        </a>
                      </li>
                      <li>
                        <a title="Thư viện" href="tin-tuc/thu-vien.html">
                          Thư viện
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="transition " title="Liên hệ" href="lien-he.html">
                      Liên hệ
                    </a>
                  </li>
                </ul>
                <div className="menu-right d-flex justify-content-between align-items-center">
                  <div className="box-search">
                    <span className="search-open">
                      <img src="assets/images/icon-search.svg" alt="Search" />
                    </span>
                    <form
                      id="frmSearch"
                      method="get"
                      action="https://matbaobpo.com/Search"
                    >
                      <div className="search-ab">
                        <div className="search">
                          <input
                            type="text"
                            id="keyword"
                            name="keyword"
                            placeholder="Nhập từ khóa cần tìm..."
                          />
                          <p onclick="onSearch('keyword');">
                            <i className="fas fa-search" />
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className=" box-ngonngu lang-google position-relative">
                    <p className="show-lang-gg ngonngu lang_txt">
                      <span className="ngonngu-img">
                        <img src="assets/images/vietnam.svg" alt="Mắt Bão BPO" />
                      </span>
                      <span className="ngonngu-text ngonngu-none">Tiếng Việt</span>
                      <span className="ngonngu-icon">
                        <i className="fas fa-angle-down" />
                      </span>
                    </p>
                    <div
                      className="list-translate bg-white"
                      style={{ display: "none" }}
                    >
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0)"
                            data-code="vn"
                            data-text="Tiếng Việt"
                            className="changeLanguage text-left active"
                            data-img="<img src='_/assets/images/vietnam.html' alt=''>"
                          >
                            <span className="ngonngu-img">
                              <img
                                src="assets/images/vietnam.svg"
                                alt="Mắt Bão BPO"
                              />
                            </span>
                            <span className="ngonngu-text text-dark">Tiếng Việt</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            data-code="us"
                            data-text=" Tiếng Anh"
                            className="changeLanguage text-left "
                            data-img="<img src='_/assets/images/eng.html' alt=''>"
                          >
                            <span className="ngonngu-img">
                              <img src="assets/images/eng.svg" alt="Mắt Bão BPO" />
                            </span>
                            <span className="ngonngu-text text-dark">Tiếng Anh</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            data-code="kr"
                            data-text="Tiếng Hàn"
                            data-img="<img src='_/assets/images/han.html' alt=''>"
                            className="changeLanguage text-left "
                          >
                            <span className="ngonngu-img">
                              <img src="assets/images/han.svg" alt="Mắt Bão BPO" />
                            </span>
                            <span className="ngonngu-text text-dark">Tiếng Hàn</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-mobile-btn d-none">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="opacity-menu" />
          <div className="header-left-fixwidth">
            <div className="section wrap-header">
              <div className="nav-menu">
                <ul>
                  <li>
                    <button
                      id="navMenuClose"
                      className="reset cd-nav-trigger js-cd-nav-trigger cd-nav-trigger--nav-is-visible"
                    >
                      <span />
                    </button>
                  </li>
                  <li className="li-home">
                    <a
                      className="transition active"
                      title="Trang chủ"
                      href="/"
                    >
                      <img src="assets/images/home.svg" alt="Trang chủ" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition "
                      href="javascript:void(0)"
                      title="Giới thiệu"
                    >
                      Giới thiệu
                    </a>
                    <ul className="ul-sub">
                      <li>
                        <a
                          title="Về Mắt Bão BPO"
                          href="gioi-thieu/ve-mat-bao-bpo.html"
                        >
                          Về Mắt Bão BPO
                        </a>
                      </li>
                      <li>
                        <a title="Thành viên" href="gioi-thieu/thanh-vien.html">
                          Thành viên
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="transition active"
                      title="Dịch vụ"
                      href="dich-vu.html"
                    >
                      Dịch vụ
                    </a>
                    <ul className="ul-sub">
                      <li>
                        <a title="Contact Center" href="dich-vu/contact-center.html">
                          Contact Center
                        </a>
                      </li>
                      <li>
                        <a
                          title="Thuê ngoài nhân sự"
                          href="dich-vu/thue-ngoai-nhan-su.html"
                        >
                          Thuê ngoài nhân sự
                        </a>
                      </li>
                      <li>
                        <a title="Tính lương" href="dich-vu/tinh-luong.html">
                          Tính lương
                        </a>
                      </li>
                      <li>
                        <a
                          title="Quản lý tòa nhà"
                          href="dich-vu/quan-ly-toa-nha.html"
                        >
                          Quản lý tòa nhà
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="transition "
                      href="javascript:void(0)"
                      title="Tuyển dụng"
                    >
                      Tuyển dụng
                    </a>
                    <ul className="ul-sub">
                      <li>
                        <a
                          title="Chính sách- chế độ của Mắt Bão BPO"
                          href="viec-lam/van-hoa-mat-bao-bpo.html"
                        >
                          Chính sách- chế độ của Mắt Bão BPO
                        </a>
                      </li>
                      <li>
                        <a title="Tin tuyển dụng" href="viec-lam/tuyen-dung.html">
                          Tin tuyển dụng
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="transition " title="Tin tức" href="tin-tuc.html">
                      Tin tức
                    </a>
                    <ul className="ul-sub">
                      <li>
                        <a title="Tin tức ngành" href="tin-tuc/tin-tuc-nganh.html">
                          Tin tức ngành
                        </a>
                      </li>
                      <li>
                        <a title="Tin tức nội bộ" href="tin-tuc/tin-tuc-noi-bo.html">
                          Tin tức nội bộ
                        </a>
                      </li>
                      <li>
                        <a
                          title="Kiến thức- Góc nhìn"
                          href="tin-tuc/kien-thuc-goc-nhin.html"
                        >
                          Kiến thức- Góc nhìn
                        </a>
                      </li>
                      <li>
                        <a title="Thư viện" href="tin-tuc/thu-vien.html">
                          Thư viện
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="transition" title="Liên hệ" href="lien-he.html">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section id="bc" className="mb-80">
            <div className="bc-img">
              <img src="thumbs/1440x415x1/upload/photo/banner-6291.png" alt="" />
            </div>
            <div className="bc-content">
              <div className="container">
                <p className="bc-name">Dịch vụ</p>
                <div className="breadCrumbs">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a className="text-decoration-none" href="/">
                        <span>Trang chủ</span>
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-decoration-none" href="dich-vu.html">
                        <span>Dịch vụ</span>
                      </a>
                    </li>
                  </ol>
                </div>
                <a
                  className="btn-dangkytuvan btn"
                  href="javascript:void(0)"
                  data-toggle="modal"
                  data-target="#popup-tuvan"
                >
                  <span>
                    <img src="assets/images/arr-home.svg" alt="" />
                  </span>
                  Đăng ký tư vấn
                </a>
              </div>
            </div>
          </section>
          <div className="wrap-main w-clear">
            <div className="service-inpage">
              <div className="container">
                <div className="slogan-service-inpage">
                  <p className="title-home text-center title-service-inpage">
                    Các Dịch Vụ tại Mắt Bão BPO
                  </p>
                  <div className="text-home text-justify">
                    <div className="text-home text-justify">
                      <p style={{ textAlign: "center" }}>
                        <span style={{ fontSize: 18 }}>
                          CONTACT CENTER -&nbsp; CHO THUÊ NHÂN SỰ - DỊCH VỤ TÍNH
                          LƯƠNG&nbsp;- QUẢN LÝ TÒA NHÀ
                        </span>
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Thuê ngoài quy trình kinh doanh (BPO - Business Process
                        Outsourcing) là khái niệm để chỉ việc sử dụng các dịch vụ liên
                        quan của các nhà cung cấp chuyên nghiệp bên ngoài thay vì tự
                        tổ chức cung cấp (in-house) nhằm giảm chi phí và tăng khả năng
                        cạnh tranh cũng như khả năng tập trung những mặt mạnh của
                        doanh nghiệp.
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Tại Mắt Bão BPO, chúng tôi hiện tại đang cung cấp những dịch
                        vụ sau:
                      </p>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="service-list">
                <div className="container d-flex flex-wrap justify-content-center align-items-center">
                  <div className="box-dichvu-list">
                    <div className="dichvu-lists">
                      <div className="dichvu-list">
                        <div className="dichvu-list-img">
                          <a
                            title="Contact Center"
                            href="dich-vu/contact-center.html"
                          >
                            <img
                              onerror="this.src='_/thumbs/70x70x1/assets/images/noimage.html';"
                              src="thumbs/70x70x1/upload/news/4-1412.png"
                              alt="Contact Center"
                            />
                          </a>
                        </div>
                        <p className="dichvu-list-name">
                          <a
                            title="Contact Center"
                            href="dich-vu/contact-center.html"
                          >
                            Contact Center
                          </a>
                        </p>
                      </div>
                      <div className="dichvu-list">
                        <div className="dichvu-list-img">
                          <a
                            title="Thuê ngoài nhân sự"
                            href="dich-vu/thue-ngoai-nhan-su.html"
                          >
                            <img
                              onerror="this.src='_/thumbs/70x70x1/assets/images/noimage.html';"
                              src="thumbs/70x70x1/upload/news/1-3100.png"
                              alt="Thuê ngoài nhân sự"
                            />
                          </a>
                        </div>
                        <p className="dichvu-list-name">
                          <a
                            title="Thuê ngoài nhân sự"
                            href="dich-vu/thue-ngoai-nhan-su.html"
                          >
                            Thuê ngoài nhân sự
                          </a>
                        </p>
                      </div>
                      <div className="dichvu-list">
                        <div className="dichvu-list-img">
                          <a title="Tính lương" href="dich-vu/tinh-luong.html">
                            <img
                              onerror="this.src='_/thumbs/70x70x1/assets/images/noimage.html';"
                              src="thumbs/70x70x1/upload/news/2-2162.png"
                              alt="Tính lương"
                            />
                          </a>
                        </div>
                        <p className="dichvu-list-name">
                          <a title="Tính lương" href="dich-vu/tinh-luong.html">
                            Tính lương
                          </a>
                        </p>
                      </div>
                      <div className="dichvu-list">
                        <div className="dichvu-list-img">
                          <a
                            title="Quản lý tòa nhà"
                            href="dich-vu/quan-ly-toa-nha.html"
                          >
                            <img
                              onerror="this.src='_/thumbs/70x70x1/assets/images/noimage.html';"
                              src="thumbs/70x70x1/upload/news/3-8844.png"
                              alt="Quản lý tòa nhà"
                            />
                          </a>
                        </div>
                        <p className="dichvu-list-name">
                          <a
                            title="Quản lý tòa nhà"
                            href="dich-vu/quan-ly-toa-nha.html"
                          >
                            Quản lý tòa nhà
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="logo-dichvu">
                      <p>
                        <a href="/">
                          <img
                            onerror="this.src='_/thumbs/172x51x2/assets/images/noimage.html';"
                            src="upload/photo/logo-3797.svg"
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer id="footer" className="p-80">
            <div className="container ">
              <div className="footer-article">
                <div className="row d-flex align-items-start justify-content-between">
                  <div className="footer-news col-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="logo-footer">
                      <a href="#">
                        <img src="upload/photo/logo-footer-4403.svg" />
                      </a>
                    </div>
                    <div className="info-footer">
                      Mắt Bão BPO luôn luôn hoàn thiện và phát triển để trở thành
                      doanh nghiệp Outsourcing số 1
                    </div>
                    <div>
                      <p style={{ marginTop: 10 }}>
                        <img src="img/iso9001.png" className="img-iso" />
                        <img src="img/iso27001.png" className="img-iso" />
                        <a
                          href="http://online.gov.vn/Home/WebDetails/46907"
                          target="_blank"
                        >
                          <img
                            alt=""
                            title=""
                            src="img/logoSaleNoti.png"
                            className="img-logo-bct"
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="footer-news col-12 col-sm-6 col-md-6 col-lg-3">
                    <p className="title-footer">CÔNG TY CỔ PHẦN BPO MẮT BÃO</p>
                    <div className="content-footer">
                      <h6>
                        <span style={{ fontSize: 16 }}>
                          <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                            <strong>Trụ Sở Hồ Chí Minh</strong>
                          </span>
                        </span>
                      </h6>
                      <p>
                        <span style={{ fontSize: 16 }}>
                          <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                            12A Núi Thành, Phường 13, Quận Tân Bình, Thành Phố Hồ Chí
                            Minh, Việt Nam
                          </span>
                        </span>
                      </p>
                      <p>&nbsp;</p>
                      <h6>
                        <span style={{ fontSize: 16 }}>
                          <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                            <strong>Chi Nhánh Hà Nội</strong>
                          </span>
                        </span>
                      </h6>
                      <p>
                        <span style={{ fontSize: 16 }}>
                          <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                            381 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội, Việt
                            Nam
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="footer-news col-12 col-sm-6 col-md-6 col-lg-3">
                    <p className="title-footer">Thông tin liên hệ</p>
                    <div className="content-footer">
                      <p>
                        Hotline Call Center:{" "}
                        <a href="tel:19007151" className="lnk-hotline">
                          <strong>1900 7151</strong>
                        </a>
                      </p>
                      <p>
                        Hotline Kinh Doanh:
                        <a href="tel:02873019988" className="lnk-hotline">
                          <strong> 028 7301 9988</strong>
                        </a>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:info@matbaobpo.com">
                          <strong>info@matbaobpo.com</strong>
                        </a>
                      </p>
                      <p>
                        Website:{" "}
                        <a href="/">
                          <strong>matbaobpo.com</strong>
                        </a>
                      </p>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="copyright">
              Copyright© 2024 Mắt Bão BPO. All rights reserved.
            </p>
          </footer>
          <div
            className="modal modal-custom fade"
            id="popup-tuvan"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="popup-tuvan-label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-top modal-md" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <p className="title-home text-gradient mb-1">Đăng ký nhận tư vấn</p>
                  <p className="text-home mb-3">
                    Những ý kiến của bạn rất quan trọng và giúp chúng tôi nâng cao hơn
                    nữa sự phục vụ dành cho các bạn. Nếu bạn có yêu cầu,ý kiến hay
                    thắc mắc về bất cứ vấn đề gì, xin vui lòng dành một ít thời gian
                    điền vào mẫu bên dưới
                  </p>
                  <form
                    id="frmPopupRegConsult"
                    className="form-tuvan mt-3"
                    noValidate=""
                    method="post"
                    action="#"
                  >
                    <div className="row">
                      <div className="input-tuvan col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Họ tên"
                          name="P_CustomerName"
                          id="P_CustomerName"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-tuvan col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tên công ty"
                          name="P_CompanyName"
                          id="P_CompanyName"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-tuvan col-sm-12 col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Số điện thoại"
                          name="P_CustomerPhone"
                          id="P_CustomerPhone"
                        />
                      </div>
                      <div className="input-tuvan col-sm-12 col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="P_CustomerEmail"
                          id="P_CustomerEmail"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-tuvan col-12 col-sm-12">
                        <div className="custom-select-recruitment">
                          <select
                            className="form-select form-control"
                            name="P_ServiceType"
                            id="P_ServiceType"
                          >
                            <option value="">Nhu cầu liên hệ</option>
                            <option value={6}>Contact Center</option>
                            <option value={7}>Thuê ngoài nhân sự</option>
                            <option value={8}>Tính lương</option>
                            <option value={9}>Quản lý tòa nhà</option>
                          </select>
                          <span className="select-icon text-dark">
                            <i className="fas fa-chevron-down" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-tuvan col-12 col-sm-12">
                        <div className="custom-select-recruitment">
                          <select
                            className="form-select form-control"
                            name="P_AreaId"
                            id="P_AreaId"
                          >
                            <option value="">Chi nhánh cần liên hệ</option>
                            <option value={1}>Trụ sở Hồ Chí Minh</option>
                            <option value={2}>Chi nhánh Hà Nội</option>
                            <option value={3}>Văn phòng Bình Phước</option>
                            <option value={4}>Văn phòng Hải Phòng</option>
                            <option value={5}>Văn phòng Bắc Ninh</option>
                            <option value={8}>Văn phòng tuyển dụng Củ Chi</option>
                            <option value={9}>Văn phòng tuyển dụng Quảng Nam</option>
                            <option value={10}>Văn phòng tuyển dụng Bắc Giang</option>
                          </select>
                          <span className="select-icon text-dark">
                            <i className="fas fa-chevron-down" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-tuvan col-12 col-sm-12">
                        <textarea
                          className="form-control"
                          placeholder="Ghi chú"
                          name="P_ConsultantContent"
                          id="P_ConsultantContent"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <input
                      type="button"
                      className="btn btn-recruitment"
                      name="submit-tuvan-pop"
                      id="submit-tuvan-pop"
                      defaultValue="Gửi thông tin"
                    />
                    <input
                      type="hidden"
                      name="recaptcha_response_newsletter"
                      id="recaptchaResponseNewsletter"
                    />
                    <input
                      name="__RequestVerificationToken"
                      type="hidden"
                      defaultValue="CfDJ8GNq-xPCUgtFiY1C-9WBevBAfT0si9K7gaUiU-wNH5hd60hi22Zxvn9TafIbtyHT4e5OgcIZTQWLUV6PzXWCfeKiCXGffCAwFX2OCSiGIZjCgv1MN8d7jl-mvEpbNQI0p3LAHG7EInMmbg5PSaOjJqI"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="toolbar">
            <ul>
              <li>
                <a id="goidien" href="tel:02873019988" title="title">
                  <img src="assets/images/icon-t1.png" alt="images" />
                  <br />
                  <span>Gọi điện</span>
                </a>
              </li>
              <li>
                <a id="nhantin" href="sms:02873019988" title="title">
                  <img src="assets/images/icon-t2.png" alt="images" />
                  <br />
                  <span>Nhắn tin</span>
                </a>
              </li>
              <li>
                <a id="chatzalo" href="https://zalo.me/02873019988" title="title">
                  <img src="assets/images/icon-t3.png" alt="images" />
                  <br />
                  <span>Chat zalo</span>
                </a>
              </li>
              <li>
                <a
                  id="chatfb"
                  href="https://www.facebook.com/matbaobpo2014"
                  title="title"
                >
                  <img src="assets/images/icon-t4.png" alt="images" />
                  <br />
                  <span>Chat facebook</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Modal notify */}
          <div
            className="modal modal-custom fade"
            id="popup-notify"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="popup-notify-label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-top modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h6 className="modal-title" id="popup-notify-label">
                    Thông báo
                  </h6>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <span id="msg" />
                </div>
                <div className="modal-footer justify-content-center">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Thoát
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="script-main" />
        </>
  );     
}

export default App;
