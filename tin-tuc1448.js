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
                              title="Cách Xây Dựng Quy Trình Chăm Sóc Khách Hàng Chuyên Nghiệp, Hiệu Quả"
                              href="tin-tuc/cham-soc-khach-hang-(cskh)/cach-xay-dung-quy-trinh-cham-soc-khach-hang-chuyen-nghiep-hieu-qua.html"
                            >
                              <img
                                src="img/posts/ck-mktcach-xay-dung-quy-trinh-cham-soc-khach-hang-chuyen-nghiep-hieu-qua-3400.jpg"
                                alt="Cách Xây Dựng Quy Trình Chăm Sóc Khách Hàng Chuyên Nghiệp, Hiệu Quả"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Cách Xây Dựng Quy Trình Chăm Sóc Khách Hàng Chuyên Nghiệp, Hiệu Quả"
                                href="tin-tuc/cham-soc-khach-hang-(cskh)/cach-xay-dung-quy-trinh-cham-soc-khach-hang-chuyen-nghiep-hieu-qua.html"
                              >
                                Cách Xây Dựng Quy Trình Chăm Sóc Khách Hàng Chuyên
                                Nghiệp, Hiệu Quả
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              <p>
                                Xây dựng một quy trình chăm sóc khách hàng chuyên
                                nghiệp để tạo mối quan hệ vững chắc với khách hàng và
                                là nền tảng phát triển cho doanh nghiệp. Từ đó có thể
                                giúp các doanh nghiệp tạo dựng được thương hiệu mà
                                khách hàng luôn yêu mến. Cùng Mắt Bão BPO tìm hiểu về
                                cách xây dựng quy trình chăm sóc khách hàng chuyên
                                nghiệp, hiệu quả nhé.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Liệu Trí Tuệ Nhân Tạo AI Có Thay Thế Được AGENT Trong Contact Center Không?"
                              href="tin-tuc/tin-tuc-nganh/lieu-tri-tue-nhan-tao-ai-co-thay-the-duoc-agent-trong-contact-center-khong.html"
                            >
                              <img
                                src="img/posts/lieu-tri-tue-nhan-tao-ai-co-thay-the-duoc-agent-trong-contact-center-duoc-hay-khong-6821.jpg"
                                alt="Liệu Trí Tuệ Nhân Tạo AI Có Thay Thế Được AGENT Trong Contact Center Không?"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Liệu Trí Tuệ Nhân Tạo AI Có Thay Thế Được AGENT Trong Contact Center Không?"
                                href="tin-tuc/tin-tuc-nganh/lieu-tri-tue-nhan-tao-ai-co-thay-the-duoc-agent-trong-contact-center-khong.html"
                              >
                                Liệu Trí Tuệ Nhân Tạo AI Có Thay Thế Được AGENT Trong
                                Contact Center Không?
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Sự tiến bộ vượt bậc của các công cụ AI khiến nhiều người
                              đặt ra câu hỏi liệu trí tuệ nhân tạo AI sẽ thay thế
                              agent trong Contact Center được hay không?
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Lợi Ích Từ Chương Trình MBB Young Talents Program 2023"
                              href="tin-tuc/tin-tuc-noi-bo/loi-ich-tu-chuong-trinh-mbb-young-talents-program-2023.html"
                            >
                              <img
                                src="img/posts/loi-ich-tu-chuong-trinh-mbb-young-talents-program-2023-1536x866-3815.png"
                                alt="Lợi Ích Từ Chương Trình MBB Young Talents Program 2023"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Lợi Ích Từ Chương Trình MBB Young Talents Program 2023"
                                href="tin-tuc/tin-tuc-noi-bo/loi-ich-tu-chuong-trinh-mbb-young-talents-program-2023.html"
                              >
                                Lợi Ích Từ Chương Trình MBB Young Talents Program 2023
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Xét về ưu điểm thì chương trình Young Talents đem đến
                              cho sinh viên mới ra trường rất nhiều những lợi ích to
                              lớn. Vậy MBB Young Talents Program 2023 có gì mà hấp dẫn
                              các bạn fresher tham gia như vậy? Cùng điểm qua một số
                              lợi ích nhé.
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
                              title="Mắt Bão BPO Chúc Mừng Ngày Quốc Tế Phụ Nữ 8-3"
                              href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-chuc-mung-ngay-quoc-te-phu-nu-8-3.html"
                            >
                              <img
                                src="img/posts/003-6365.jpg"
                                alt="Mắt Bão BPO Chúc Mừng Ngày Quốc Tế Phụ Nữ 8-3"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Mắt Bão BPO Chúc Mừng Ngày Quốc Tế Phụ Nữ 8-3"
                                href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-chuc-mung-ngay-quoc-te-phu-nu-8-3.html"
                              >
                                Mắt Bão BPO Chúc Mừng Ngày Quốc Tế Phụ Nữ 8-3
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Mỗi độ tháng 3 về, trong không khí ấm áp của mùa xuân,
                              Mắt Bão BPO lại háo hức đón chào kỉ niệm ngày Quốc tế
                              phụ nữ. Đây là dịp để tôn vinh vẻ đẹp, khẳng định vai
                              trò của những người phụ nữ trong xã hội và trong cuộc
                              sống.
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
                                    title="Nhân Viên CS Là Gì? 3 Kỹ Năng Cần Thiết Của Nhân Viên CS"
                                    href="tin-tuc/tin-tuc-nganh/nhan-vien-cs-la-gi-3-ky-nang-can-thiet-cua-nhan-vien-cs.html"
                                  >
                                    <img
                                      src="img/posts/000000-9681.jpg"
                                      alt="Nhân Viên CS Là Gì? 3 Kỹ Năng Cần Thiết Của Nhân Viên CS"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a
                                      className="text-split text-split-2"
                                      title="Nhân Viên CS Là Gì? 3 Kỹ Năng Cần Thiết Của Nhân Viên CS"
                                      href="tin-tuc/tin-tuc-nganh/nhan-vien-cs-la-gi-3-ky-nang-can-thiet-cua-nhan-vien-cs.html"
                                    >
                                      Nhân Viên CS Là Gì? 3 Kỹ Năng Cần Thiết Của Nhân
                                      Viên CS
                                    </a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    Giữa thị trường càng cạnh ngày tranh khốc liệt,
                                    yêu cầu chất lượng sản phẩm và dịch vụ cũng tăng
                                    cao. Từ đó quá trình chăm sóc khách hàng –
                                    Customer Service hay CS đang được nhiều doanh
                                    nghiệp chú trọng. Thế nhưng, không phải bất cứ ai
                                    cũng biết rõ về khái niệm về CS là gì cùng công
                                    việc của nhân viên CS. Theo dõi ngay bài viết sau
                                    để khám phá lời giải đáp chi tiết!
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
                                    title="CHƯƠNG TRÌNH LẤY Ý TƯỞNG TỐI ƯU NĂNG SUẤT & HÀNH VI​"
                                    href="tin-tuc/tin-tuc-noi-bo/chuong-trinh-lay-y-tuong-toi-uu-nang-suat-hanh-vi.html"
                                  >
                                    <img
                                      src="img/posts/012-5801.jpg"
                                      alt="CHƯƠNG TRÌNH LẤY Ý TƯỞNG TỐI ƯU NĂNG SUẤT & HÀNH VI​"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a
                                      className="text-split text-split-2"
                                      title="CHƯƠNG TRÌNH LẤY Ý TƯỞNG TỐI ƯU NĂNG SUẤT & HÀNH VI​"
                                      href="tin-tuc/tin-tuc-noi-bo/chuong-trinh-lay-y-tuong-toi-uu-nang-suat-hanh-vi.html"
                                    >
                                      CHƯƠNG TRÌNH LẤY Ý TƯỞNG TỐI ƯU NĂNG SUẤT &amp;
                                      HÀNH VI​
                                    </a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    Ngày 03/03/2023 vừa qua, Mắt Bão BPO đã triển khai
                                    chương trình “Lấy ý tưởng tối ưu năng suất &amp;
                                    hành vi” cho toàn bộ nhân viên Mắt Bão BPO
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
                              title="Mắt Bão BPO ký kết hợp tác “Đào tạo nguồn nhân lực gắn liền với nhu cầu doanh nghiệp” với HUTECH"
                              href="tin-tuc/tin-tuc-nganh/mat-bao-bpo-ky-ket-hop-tac-dao-tao-nguon-nhan-luc-gan-lien-voi-nhu-cau-doanh-nghiep-voi-hutech.html"
                            >
                              <img
                                src="img/posts/0a-4115.jpg"
                                alt="Mắt Bão BPO ký kết hợp tác “Đào tạo nguồn nhân lực gắn liền với nhu cầu doanh nghiệp” với HUTECH"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Mắt Bão BPO ký kết hợp tác “Đào tạo nguồn nhân lực gắn liền với nhu cầu doanh nghiệp” với HUTECH"
                                href="tin-tuc/tin-tuc-nganh/mat-bao-bpo-ky-ket-hop-tac-dao-tao-nguon-nhan-luc-gan-lien-voi-nhu-cau-doanh-nghiep-voi-hutech.html"
                              >
                                Mắt Bão BPO ký kết hợp tác “Đào tạo nguồn nhân lực gắn
                                liền với nhu cầu doanh nghiệp” với HUTECH
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Ngày 25/02/2023 vừa qua, Mắt Bão BPO đã ký kết hợp tác
                              “Đào tạo nguồn nhân lực gắn liền với nhu cầu doanh
                              nghiệp” với trường đại học công nghệ TP HCM (HUTECH).
                              Tiếp tục xây dựng mối quan hệ đối tác chặt chẽ hướng tới
                              mục tiêu đào tạo và tuyển dụng bền vững
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Mắt Bão BPO ký kết hợp tác “Đào tạo nguồn nhân lực gắn liền với nhu cầu doanh nghiệp” với HUTECH"
                              href="tin-tuc/tin-tuc-nganh/mat-bao-bpo-ky-ket-hop-tac-dao-tao-nguon-nhan-luc-gan-lien-voi-nhu-cau-doanh-nghiep-voi-hutech.html"
                            >
                              <img
                                src="img/posts/12121-4045.jpg"
                                alt="Mắt Bão BPO ký kết hợp tác “Đào tạo nguồn nhân lực gắn liền với nhu cầu doanh nghiệp” với HUTECH"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Mắt Bão BPO ký kết hợp tác “Đào tạo nguồn nhân lực gắn liền với nhu cầu doanh nghiệp” với HUTECH"
                                href="tin-tuc/tin-tuc-nganh/mat-bao-bpo-ky-ket-hop-tac-dao-tao-nguon-nhan-luc-gan-lien-voi-nhu-cau-doanh-nghiep-voi-hutech.html"
                              >
                                Mắt Bão BPO ký kết hợp tác “Đào tạo nguồn nhân lực gắn
                                liền với nhu cầu doanh nghiệp” với HUTECH
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Ngày 25/02/2023 vừa qua, Mắt Bão BPO đã ký kết hợp tác
                              “Đào tạo nguồn nhân lực gắn liền với nhu cầu doanh
                              nghiệp” với trường đại học công nghệ TP HCM (HUTECH).
                              Tiếp tục xây dựng mối quan hệ đối tác chặt chẽ hướng tới
                              mục tiêu đào tạo và tuyển dụng bền vững
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title='Team Tuyển Dụng Mắt Bão BPO "Đổ Bộ" HUTECH Career Day 2023'
                              href="tin-tuc/su-kien-trach-nhiem-xa-hoi/team-tuyen-dung-mat-bao-bpo-do-bo-hutech-career-day-2023.html"
                            >
                              <img
                                src="img/posts/0000000000-2798.jpg"
                                alt='Team Tuyển Dụng Mắt Bão BPO "Đổ Bộ" HUTECH Career Day 2023'
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title='Team Tuyển Dụng Mắt Bão BPO "Đổ Bộ" HUTECH Career Day 2023'
                                href="tin-tuc/su-kien-trach-nhiem-xa-hoi/team-tuyen-dung-mat-bao-bpo-do-bo-hutech-career-day-2023.html"
                              >
                                Team Tuyển Dụng Mắt Bão BPO "Đổ Bộ" HUTECH Career Day
                                2023
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Sáng thứ 7, ngày 25/02/2023 Team Tuyển dụng của Mắt Bão
                              BPO đã "Đổ Bộ" HUTECH Career Day 2023 - Ngày hội việc
                              làm khối ngành kinh tế tại cơ sở Thủ Đức và thành công
                              thu về rất nhiều ứng viên tiềm năng cho công ty.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="MẮT BÃO BPO - ĐỒNG HÀNH CÙNG HUTECH CAREER DAY 2023"
                              href="tin-tuc/tin-tuc-nganh/mat-bao-bpo-dong-hanh-cung-hutech-career-day-2023.html"
                            >
                              <img
                                src="img/posts/000001-9629.jpg"
                                alt="MẮT BÃO BPO - ĐỒNG HÀNH CÙNG HUTECH CAREER DAY 2023"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="MẮT BÃO BPO - ĐỒNG HÀNH CÙNG HUTECH CAREER DAY 2023"
                                href="tin-tuc/tin-tuc-nganh/mat-bao-bpo-dong-hanh-cung-hutech-career-day-2023.html"
                              >
                                MẮT BÃO BPO - ĐỒNG HÀNH CÙNG HUTECH CAREER DAY 2023
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Công ty cổ phần BPO Mắt Bão đồng hành của HUTECH CAREER
                              DAY 2023 - Ngày Hội Việc Làm Khối Ngành Kinh Tế
                              25.02.2023.
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
                                  href="tin-tuc0b08.html?page=9"
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
                              <li className="paginate_button page-item active ">
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
                                  href="tin-tuc1c8b.html?page=11"
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
  