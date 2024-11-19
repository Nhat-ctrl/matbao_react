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
                              title="Thuê ngoài nhân sự: Lợi ích dành cho doanh nghiệp, đặc biệt doanh nghiệp quy mô nhỏ"
                              href="tin-tuc/tin-tuc-nganh/thue-ngoai-nhan-su-loi-ich-danh-cho-doanh-nghiep-dac-biet-doanh-nghiep-quy-mo-nho.html"
                            >
                              <img
                                src="img/posts/0000-7950.jpg"
                                alt="Thuê ngoài nhân sự: Lợi ích dành cho doanh nghiệp, đặc biệt doanh nghiệp quy mô nhỏ"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Thuê ngoài nhân sự: Lợi ích dành cho doanh nghiệp, đặc biệt doanh nghiệp quy mô nhỏ"
                                href="tin-tuc/tin-tuc-nganh/thue-ngoai-nhan-su-loi-ich-danh-cho-doanh-nghiep-dac-biet-doanh-nghiep-quy-mo-nho.html"
                              >
                                Thuê ngoài nhân sự: Lợi ích dành cho doanh nghiệp, đặc
                                biệt doanh nghiệp quy mô nhỏ
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Với sự nhấn mạnh về văn hóa công ty và sự gắn bó với
                              doanh nghiệp, vai trò của quản lý nguồn nhân lực và chế
                              độ lương thưởng dành cho nhân viên đã và đang trở nên
                              ngày càng quan trọng.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Doanh nghiệp cần làm gì để vượt kỳ vọng của khách hàng?"
                              href="tin-tuc/tin-tuc-nganh/doanh-nghiep-can-lam-gi-de-vuot-ky-vong-cua-khach-hang.html"
                            >
                              <img
                                src="img/posts/1-4-6462.png"
                                alt="Doanh nghiệp cần làm gì để vượt kỳ vọng của khách hàng?"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Doanh nghiệp cần làm gì để vượt kỳ vọng của khách hàng?"
                                href="tin-tuc/tin-tuc-nganh/doanh-nghiep-can-lam-gi-de-vuot-ky-vong-cua-khach-hang.html"
                              >
                                Doanh nghiệp cần làm gì để vượt kỳ vọng của khách
                                hàng?
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Kỳ vọng khách hàng là gì?
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Tại sao doanh nghiệp cần cá nhân hóa dịch vụ khách hàng?"
                              href="tin-tuc/tin-tuc-nganh/tai-sao-doanh-nghiep-can-ca-nhan-hoa-dich-vu-khach-hang.html"
                            >
                              <img
                                src="img/posts/1rmyb1yscgg9wjpf5spp3jq-2739.png"
                                alt="Tại sao doanh nghiệp cần cá nhân hóa dịch vụ khách hàng?"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Tại sao doanh nghiệp cần cá nhân hóa dịch vụ khách hàng?"
                                href="tin-tuc/tin-tuc-nganh/tai-sao-doanh-nghiep-can-ca-nhan-hoa-dich-vu-khach-hang.html"
                              >
                                Tại sao doanh nghiệp cần cá nhân hóa dịch vụ khách
                                hàng?
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Với mức độ cạnh tranh cao giữa các doanh nghiệp trên thị
                              trường như hiện nay, chất lượng cũng như mức giá không
                              còn là điều duy nhất giúp giữ chân khách hàng. Dịch vụ
                              khách hàng tốt giờ đây sẽ giữ vai trò then chốt đối với
                              hoạt động kinh doanh. Do đó, việc tạo ra những trải
                              nghiệm tuyệt vời cho khách hàng là điều doanh nghiệp cần
                              thiết làm, trong đó một phương thức thức hiệu quả mà
                              nhiều doanh nghiệp đã và đang áp dụng đó là là cá nhân
                              hóa tương tác giữa khách hàng với doanh nghiệp.
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
                              title="5 Tips hiệu quả giúp cải thiện năng suất Call Center"
                              href="tin-tuc/tin-tuc-nganh/tips-hieu-qua-giup-cai-thien-nang-suat-call-center.html"
                            >
                              <img
                                src="img/posts/000-9692.jpg"
                                alt="5 Tips hiệu quả giúp cải thiện năng suất Call Center"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="5 Tips hiệu quả giúp cải thiện năng suất Call Center"
                                href="tin-tuc/tin-tuc-nganh/tips-hieu-qua-giup-cai-thien-nang-suat-call-center.html"
                              >
                                5 Tips hiệu quả giúp cải thiện năng suất Call Center
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Call Center – Trung tâm cuộc gọi đóng vai trò quan trọng
                              trong một doanh nghiệp vì đó là cầu nối giữa doanh
                              nghiệp với khách hàng. Các điện thoại viên (ĐTV) chính
                              là người nói cho bạn biết các vấn đề khách hàng đang gặp
                              phải, mối quan tâm của khách hàng là gì, hiệu quả thu
                              hút khách từ các chiến dịch marketing, từ đó tạo cơ hội
                              để doanh nghiệp quảng bá, giới thiệu sản phẩm, nâng cao
                              hình ảnh thương hiệu cũng như đem lại các dịch vụ hỗ
                              trợ, chăm sóc khách hàng tốt nhất.
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
                                    title="[HCM] RECAP HỘI THẢO HÀNH TRÌNH CHINH PHỤC TƯƠNG LAI"
                                    href="tin-tuc/tin-tuc-nganh/hcm-recap-hoi-thao-hanh-trinh-chinh-phuc-tuong-lai.html"
                                  >
                                    <img
                                      src="img/posts/01-1-9866.jpg"
                                      alt="[HCM] RECAP HỘI THẢO HÀNH TRÌNH CHINH PHỤC TƯƠNG LAI"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a
                                      className="text-split text-split-2"
                                      title="[HCM] RECAP HỘI THẢO HÀNH TRÌNH CHINH PHỤC TƯƠNG LAI"
                                      href="tin-tuc/tin-tuc-nganh/hcm-recap-hoi-thao-hanh-trinh-chinh-phuc-tuong-lai.html"
                                    >
                                      [HCM] RECAP HỘI THẢO HÀNH TRÌNH CHINH PHỤC TƯƠNG
                                      LAI
                                    </a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    Mỗi nhà tuyển dụng chỉ mất 2-5s để lướt qua 1 CV,
                                    vậy làm sao để họ có thể ” ở lại” lâu hơn?
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
                                    title="Mắt Bão hỗ trợ sinh viên khởi nghiệp với cuộc thi Startup Zone"
                                    href="tin-tuc/tin-tuc-nganh/mat-bao-ho-tro-sinh-vien-khoi-nghiep-voi-cuoc-thi-startup-zone.html"
                                  >
                                    <img
                                      src="img/posts/03-6369.jpg"
                                      alt="Mắt Bão hỗ trợ sinh viên khởi nghiệp với cuộc thi Startup Zone"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a
                                      className="text-split text-split-2"
                                      title="Mắt Bão hỗ trợ sinh viên khởi nghiệp với cuộc thi Startup Zone"
                                      href="tin-tuc/tin-tuc-nganh/mat-bao-ho-tro-sinh-vien-khoi-nghiep-voi-cuoc-thi-startup-zone.html"
                                    >
                                      Mắt Bão hỗ trợ sinh viên khởi nghiệp với cuộc
                                      thi Startup Zone
                                    </a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    Startup Zone là cuộc thi học thuật thường niên do
                                    CLB Nhân sự – Khởi nghiệp, trực thuộc khoa Quản
                                    trị trường Đại học Kinh tế TP.HCM kết hợp với các
                                    doanh nghiệp tổ chức – Trong đó Mắt Bão đã là cái
                                    tên quen thuộc hàng năm với BGH và Sinh viên nhà
                                    trường với tư cách là Nhà tài trợ và là Chủ khảo
                                    của cuộc thi.
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
                              title="Công ty Cổ phần BPO Mắt Bão khai trương VPĐD thứ ba tại Tp. Hồ Chí Minh"
                              href="tin-tuc/tin-tuc-nganh/cong-ty-co-phan-bpo-mat-bao-khai-truong-vpdd-thu-ba-tai-tp-ho-chi-minh.html"
                            >
                              <img
                                src="img/posts/02-2174.jpg"
                                alt="Công ty Cổ phần BPO Mắt Bão khai trương VPĐD thứ ba tại Tp. Hồ Chí Minh"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Công ty Cổ phần BPO Mắt Bão khai trương VPĐD thứ ba tại Tp. Hồ Chí Minh"
                                href="tin-tuc/tin-tuc-nganh/cong-ty-co-phan-bpo-mat-bao-khai-truong-vpdd-thu-ba-tai-tp-ho-chi-minh.html"
                              >
                                Công ty Cổ phần BPO Mắt Bão khai trương VPĐD thứ ba
                                tại Tp. Hồ Chí Minh
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Ngày 11/10/2017, Công ty cổ phần BPO Mắt Bão đã chính
                              thức khai trương văn phòng Đại diện tại số 04 – đường
                              Nguyễn Thái Bình, Phường 4, Quận Tân Bình, TP. HCM. Đây
                              là Văn phòng thứ 3 của Công ty tại Tp. HCM và là Văn
                              phòng thứ 4 của Công ty hoạt động tại Việt Nam.&nbsp;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Công ty Cổ phần BPO Mắt Bão đồng hành cùng trường Đại Học Kinh tế Tài chính HCM (UEF)"
                              href="tin-tuc/tin-tuc-nganh/cong-ty-co-phan-bpo-mat-bao-dong-hanh-cung-truong-dai-hoc-kinh-te-tai-chinh-hcm-uef.html"
                            >
                              <img
                                src="img/posts/01-6561.jpg"
                                alt="Công ty Cổ phần BPO Mắt Bão đồng hành cùng trường Đại Học Kinh tế Tài chính HCM (UEF)"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Công ty Cổ phần BPO Mắt Bão đồng hành cùng trường Đại Học Kinh tế Tài chính HCM (UEF)"
                                href="tin-tuc/tin-tuc-nganh/cong-ty-co-phan-bpo-mat-bao-dong-hanh-cung-truong-dai-hoc-kinh-te-tai-chinh-hcm-uef.html"
                              >
                                Công ty Cổ phần BPO Mắt Bão đồng hành cùng trường Đại
                                Học Kinh tế Tài chính HCM (UEF)
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Nằm trong chuỗi những sự kiện kết nối giữa nhà trường và
                              Doanh nghiệp, Công ty Cổ phần BPO Mắt Bão trong nhiều
                              năm qua đã xem đây là hoạt động quan trọng không thể
                              thiếu trong chiến lược hành động của mình nhằm hướng đến
                              giá trị đóng góp thiết thực giữa Doanh nghiệp – Nhà
                              trường và Sinh viên. Trong đó lấy Sinh viên làm đối
                              tượng trọng tâm trong công tác đầu tư và phát triển nhân
                              tài.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Mắt Bão BPO đồng hành cùng Ngày hội việc làm trường CĐ Bách Việt"
                              href="tin-tuc/tin-tuc-nganh/mat-bao-bpo-dong-hanh-cung-ngay-hoi-viec-lam-truong-cd-bach-viet.html"
                            >
                              <img
                                src="img/posts/11-3395.jpg"
                                alt="Mắt Bão BPO đồng hành cùng Ngày hội việc làm trường CĐ Bách Việt"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Mắt Bão BPO đồng hành cùng Ngày hội việc làm trường CĐ Bách Việt"
                                href="tin-tuc/tin-tuc-nganh/mat-bao-bpo-dong-hanh-cung-ngay-hoi-viec-lam-truong-cd-bach-viet.html"
                              >
                                Mắt Bão BPO đồng hành cùng Ngày hội việc làm trường CĐ
                                Bách Việt
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Chiều 03/8/2016, tại Trường Cao đẳng Bách Việt đã diễn
                              ra ngày hội việc làm với sự tham gia của 30 doanh
                              nghiệp. Đây cũng là lần đầu tiên nhà trường tổ chức Ngày
                              hội việc làm cho sinh viên với quy mô lớn, các doanh
                              nghiệp tuyển dụng ở nhiều lĩnh vực khác nhau.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Công ty CP BPO Mắt Bão được Bộ Tài Chính tuyên dương thực hiện tốt nghĩa vụ Ngân sách năm 2016"
                              href="tin-tuc/tin-tuc-noi-bo/cong-ty-cp-bpo-mat-bao-duoc-bo-tai-chinh-tuyen-duong-thuc-hien-tot-nghia-vu-ngan-sach-nam-2016.html"
                            >
                              <img
                                src="img/posts/20641888298084880665312604183343o-5608.jpg"
                                alt="Công ty CP BPO Mắt Bão được Bộ Tài Chính tuyên dương thực hiện tốt nghĩa vụ Ngân sách năm 2016"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Công ty CP BPO Mắt Bão được Bộ Tài Chính tuyên dương thực hiện tốt nghĩa vụ Ngân sách năm 2016"
                                href="tin-tuc/tin-tuc-noi-bo/cong-ty-cp-bpo-mat-bao-duoc-bo-tai-chinh-tuyen-duong-thuc-hien-tot-nghia-vu-ngan-sach-nam-2016.html"
                              >
                                Công ty CP BPO Mắt Bão được Bộ Tài Chính tuyên dương
                                thực hiện tốt nghĩa vụ Ngân sách năm 2016
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Sáng 3-8, Cục Thuế TPHCM đã tổ chức lễ tuyên dương các
                              tổ chức, cá nhân thực hiện tốt nghĩa vụ Ngân sách năm
                              2016. Đến dự có Chủ tịch UBND TPHCM Nguyễn Thành Phong,
                              Phó Chủ tịch UBND TPHCM Trần Vĩnh Tuyến, Tổng Cục trưởng
                              Tổng Cục thuế Bùi Văn Nam.
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
                                  href="tin-tucce37.html?page=12"
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
                              <li className="paginate_button page-item  ">
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
                              <li className="paginate_button page-item active ">
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
                                  href="tin-tuca7f1.html?page=14"
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
      );
      
}

export default App;