import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
function App() {
    return (
        <>
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
          <h1 className="hidden-seoh">Tin tức</h1>
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
                    <a
                      className="transition active"
                      title="Tin tức"
                      href="tin-tuc.html"
                    >
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
                    <a
                      className="transition active"
                      title="Tin tức"
                      href="tin-tuc.html"
                    >
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
          <section id="bc" className="">
            <div className="bc-img">
              <img src="thumbs/1440x415x1/upload/photo/banner-1705.png" alt="" />
            </div>
            <div className="bc-content">
              <div className="container">
                <p className="bc-name">Tin tức</p>
                <div className="breadCrumbs">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a className="text-decoration-none" href="/">
                        <span>Trang chủ</span>
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-decoration-none" href="tin-tuc.html">
                        <span>Tin tức</span>
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <div className="wrap-main w-clear">
            <div className="about-inpage">
              <div className="box-title-click mb-96">
                <div className="container">
                  <div className="title-members title-clicks"></div>
                </div>
              </div>
              <div className="load-culture">
                <div className="container">
                  <div className="">
                    {/*row mb-96*/}
                    <div className="row mb-50">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Câu hỏi thường gặp: Dịch vụ tính lương là gì?"
                              href="tin-tuc/tin-tuc-nganh/cau-hoi-thuong-gap-dich-vu-tinh-luong-la-gi.html"
                            >
                              <img
                                src="img/posts/cau-hoi-thuong-gap-dich-vu-tinh-luong-la-gi-4832.png"
                                alt="Câu hỏi thường gặp: Dịch vụ tính lương là gì?"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Câu hỏi thường gặp: Dịch vụ tính lương là gì?"
                                href="tin-tuc/tin-tuc-nganh/cau-hoi-thuong-gap-dich-vu-tinh-luong-la-gi.html"
                              >
                                Câu hỏi thường gặp: Dịch vụ tính lương là gì?
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Dịch vụ tính lương là một công ty hoặc tổ chức bên thứ
                              ba hỗ trợ xử lý bảng lương. Chúng đơn giản hóa nhiều thứ
                              liên quan đến thanh toán kịp thời và chính xác
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Mắt Bão BPO tổ chức sinh nhật cho thành viên có ngày sinh trong quý 3"
                              href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-to-chuc-sinh-nhat-cho-thanh-vien-co-ngay-sinh-trong-quy-3.html"
                            >
                              <img
                                src="img/posts/d5a8039913b6c1e898a7-6986.jpg"
                                alt="Mắt Bão BPO tổ chức sinh nhật cho thành viên có ngày sinh trong quý 3"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Mắt Bão BPO tổ chức sinh nhật cho thành viên có ngày sinh trong quý 3"
                                href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-to-chuc-sinh-nhat-cho-thanh-vien-co-ngay-sinh-trong-quy-3.html"
                              >
                                Mắt Bão BPO tổ chức sinh nhật cho thành viên có ngày
                                sinh trong quý 3
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Chúc mừng các thành viên có ngày sinh nhật trong quý 3
                              của Mắt Bão BPO
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Career Coach: Vững Đam mê- Phát triển Nghề nghiệp"
                              href="tin-tuc/su-kien-trach-nhiem-xa-hoi/career-coach-vung-dam-me-phat-trien-nghe-nghiep.html"
                            >
                              <img
                                src="img/posts/321-6879.jpg"
                                alt="Career Coach: Vững Đam mê- Phát triển Nghề nghiệp"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Career Coach: Vững Đam mê- Phát triển Nghề nghiệp"
                                href="tin-tuc/su-kien-trach-nhiem-xa-hoi/career-coach-vung-dam-me-phat-trien-nghe-nghiep.html"
                              >
                                Career Coach: Vững Đam mê- Phát triển Nghề nghiệp
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Thứ 6 ngày 07/07 vừa qua Mắt Bão BPO đã tổ chức buổi
                              định hướng nghề nghiệp (Career coach) cho các bạn sinh
                              viên tham gia chương trình Chương trình MBB Talent
                              Internship.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-50">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Bàn về thị trường lao động Việt Nam 2023"
                              href="tin-tuc/tin-tuc-nganh/ban-ve-thi-truong-lao-dong-viet-nam-2023.html"
                            >
                              <img
                                src="img/posts/45-6877.jpg"
                                alt="Bàn về thị trường lao động Việt Nam 2023"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Bàn về thị trường lao động Việt Nam 2023"
                                href="tin-tuc/tin-tuc-nganh/ban-ve-thi-truong-lao-dong-viet-nam-2023.html"
                              >
                                Bàn về thị trường lao động Việt Nam 2023
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Theo các báo cáo và dự báo của các cơ quan thống kê và
                              nghiên cứu, thị trường lao động Việt Nam 2023 được kỳ
                              vọng sẽ phục hồi và phát triển sau những biến động do
                              đại dịch COVID-19 gây ra.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-news">
                        <div className="row">
                          <div className="col-12 col-sm-12">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="pic-news">
                                  <a
                                    className="guong"
                                    title="MBB Young Talents Program 2023: 5 Young Talents trở thành nhân viên chính thức của Mắt Bão BPO"
                                    href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-young-talents-program-2023-5-young-talents-tro-thanh-nhan-vien-chinh-thuc-cua-mat-bao-bpo.html"
                                  >
                                    <img
                                      src="img/posts/045-3518.jpg"
                                      alt="MBB Young Talents Program 2023: 5 Young Talents trở thành nhân viên chính thức của Mắt Bão BPO"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a
                                      className="text-split text-split-2"
                                      title="MBB Young Talents Program 2023: 5 Young Talents trở thành nhân viên chính thức của Mắt Bão BPO"
                                      href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-young-talents-program-2023-5-young-talents-tro-thanh-nhan-vien-chinh-thuc-cua-mat-bao-bpo.html"
                                    >
                                      MBB Young Talents Program 2023: 5 Young Talents
                                      trở thành nhân viên chính thức của Mắt Bão BPO
                                    </a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    Sau 5 tuần trải nghiệm làm việc tại Mắt Bão BPO
                                    như một nhân viên thực thụ (Frontline training)
                                    luân phiên tại 6 phòng ban khác nhau, 5 bạn trẻ
                                    tài năng đã chính thức hoàn thành chương trình đào
                                    tạo MBB Young Talents Program 2023 và trở thành
                                    nhân viên chính thức của công ty.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="pic-news">
                                  <a
                                    className="guong"
                                    title="Cách Tra Cứu Mã Số Sổ BHXH Bằng Chứng Minh Nhân Dân/CCCD"
                                    href="tin-tuc/cnb-(chinh-sach--che-do)/cach-tra-cuu-ma-so-so-bhxh-bang-chung-minh-nhan-dancccd.html"
                                  >
                                    <img
                                      src="img/posts/0321-7235.jpg"
                                      alt="Cách Tra Cứu Mã Số Sổ BHXH Bằng Chứng Minh Nhân Dân/CCCD"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a
                                      className="text-split text-split-2"
                                      title="Cách Tra Cứu Mã Số Sổ BHXH Bằng Chứng Minh Nhân Dân/CCCD"
                                      href="tin-tuc/cnb-(chinh-sach--che-do)/cach-tra-cuu-ma-so-so-bhxh-bang-chung-minh-nhan-dancccd.html"
                                    >
                                      Cách Tra Cứu Mã Số Sổ BHXH Bằng Chứng Minh Nhân
                                      Dân/CCCD
                                    </a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    <p>
                                      Rất nhiều người không biết cách tra cứu mã số sổ
                                      BHXH bằng chứng minh nhân dân hoặc căn cước công
                                      dân, vì vậy Mắt Bão BPO sẽ hướng dẫn các bạn
                                      cách tra cứu.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Mắt Bão BPO tiếp đón Sinh viên CĐ FPT Polytechnic tham quan công ty"
                              href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-tiep-don-sinh-vien-cd-fpt-polytechnic-tham-quan-cong-ty.html"
                            >
                              <img
                                src="img/posts/123-3527.jpg"
                                alt="Mắt Bão BPO tiếp đón Sinh viên CĐ FPT Polytechnic tham quan công ty"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Mắt Bão BPO tiếp đón Sinh viên CĐ FPT Polytechnic tham quan công ty"
                                href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-tiep-don-sinh-vien-cd-fpt-polytechnic-tham-quan-cong-ty.html"
                              >
                                Mắt Bão BPO tiếp đón Sinh viên CĐ FPT Polytechnic tham
                                quan công ty
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Ngày 18/05/2023 Mắt Bão BPO kết hợp với trường CĐ FPT
                              Polytechnic tiếp đón 100 bạn sinh viên từ khoa thương
                              mại điện tử tham quan Mắt Bão BPO.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="MBB Young Talents Program 2023: Đào tạo định hướng"
                              href="tin-tuc/tin-tuc-noi-bo/mbb-young-talents-program-2023-dao-tao-dinh-huong.html"
                            >
                              <img
                                src="img/posts/0123-9557.jpg"
                                alt="MBB Young Talents Program 2023: Đào tạo định hướng"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="MBB Young Talents Program 2023: Đào tạo định hướng"
                                href="tin-tuc/tin-tuc-noi-bo/mbb-young-talents-program-2023-dao-tao-dinh-huong.html"
                              >
                                MBB Young Talents Program 2023: Đào tạo định hướng
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Danh sách 5 Young Talents tài năng nhất đã lộ diện, các
                              bạn đã bắt đầu cuộc hành trình chinh phục bản thân tại
                              Mắt Bão BPO. 5 Tuần khởi động đầu tiên này rất quan
                              trọng và cần cách bạn Young Talents nỗ lực hết 100%.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Lễ Ký Kết MOU Giữa MẮT BÃO BPO và RSQUARE VIỆT NAM"
                              href="tin-tuc/tin-tuc-noi-bo/le-ky-ket-mou-giua-mat-bao-bpo-va-rsquare-viet-nam.html"
                            >
                              <img
                                src="img/posts/010101-7054.jpg"
                                alt="Lễ Ký Kết MOU Giữa MẮT BÃO BPO và RSQUARE VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Lễ Ký Kết MOU Giữa MẮT BÃO BPO và RSQUARE VIỆT NAM"
                                href="tin-tuc/tin-tuc-noi-bo/le-ky-ket-mou-giua-mat-bao-bpo-va-rsquare-viet-nam.html"
                              >
                                Lễ Ký Kết MOU Giữa MẮT BÃO BPO và RSQUARE VIỆT NAM
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Chiều 19.4.2023, Công ty cổ phần BPO Mắt Bão đã có buổi
                              ký kết ghi nhớ hợp tác (MOU) với RSQUARE Việt Nam về
                              cung cấp các dịch vụ liên quan đến bất động sản và dịch
                              vụ cho thuê nhân sự tới khách hàng của hai bên. Buổi ký
                              kết được đánh giá là một sự kiện quan trọng, mở ra thời
                              kỳ mới cho quan hệ hợp tác giữa hai đơn vị, đặc biệt
                              hướng tới mục tiêu “Onestop System”
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Mắt Bão BPO Kỷ Niệm 9 Năm Thành Lập"
                              href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-ky-niem-9-nam-thanh-lap.html"
                            >
                              <img
                                src="img/posts/010-8509.jpg"
                                alt="Mắt Bão BPO Kỷ Niệm 9 Năm Thành Lập"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Mắt Bão BPO Kỷ Niệm 9 Năm Thành Lập"
                                href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-ky-niem-9-nam-thanh-lap.html"
                              >
                                Mắt Bão BPO Kỷ Niệm 9 Năm Thành Lập
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Tháng 4 này là tháng có ý nghĩa quan trọng đối với Công
                              ty cổ phần BPO Mắt Bão, là tháng kỉ niệm 9 năm thành lập
                              của công ty. Cũng là dấu mốc quan trọng để nhìn nhận lại
                              những cố gắng của một tập thể gần 6,000 nhân sự sau 9
                              năm thành lập, đánh dấu bước trưởng thành của công ty và
                              là mốc son mở ra chặng đường phát triển mới.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pagination-home my-3 mx-auto">
                      <div className="row">
                        <div className="col-sm-12 col-md-12">
                          <div
                            className="dataTables_paginate paging_simple_numbers mbb-paging-style"
                            id="example2_paginate"
                          >
                            <ul className="pagination">
                              <li
                                className="paginate_button page-item previous "
                                id="example2_previous"
                              >
                                <a
                                  aria-controls=""
                                  data-dt-idx=""
                                  tabIndex=""
                                  className="page-link"
                                  href="tin-tuc2679.html?page=1"
                                >
                                  <i className="fa fa-step-backward" />
                                </a>
                              </li>
                              <li
                                className="paginate_button page-item previous "
                                id="example2_previous"
                              >
                                <a
                                  aria-controls=""
                                  data-dt-idx=""
                                  tabIndex=""
                                  className="page-link"
                                  href="tin-tucfdfa.html?page=8"
                                >
                                  <i className="fa fa-backward" />
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tuc2679.html?page=1"
                                >
                                  1
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tuc4658.html?page=2"
                                >
                                  2
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tuc9ba9.html?page=3"
                                >
                                  3
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tucfdb0.html?page=4"
                                >
                                  4
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tucaf4d.html?page=5"
                                >
                                  5
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tucc575.html?page=6"
                                >
                                  6
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tuc235c.html?page=7"
                                >
                                  7
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tucfdfa.html?page=8"
                                >
                                  8
                                </a>
                              </li>
                              <li className="paginate_button page-item active ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tuc0b08.html?page=9"
                                >
                                  9
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tuc1448.html?page=10"
                                >
                                  10
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tuc1c8b.html?page=11"
                                >
                                  11
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tucce37.html?page=12"
                                >
                                  12
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tuc8c93.html?page=13"
                                >
                                  13
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tuca7f1.html?page=14"
                                >
                                  14
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a
                                  className="page-link"
                                  aria-controls="example2"
                                  data-dt-idx={2}
                                  tabIndex={0}
                                  href="tin-tuc5760.html?page=15"
                                >
                                  15
                                </a>
                              </li>
                              <li
                                className="paginate_button page-item next "
                                id="example2_next"
                              >
                                <a
                                  aria-controls=""
                                  data-dt-idx=""
                                  tabIndex=""
                                  className="page-link"
                                  href="tin-tuc1448.html?page=10"
                                >
                                  <i className="fa fa-forward" />
                                </a>
                              </li>
                              <li
                                className="paginate_button page-item next "
                                id="example2_next"
                              >
                                <a
                                  aria-controls=""
                                  data-dt-idx=""
                                  tabIndex=""
                                  className="page-link"
                                  href="tin-tuc5760.html?page=15"
                                >
                                  <i className="fa fa-step-forward" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          {/* Modal notify */}
          {/* Modal tuvan */}
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
          {/* Modal tuvan */}
          <div id="script-main" />
        </>
    )
}

export default App;
