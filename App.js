import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <div className="App">
  
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
    <h1 className="hidden-seoh" />
    <section className="menu " id="menu">
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
              <a className="transition " title="Dịch vụ" href="dich-vu.html">
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
              <a className="transition " title="Dịch vụ" href="dich-vu.html">
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
    <div className="box-main">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .box-hotline{\n        pointer-events: visible !important;\n    }\n"
        }}
      />
      <div className="container-landingpage">
        <div className="box-slider swiper-container-vertical">
          <div className="box-wrapper swiper-wrapper">
            <div
              className="group-box home-banner show-box fullpage-slide swiper-slide menu-enable swiper-slide-prev"
              data-stt={1}
              data-animation="section1"
              id="section1"
            >
              <div className="slideshow slideshowvideo">
                <video
                  id="myVideo"
                  controls=""
                  playsInline=""
                  loop=""
                  autoPlay=""
                  muted=""
                >
                  <source
                    src="upload/file/video-banner-trang-chu-1-5373.mp4"
                    asp-append-version="true"
                    type="video/mp4"
                  />
                </video>
                <div className="video-content-ab">
                  <div className="container container-index">
                    <div className="video-content">
                      <p className="name-video">
                        {" "}
                        Kết hợp giữa công nghệ thông tin và hệ thống quản lý
                        nhân sự Outsourcing chuyên nghiệp
                      </p>
                      <p className="desc-video text-home">
                        Công ty Cổ phần BPO Mắt Bão được biết đến là nhà cung
                        cấp dịch vụ thuê ngoài quy trình kinh doanh tốt nhất tại
                        Việt Nam. Với sứ mệnh là cung cấp các giải pháp nhân sự
                        chuyên nghiệp cho sự phát triển của khách hàng.
                      </p>
                      <a
                        className="more-video"
                        href="gioi-thieu/ve-mat-bao-bpo.html"
                      >
                        <span>
                          <img
                            src="assets/images/arr-home.svg"
                            alt="Mắt Bão BPO"
                          />
                        </span>
                        Tìm hiểu thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="group-box home-banner show-box fullpage-slide swiper-slide swiper-slide-active"
              data-stt={2}
              data-animation="section2"
              id="section2"
            >
              <section id="giaiphap" className="landing-page">
                <div className="container container-index">
                  <div className="giaiphaps">
                    <div className="giaiphap-left">
                      <div className="giaiphap-content vn">
                        <p className="title-home mb-3 text-white">
                          Mắt Bão BPO - Giải pháp cho mọi doanh nghiệp
                        </p>
                        <a
                          className="giaiphap-xt"
                          href="gioi-thieu/ve-mat-bao-bpo.html"
                        >
                          <span>
                            <img
                              src="assets/images/arr-home.svg"
                              alt="Mắt Bão BPO"
                            />
                          </span>
                          Tìm hiểu thêm
                        </a>
                      </div>
                    </div>
                    <div className="giaiphap-right">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                          <div className="giaiphap-img">
                            <a
                              className="guong"
                              href="javascript:void(0)"
                              title=""
                            >
                              <img
                                src="img/home/ve-mat-bao-bpo2-9556.jpg"
                                alt="Mắt Bão BPO"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                          <div className="giaiphap-img">
                            <a
                              className="guong"
                              href="javascript:void(0)"
                              title=""
                            >
                              <img
                                src="img/home/gth-2-9115.jpg"
                                alt="Mắt Bão BPO"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                          <div className="giaiphap-img">
                            <a
                              className="guong"
                              href="javascript:void(0)"
                              title=""
                            >
                              <img
                                src="img/home/gth-3-3682.png"
                                alt="Mắt Bão BPO"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                          <div className="giaiphap-img">
                            <a
                              className="guong"
                              href="javascript:void(0)"
                              title=""
                            >
                              <img
                                src="img/home/tap-vu-emart-3280.jpg"
                                alt="Mắt Bão BPO"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              className="group-box home-banner show-box fullpage-slide swiper-slide swiper-slide-next"
              data-stt={3}
              data-animation="section3"
              id="section3"
            >
              <section id="dichvu" className="landing-page">
                <div className="container">
                  <div className="dichvu d-flex flex-wrap justify-content-between align-items-center ">
                    <div className="dichvu-left">
                      <p className="text-home text-justify" />
                      <p style={{ textAlign: "justify" }}>
                        <span style={{ fontSize: 18 }}>
                          Thuê ngoài quy trình kinh doanh (BPO - Business
                          Process Outsourcing) là khái niệm để chỉ việc sử dụng
                          các dịch vụ liên quan của các nhà cung cấp chuyên
                          nghiệp bên ngoài thay vì tự tổ chức cung cấp
                          (in-house) nhằm giảm chi phí và tăng khả năng cạnh
                          tranh cũng như khả năng tập trung những mặt mạnh của
                          doanh nghiệp.
                        </span>
                      </p>{" "}
                      <p style={{ textAlign: "justify" }}>&nbsp;</p>{" "}
                      <p style={{ textAlign: "justify" }}>
                        <span style={{ fontSize: 18 }}>
                          Tại Mắt Bão BPO, chúng tôi hiện tại đang cung cấp
                          những dịch vụ sau:
                        </span>
                      </p>{" "}
                      <p style={{ textAlign: "justify" }}>
                        <span style={{ fontSize: 18 }}>
                          CONTACT CENTER -&nbsp; CHO THUÊ NHÂN SỰ - DỊCH VỤ TÍNH
                          LƯƠNG&nbsp;- QUẢN LÝ TÒA NHÀ
                        </span>
                      </p>{" "}
                      <p />
                    </div>
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
                            <a
                              title="Tính lương"
                              href="dich-vu/tinh-luong.html"
                            >
                              <img
                                onerror="this.src='_/thumbs/70x70x1/assets/images/noimage.html';"
                                src="thumbs/70x70x1/upload/news/2-2162.png"
                                alt="Tính lương"
                              />
                            </a>
                          </div>
                          <p className="dichvu-list-name">
                            <a
                              title="Tính lương"
                              href="dich-vu/tinh-luong.html"
                            >
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
                          <a href="#">
                            <img
                              onerror="this.src='_/thumbs/172x51x2/assets/images/noimage.html';"
                              src="upload/photo/logo-3797.svg"
                              alt="Mắt Bão BPO"
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              className="group-box home-banner show-box fullpage-slide swiper-slide"
              data-stt={4}
              data-animation="section4"
              id="section4"
            >
              <section id="thanhtuu" className="landing-page">
                <div className="container-1440 container-index-1440">
                  <div className="box-thanhtuu d-flex flex-wrap">
                    <div className="box-thanhtuu-left">
                      <p className="thanhtuu-img guong">
                        <img
                          src="thumbs/720x810x1/upload/photo/img-thanhtuu-3962.png"
                          alt="Mắt Bão BPO"
                        />
                      </p>
                    </div>
                    <div className="box-thanhtuu-right">
                      <div className="d-flex flex-wrap align-items-center">
                        <h2 className="title-home title-thanhtuu mb-96 text-white">
                          Thành tựu đạt được
                        </h2>
                        <div className="thanhtuus w-100 row mx-auto">
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="thanhtuu">
                              <p className="thanhtuu-number">
                                <span className="counter">6,000</span>+
                              </p>
                              <p className="thanhtuu-desc">
                                NHÂN SỰ TRÊN TOÀN QUỐC
                              </p>
                            </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="thanhtuu">
                              <p className="thanhtuu-number">
                                <span className="counter">150</span>%
                              </p>
                              <p className="thanhtuu-desc">
                                TỶ LỆ TĂNG TRƯỞNG MỖI NĂM
                              </p>
                            </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="thanhtuu">
                              <p className="thanhtuu-number">
                                <span className="counter">300</span>+
                              </p>
                              <p className="thanhtuu-desc">
                                DỰ ÁN THÀNH CÔNG MỖI NĂM
                              </p>
                            </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="thanhtuu">
                              <p className="thanhtuu-number">
                                <span className="counter">300</span>+
                              </p>
                              <p className="thanhtuu-desc">
                                ĐỐI TÁC TRONG VÀ NGOÀI NƯỚC
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              className="group-box home-banner show-box fullpage-slide swiper-slide"
              data-stt={5}
              data-animation="section5"
              id="section5"
            >
              <section id="partner" className="landing-page">
                {/*landing-page*/}
                <div className="container container-index">
                  <h2 className="title-home text-center text-gradient">
                    Khách hàng tiêu biểu
                  </h2>
                  <div className="partners row">
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img
                            src="img/customers/logo-shinhankbank-3918.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img
                            src="img/customers/eb1b37634d259b7bc234-removebg-preview-3-9228.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/2-2412.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/4-6355.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/5-5345.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/6-1928.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/7-7359.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/8-4321.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/9-6233-7791.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/10-1875.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/11-8176.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img
                            src="img/customers/9eb366a191e647b81ef71-removebg-preview-1-9233.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/17-1046.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/20-3856.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-2-5">
                      <div className="partner">
                        <a className="image-blink" href="javascript:void(0)">
                          <img src="img/customers/22-5600.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* Footer */}
            <div
              className="group-box home-banner show-box fullpage-slide swiper-slide"
              data-stt={6}
              data-animation="section6"
              id="section6"
              style={{ height: 321 }}
            >
              <footer id="footer" className="landing-page">
                <div className="container container-index">
                  {/* container-index */}
                  <div className="footer-article">
                    <div className="row d-flex align-items-start justify-content-between">
                      <div className="footer-news col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="logo-footer">
                          <a href="#">
                            <img
                              src="upload/photo/logo-footer-4403.svg"
                              alt="Mắt Bão BPO"
                            />
                          </a>
                        </div>
                        <div className="info-footer">
                          Mắt Bão BPO luôn luôn hoàn thiện và phát triển để trở
                          thành doanh nghiệp Outsourcing số 1
                        </div>
                      </div>
                      <div className="footer-news col-12 col-sm-6 col-md-6 col-lg-3">
                        <p className="title-footer">
                          CÔNG TY CỔ PHẦN BPO MẮT BÃO
                        </p>
                        <div className="content-footer">
                          <h6>
                            <span style={{ fontSize: 16 }}>
                              <span
                                style={{
                                  fontFamily: "Arial,Helvetica,sans-serif"
                                }}
                              >
                                <strong>Trụ Sở Hồ Chí Minh</strong>
                              </span>
                            </span>
                          </h6>
                          <p>
                            <span style={{ fontSize: 16 }}>
                              <span
                                style={{
                                  fontFamily: "Arial,Helvetica,sans-serif"
                                }}
                              >
                                12A Núi Thành, Phường 13, Quận Tân Bình, Thành
                                Phố Hồ Chí Minh, Việt Nam
                              </span>
                            </span>
                          </p>
                          <p>&nbsp;</p>
                          <h6>
                            <span style={{ fontSize: 16 }}>
                              <span
                                style={{
                                  fontFamily: "Arial,Helvetica,sans-serif"
                                }}
                              >
                                <strong>Chi Nhánh Hà Nội</strong>
                              </span>
                            </span>
                          </h6>
                          <p>
                            <span style={{ fontSize: 16 }}>
                              <span
                                style={{
                                  fontFamily: "Arial,Helvetica,sans-serif"
                                }}
                              >
                                381 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà
                                Nội, Việt Nam
                              </span>
                            </span>
                          </p>
                          <p style={{ marginTop: 20 }}>
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
                              <strong>&nbsp;028 7301 9988</strong>
                            </a>
                          </p>
                          <p>
                            Email:{" "}
                            <a href="/">
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
                  Copyright© 2024 Mắt Bão BPO. All rights reserved.{" "}
                </p>
              </footer>
              <div className="toolbar" style={{}}>
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
                    <a
                      id="chatzalo"
                      href="https://zalo.me/02873019988"
                      title="title"
                    >
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
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
      </div>
      <div className="box-social d-flex justify-content-between align-items-center">
        <div className="box-hotline call-hotline">
          <a className="btn-hotline" href="tel:02873019988">
            <img src="assets/images/hotline.svg" alt="Gọi điện" /> 028 7301 9988
          </a>
        </div>
        <ul className="ul-social-index mxh">
          <li>
            <a href="mailto:info@matbaobpo.com" target="_blank">
              <img
                src="thumbs/50x50x1/upload/photo/artboard-9-94290.png"
                alt="Mắt Bão BPO"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="scroll-mouse nav-click">
        <img src="assets/images/scroll.svg" alt="Scroll" />
      </div>
    </div>
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
    {/* General */}
    {/* Modal notify */}
    {/* Modal tuvan */}
    <div id="script-main" />

)

    </div>
  );
}

export default App;
