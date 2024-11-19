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
                              title="Chương trình thiện nguyện MẮT BÃO BPO - “Ấm Áp Tình Thương - Chia Sẻ Đến Người Khiếm Thị”"
                              href="tin-tuc/su-kien-trach-nhiem-xa-hoi/chuong-trinh-thien-nguyen-mat-bao-bpo-am-ap-tinh-thuong-chia-se-den-nguoi-khiem-thi.html"
                            >
                              <img
                                src="img/posts/z5219153825397f5c2385e9fd1c03b54eff7fd4947bbf0-9926.jpg"
                                alt="Chương trình thiện nguyện MẮT BÃO BPO - “Ấm Áp Tình Thương - Chia Sẻ Đến Người Khiếm Thị”"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Chương trình thiện nguyện MẮT BÃO BPO - “Ấm Áp Tình Thương - Chia Sẻ Đến Người Khiếm Thị”"
                                href="tin-tuc/su-kien-trach-nhiem-xa-hoi/chuong-trinh-thien-nguyen-mat-bao-bpo-am-ap-tinh-thuong-chia-se-den-nguoi-khiem-thi.html"
                              >
                                Chương trình thiện nguyện MẮT BÃO BPO - “Ấm Áp Tình
                                Thương - Chia Sẻ Đến Người Khiếm Thị”
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Hôm nay, ngày 05/03/2024 Anh Park Moon Hwa CEO Công ty
                              Cổ phần BPO Mắt Bão, chị Trương Thị Hồng Phi ( CFO &amp;
                              GA) cùng đoàn thiện nguyện công ty đến thăm và trao gửi
                              100 phần quà cho người khiếm thị tại chùa Nguyên Thỉ-
                              Long An. Đồng hành cùng đoàn là sự góp mặt của đại diện
                              của Ủy Ban Trung Ương Mặt Trận Tổ Quốc TP. Tân An, Long
                              An.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title=" [CHƯƠNG TRÌNH THIỆN NGUYỆN MẮT BÃO BPO] - “ẤM ÁP TÌNH THƯƠNG - CHIA SẺ ĐẾN NGƯỜI KHIẾM THỊ”"
                              href="tin-tuc/su-kien-trach-nhiem-xa-hoi/chuong-trinh-thien-nguyen-mat-bao-bpo-am-ap-tinh-thuong-chia-se-den-nguoi-khiem-thi.html"
                            >
                              <img
                                src="img/posts//"
                                alt=" [CHƯƠNG TRÌNH THIỆN NGUYỆN MẮT BÃO BPO] - “ẤM ÁP TÌNH THƯƠNG - CHIA SẺ ĐẾN NGƯỜI KHIẾM THỊ”"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title=" [CHƯƠNG TRÌNH THIỆN NGUYỆN MẮT BÃO BPO] - “ẤM ÁP TÌNH THƯƠNG - CHIA SẺ ĐẾN NGƯỜI KHIẾM THỊ”"
                                href="tin-tuc/su-kien-trach-nhiem-xa-hoi/chuong-trinh-thien-nguyen-mat-bao-bpo-am-ap-tinh-thuong-chia-se-den-nguoi-khiem-thi.html"
                              >
                                &nbsp;[CHƯƠNG TRÌNH THIỆN NGUYỆN MẮT BÃO BPO] - “ẤM ÁP
                                TÌNH THƯƠNG - CHIA SẺ ĐẾN NGƯỜI KHIẾM THỊ”
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              &nbsp;Ngày 05/03/2024 Anh Park Moon Hwa CEO Công ty Cổ
                              phần BPO Mắt Bão, chị Trương Thị Hồng Phi ( CFO &amp;
                              GA) cùng đoàn thiện nguyện công ty đến thăm và trao gửi
                              100 phần quà cho người khiếm thị tại chùa Nguyên Thỉ-
                              Long An. Đồng hành cùng đoàn là sự góp mặt của đại diện
                              của Ủy Ban Trung Ương Mặt Trận Tổ Quốc TP. Tân An, Long
                              An.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title='Bí kíp "vàng" xây dựng văn hóa công ty '
                              href="tin-tuc/kien-thuc-goc-nhin/bi-kip-vang-xay-dung-van-hoa-cong-ty.html"
                            >
                              <img
                                src="img/posts/ictkvan-hoa-doanh-nghiep-5698.png"
                                alt='Bí kíp "vàng" xây dựng văn hóa công ty '
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title='Bí kíp "vàng" xây dựng văn hóa công ty '
                                href="tin-tuc/kien-thuc-goc-nhin/bi-kip-vang-xay-dung-van-hoa-cong-ty.html"
                              >
                                Bí kíp "vàng" xây dựng văn hóa công ty&nbsp;
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Văn hóa công ty là linh hồn, là DNA tạo nên bản sắc
                              riêng biệt của mỗi doanh nghiệp. Nó đóng vai trò then
                              chốt trong việc thu hút và giữ chân nhân tài, đồng thời
                              "đánh thức" tiềm năng và "thổi bùng" tinh thần làm việc
                              của họ.
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
                              title="⏳[Ma trận quản lý thời gian] -Bí kíp quản lý thời gian hiệu quả"
                              href="tin-tuc/kien-thuc-goc-nhin/ma-tran-quan-ly-thoi-gian-bi-kip-quan-ly-thoi-gian-hieu-qua.html"
                            >
                              <img
                                src="img/posts/icma-tran-eisenhower2-2067.png"
                                alt="⏳[Ma trận quản lý thời gian] -Bí kíp quản lý thời gian hiệu quả"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="⏳[Ma trận quản lý thời gian] -Bí kíp quản lý thời gian hiệu quả"
                                href="tin-tuc/kien-thuc-goc-nhin/ma-tran-quan-ly-thoi-gian-bi-kip-quan-ly-thoi-gian-hieu-qua.html"
                              >
                                ⏳[Ma trận quản lý thời gian] -Bí kíp quản lý thời
                                gian hiệu quả
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Bạn có bao giờ cảm thấy choáng ngợp bởi vô số công việc
                              cần hoàn thành? Bạn có lo lắng rằng mình không có đủ
                              thời gian để đạt được mục tiêu? Nếu vậy, ma trận quản lý
                              thời gian Eisenhower chính là bí kíp dành cho bạn!
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
                                    title="#180124 [TTNCN] Hướng dẫn thi hành luật thuế thu nhập cá nhân "
                                    href="tin-tuc/chinh-phu/180124-huong-dan-thi-hanh-luat-thue-thu-nhap-ca-nhan.html"
                                  >
                                    <img
                                      src="img/posts/icthue180124-8275.jpg"
                                      alt="#180124 [TTNCN] Hướng dẫn thi hành luật thuế thu nhập cá nhân "
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a
                                      className="text-split text-split-2"
                                      title="#180124 [TTNCN] Hướng dẫn thi hành luật thuế thu nhập cá nhân "
                                      href="tin-tuc/chinh-phu/180124-huong-dan-thi-hanh-luat-thue-thu-nhap-ca-nhan.html"
                                    >
                                      #180124 [TTNCN] Hướng dẫn thi hành luật thuế thu
                                      nhập cá nhân{" "}
                                    </a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    <p>
                                      Công văn số 5250/TCT-DNNCN ngày 24/11/2023 về
                                      việc quy đổi thu nhập để tính thuế TNCN Tại
                                      Khoản 1 Điều 14 Thông tư số 92/2015/TT-BTC ngày
                                      15/6/2015 của Bộ Tài chính sửa đổi, bổ sung Điều
                                      7 Thông tư số 111/2013/TT-BTC quy định:
                                    </p>
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
                                    title="#100124 [TTNCN] Thuế thu nhập cá nhân đối với các khoản chi trả cho người lao động sau khi nghỉ việc"
                                    href="tin-tuc/chinh-phu/100124-ttncn-thue-thu-nhap-ca-nhan-doi-voi-cac-khoan-chi-tra-cho-nguoi-lao-dong-sau-khi-nghiviec.html"
                                  >
                                    <img
                                      src="img/posts/ichapic2090124-3973.jpg"
                                      alt="#100124 [TTNCN] Thuế thu nhập cá nhân đối với các khoản chi trả cho người lao động sau khi nghỉ việc"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a
                                      className="text-split text-split-2"
                                      title="#100124 [TTNCN] Thuế thu nhập cá nhân đối với các khoản chi trả cho người lao động sau khi nghỉ việc"
                                      href="tin-tuc/chinh-phu/100124-ttncn-thue-thu-nhap-ca-nhan-doi-voi-cac-khoan-chi-tra-cho-nguoi-lao-dong-sau-khi-nghiviec.html"
                                    >
                                      #100124 [TTNCN] Thuế thu nhập cá nhân đối với
                                      các khoản chi trả cho người lao động sau khi
                                      nghỉ&nbsp;việc
                                    </a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    <p>
                                      Thuế thu nhập cá nhân đối với các khoản chi trả
                                      cho người lao động sau khi nghỉ&nbsp;việc
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
                              title="#211223 Vướng mắc xử phạt vi phạm hành chính Công văn 5852/TCT-PC chính đối với cá nhân không kê khai quyết toán thuế thu nhập cá nhân."
                              href="tin-tuc/chinh-phu/xu-phat-vi-pham-hanh-chinhcong-van-5852tct-pc-chinh-doi-voi-ca-nhan-khong-ke-khai-quyet-toan-thue-thu-nhap-ca-nhan.html"
                            >
                              <img
                                src="img/posts/ichacong-van-5852tct-pc-1983.jpg"
                                alt="#211223 Vướng mắc xử phạt vi phạm hành chính Công văn 5852/TCT-PC chính đối với cá nhân không kê khai quyết toán thuế thu nhập cá nhân."
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="#211223 Vướng mắc xử phạt vi phạm hành chính Công văn 5852/TCT-PC chính đối với cá nhân không kê khai quyết toán thuế thu nhập cá nhân."
                                href="tin-tuc/chinh-phu/xu-phat-vi-pham-hanh-chinhcong-van-5852tct-pc-chinh-doi-voi-ca-nhan-khong-ke-khai-quyet-toan-thue-thu-nhap-ca-nhan.html"
                              >
                                #211223 Vướng mắc xử phạt vi phạm hành chính&nbsp;Công
                                văn 5852/TCT-PC chính đối với cá nhân không kê khai
                                quyết toán thuế thu nhập cá nhân.
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p>
                                Vướng mắc về xử phạt vi phạm hành chính&nbsp;Công văn
                                5852/TCT-PC chính đối với cá nhân không kê khai quyết
                                toán thuế thu nhập cá nhân.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="#281223 Nghị định 94/2023/NĐ-CP Quy định về chính sách giảm thuế giá trị gia tăng theo Nghị quyết 110/2023/QH15"
                              href="tin-tuc/chinh-phu/nghi-dinh-942023nd-cp-quy-dinh-ve-chinh-sach-giam-thue-gia-tri-gia-tang-theo-nghi-quyet-1102023qh15.html"
                            >
                              <img
                                src="img/posts/ichanghi-dinh-94-8640.jpg"
                                alt="#281223 Nghị định 94/2023/NĐ-CP Quy định về chính sách giảm thuế giá trị gia tăng theo Nghị quyết 110/2023/QH15"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="#281223 Nghị định 94/2023/NĐ-CP Quy định về chính sách giảm thuế giá trị gia tăng theo Nghị quyết 110/2023/QH15"
                                href="tin-tuc/chinh-phu/nghi-dinh-942023nd-cp-quy-dinh-ve-chinh-sach-giam-thue-gia-tri-gia-tang-theo-nghi-quyet-1102023qh15.html"
                              >
                                #281223 Nghị định 94/2023/NĐ-CP Quy định về chính sách
                                giảm thuế giá trị gia tăng theo Nghị quyết
                                110/2023/QH15
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p>
                                Nghị định 94/2023/NĐ-CP Quy định về chinh sách giảm
                                thuế giá trị gia tăng theo Nghị quyết 110/2023/QH15
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="#090124 CV Tiếng Việt hay Tiếng Anh?"
                              href="tin-tuc/kien-thuc-goc-nhin/cv-tieng-viet-hay-tieng-anh.html"
                            >
                              <img
                                src="img/posts/ichacv-en-hay-cv-vn090124-5573.jpg"
                                alt="#090124 CV Tiếng Việt hay Tiếng Anh?"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="#090124 CV Tiếng Việt hay Tiếng Anh?"
                                href="tin-tuc/kien-thuc-goc-nhin/cv-tieng-viet-hay-tieng-anh.html"
                              >
                                #090124 CV Tiếng Việt hay Tiếng Anh?
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Chọn CV (Curriculum Vitae) tiếng Anh hay tiếng Việt đều
                              phụ thuộc vào các yếu tố về ngành nghề, môi trường mà
                              bản thân bạn quan tâm, các định hướng mục tiêu phát
                              triển của bản thân trong tương lai mà bạn muốn hướng
                              tới.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Chia sẻ của CEO và Lãnh Đạo Mắt Bão BPO trong buổi họp mặt đầu năm 2024"
                              href="tin-tuc/tin-tuc-noi-bo/chia-se-cua-ceo-va-lanh-dao-cua-mat-bao-bpo-trong-buoi-hop-mat-dau-nam-2024.html"
                            >
                              <img
                                src="img/posts/microsoftteams-image-0-3169.jpg"
                                alt="Chia sẻ của CEO và Lãnh Đạo Mắt Bão BPO trong buổi họp mặt đầu năm 2024"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Chia sẻ của CEO và Lãnh Đạo Mắt Bão BPO trong buổi họp mặt đầu năm 2024"
                                href="tin-tuc/tin-tuc-noi-bo/chia-se-cua-ceo-va-lanh-dao-cua-mat-bao-bpo-trong-buoi-hop-mat-dau-nam-2024.html"
                              >
                                Chia sẻ của CEO và Lãnh Đạo Mắt Bão BPO trong buổi họp
                                mặt đầu năm 2024
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Trong buổi họp mặt đầu năm 2024 (1/1/2024), CEO của Mắt
                              Bão BPO- Ông Park-Moon-Hwa đã chia sẻ về chặng đường đầy
                              ấn tượng của Mắt Bão BPO trong suốt 5 năm qua, từ 2019
                              đến cuối 2023. Mắt Bão BPO đã chứng kiến sự phát triển
                              nhanh chóng, từ hơn 1.200 nhân sự lên gần con số 6.000,
                              một cột mốc quan trọng đánh dấu sự thành công và cam kết
                              vững chắc của Mắt Bão BPO.
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
                                  href="tin-tuc235c.html?page=7"
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
                              <li className="paginate_button page-item active ">
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
                                  href="tin-tuc0b08.html?page=9"
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
        </>
  );
}

export default App;
