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
                              title="[MBB] - KHÓA ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG 2024 (NGÀY 2)"
                              href="tin-tuc/tin-tuc-noi-bo/mbb-khoa-dao-tao-hoi-nhap-nang-cao-ky-nang-2024-ngay-2.html"
                            >
                              <img
                                src="img/posts/7-8897.png"
                                alt="[MBB] - KHÓA ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG 2024 (NGÀY 2)"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="[MBB] - KHÓA ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG 2024 (NGÀY 2)"
                                href="tin-tuc/tin-tuc-noi-bo/mbb-khoa-dao-tao-hoi-nhap-nang-cao-ky-nang-2024-ngay-2.html"
                              >
                                [MBB] - KHÓA ĐÀO TẠO HỘI NHẬP &amp; NÂNG CAO KỸ NĂNG
                                2024 (NGÀY 2)
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Sau khi kết thúc khóa “ĐÀO TẠO HỘI NHẬP &amp; NÂNG CAO
                              KỸ NĂNG”, trải nghiệm và tham gia các hoạt động vô cùng
                              hấp dẫn tại chương trình. Các ứng viên đã có thêm nhiều
                              kinh nghiệm và kiến thức về kỹ năng, quy trình tham gia
                              phỏng vấn và cách bán hàng hiệu quả trong lĩnh vực
                              Telesale/ Bán hàng/ Tư vấn sản phẩm.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="[MBB] - KHÓA ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG 2024 (02 NGÀY)"
                              href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-khoa-dao-tao-hoi-nhap-nang-cao-ky-nang-2024-02-ngay.html"
                            >
                              <img
                                src="img/posts/z5371212949731b1f35a1903639e08461953669ef0b8ed-4572.jpg"
                                alt="[MBB] - KHÓA ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG 2024 (02 NGÀY)"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="[MBB] - KHÓA ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG 2024 (02 NGÀY)"
                                href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-khoa-dao-tao-hoi-nhap-nang-cao-ky-nang-2024-02-ngay.html"
                              >
                                [MBB] - KHÓA ĐÀO TẠO HỘI NHẬP &amp; NÂNG CAO KỸ NĂNG
                                2024 (02 NGÀY)
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Sáng ngày 22/04/2024 đã diễn ra buổi đầu tiên của hành
                              trình 02 ngày đào tạo, đây là chương trình hỗ trợ nâng
                              cao Kỹ năng tham gia Phỏng vấn và Bán hàng hiệu quả cho
                              các bạn chưa có nhiều kinh nghiệm trong các lĩnh vực
                              Telesale/ Bán hàng/ Tư vấn sản phẩm
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="[YTP Mùa 2] MBB Young Talent Program 2024- Season II"
                              href="tin-tuc/tin-tuc-noi-bo/mbb-young-talent-program-2024-season-ii.html"
                            >
                              <img
                                src="img/posts/coming-soon-5220.png"
                                alt="[YTP Mùa 2] MBB Young Talent Program 2024- Season II"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="[YTP Mùa 2] MBB Young Talent Program 2024- Season II"
                                href="tin-tuc/tin-tuc-noi-bo/mbb-young-talent-program-2024-season-ii.html"
                              >
                                [YTP Mùa 2] MBB Young Talent Program 2024- Season II
                              </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Tiếp nối sự thành công của Mùa 1, năm nay MBB Young
                              Talent Program 2024- Season II đã chính thức quay trở
                              lại với những thay đổi vô cùng đặc biệt dành cho GenZ
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
                              title="[TOGETHER WE GROW - TOGETHER WE WIN]: NHỮNG KHOẢNH KHẮC ĐÁNG NHỚ TẠI ĐÊM TIỆC KỶ NIỆM 10 NĂM THÀNH LẬP CÔNG TY CP BPO MẮT BÃO"
                              href="tin-tuc/tin-tuc-noi-bo/together-we-grow-together-we-win-nhung-khoanh-khac-dang-nho-tai-dem-tiec-ky-niem-10-nam-thanh-lap-cong-ty-cp-bpo-mat-bao.html"
                            >
                              <img
                                src="img/posts/tai0755-2-2610.jpg"
                                alt="[TOGETHER WE GROW - TOGETHER WE WIN]: NHỮNG KHOẢNH KHẮC ĐÁNG NHỚ TẠI ĐÊM TIỆC KỶ NIỆM 10 NĂM THÀNH LẬP CÔNG TY CP BPO MẮT BÃO"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="[TOGETHER WE GROW - TOGETHER WE WIN]: NHỮNG KHOẢNH KHẮC ĐÁNG NHỚ TẠI ĐÊM TIỆC KỶ NIỆM 10 NĂM THÀNH LẬP CÔNG TY CP BPO MẮT BÃO"
                                href="tin-tuc/tin-tuc-noi-bo/together-we-grow-together-we-win-nhung-khoanh-khac-dang-nho-tai-dem-tiec-ky-niem-10-nam-thanh-lap-cong-ty-cp-bpo-mat-bao.html"
                              >
                                [TOGETHER WE GROW - TOGETHER WE WIN]: NHỮNG KHOẢNH
                                KHẮC ĐÁNG NHỚ TẠI ĐÊM TIỆC KỶ NIỆM 10 NĂM THÀNH LẬP
                                CÔNG TY CP BPO MẮT BÃO
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Một đêm tiệc thật sự ý nghĩa đã diễn ra thật trọn vẹn và
                              thành công! MBB xin được gửi đến quý Khách mời, đối tác,
                              các thành viên Đại gia đình MBB thân thương lời cảm ơn
                              sâu sắc nhất! Xin Cảm ơn vì đã cùng đến tham dự và tạo
                              nên một đêm tiệc, một sự kiện đáng nhớ này!
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
                                    title="[ĐÀO TẠO] Học live “deal” luyện cùng Shopee Uni"
                                    href="tin-tuc/su-kien-trach-nhiem-xa-hoi/dao-tao-hoc-live-deal-luyen-cung-shopee-uni.html"
                                  >
                                    <img
                                      src="img/posts/nb-icha-shopeeuni290324-7935.jpg"
                                      alt="[ĐÀO TẠO] Học live “deal” luyện cùng Shopee Uni"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a
                                      className="text-split text-split-2"
                                      title="[ĐÀO TẠO] Học live “deal” luyện cùng Shopee Uni"
                                      href="tin-tuc/su-kien-trach-nhiem-xa-hoi/dao-tao-hoc-live-deal-luyen-cung-shopee-uni.html"
                                    >
                                      [ĐÀO TẠO] Học live “deal” luyện cùng Shopee Uni
                                    </a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    Vào sáng ngày 28/03/2024, nhân sự đại diện P.Đào
                                    tạo MBB và P.VH2 đã có cơ hội tham dự buổi
                                    training HỌC LIVE “DEAL” LUYỆN CÙNG SHOPEE UNI –
                                    một trong những khách hàng tiêu biểu hàng đầu của
                                    MBB.
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
                                    title="[MINI GAME] Ghép Hình Nhanh Mắt – Rinh Quà Mê Say- 10 năm MBB"
                                    href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mini-game-ghep-hinh-nhanh-mat-rinh-qua-me-say.html"
                                  >
                                    <img
                                      src="img/posts/nb-icha-minigame10nammbb260324-4274.jpg"
                                      alt="[MINI GAME] Ghép Hình Nhanh Mắt – Rinh Quà Mê Say- 10 năm MBB"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a
                                      className="text-split text-split-2"
                                      title="[MINI GAME] Ghép Hình Nhanh Mắt – Rinh Quà Mê Say- 10 năm MBB"
                                      href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mini-game-ghep-hinh-nhanh-mat-rinh-qua-me-say.html"
                                    >
                                      [MINI GAME] Ghép Hình Nhanh Mắt – Rinh Quà Mê
                                      Say- 10 năm MBB
                                    </a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    Mừng Kỉ Niệm 10 Năm Thành Lập Công Ty Cổ Phần BPO
                                    Mắt Bão
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
                              title=" [MBB Chi nhánh Hà Nội] - Ngày hội việc làm, tư vấn hướng nghiệp lần thứ 7- năm 2024."
                              href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-chi-nhanh-ha-noi-ngay-hoi-viec-lam-tu-van-huong-nghiep-lan-thu-7-nam-2024.html"
                            >
                              <img
                                src="img/posts/z5248552773664732f2c31328c4012cd7118de2f43011b-2194.jpg"
                                alt=" [MBB Chi nhánh Hà Nội] - Ngày hội việc làm, tư vấn hướng nghiệp lần thứ 7- năm 2024."
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title=" [MBB Chi nhánh Hà Nội] - Ngày hội việc làm, tư vấn hướng nghiệp lần thứ 7- năm 2024."
                                href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-chi-nhanh-ha-noi-ngay-hoi-viec-lam-tu-van-huong-nghiep-lan-thu-7-nam-2024.html"
                              >
                                &nbsp;[MBB Chi nhánh Hà Nội] - Ngày hội việc làm, tư
                                vấn hướng nghiệp lần thứ 7- năm 2024.
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Ngày 12/3 vừa qua, huyện Mộc Châu (tỉnh Sơn La) tổ chức
                              Ngày hội việc làm, tư vấn hướng nghiệp lần thứ 7- năm
                              2024. Thu hút sự tham gia của 3000 người lao động và
                              sinh viên và gần 50 doanh nghiệp, hợp tác xã trong và
                              ngoài huyện.&nbsp;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Buổi Ghé Thăm Của Chủ Tịch HĐQT Cùng Với Các Khách Quý- Tạp Chí Doanh Nhân Sài Gòn"
                              href="tin-tuc/tin-tuc-noi-bo/buoi-ghe-tham-cua-chu-tich-hdqt-cung-voi-cac-khach-quy-tap-chi-doanh-nhan-sai-gon.html"
                            >
                              <img
                                src="img/posts/icconchu-tich-va-tap-chi-dnsg-1856.jpg"
                                alt="Buổi Ghé Thăm Của Chủ Tịch HĐQT Cùng Với Các Khách Quý- Tạp Chí Doanh Nhân Sài Gòn"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Buổi Ghé Thăm Của Chủ Tịch HĐQT Cùng Với Các Khách Quý- Tạp Chí Doanh Nhân Sài Gòn"
                                href="tin-tuc/tin-tuc-noi-bo/buoi-ghe-tham-cua-chu-tich-hdqt-cung-voi-cac-khach-quy-tap-chi-doanh-nhan-sai-gon.html"
                              >
                                Buổi Ghé Thăm Của Chủ Tịch HĐQT Cùng Với Các Khách
                                Quý- Tạp Chí Doanh Nhân Sài Gòn
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Sáng ngày 13/03 Anh Lê Hải Bình - Chủ tịch HĐQT Công ty
                              Cổ Phần BPO Mắt Bão cùng với các anh/chị trong tạp chí
                              Doanh Nhân Sài Gòn đã có buổi ghé thăm và tham quan văn
                              phòng Công ty Mắt Bão BPO tại TP. Hồ Chí Minh.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Chúc mừng ngày Quốc tế phụ nữ 8/3"
                              href="tin-tuc/tin-tuc-noi-bo/chucmung-ngay-quoc-te-phu-nu-83.html"
                            >
                              <img
                                src="img/posts/ictkchuc-mung-83-5429.png"
                                alt="Chúc mừng ngày Quốc tế phụ nữ 8/3"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Chúc mừng ngày Quốc tế phụ nữ 8/3"
                                href="tin-tuc/tin-tuc-noi-bo/chucmung-ngay-quoc-te-phu-nu-83.html"
                              >
                                Chúc&nbsp;mừng ngày Quốc tế phụ nữ 8/3
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Mùa xuân lại về, mang theo hương sắc rực rỡ của những
                              bông hoa, cũng là lúc chúng ta chào đón ngày Quốc tế Phụ
                              nữ 8/3 - một ngày đặc biệt để tôn vinh những người phụ
                              nữ&nbsp;tuyệt vời trong cuộc đời.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a
                              className="guong"
                              title="Những Dự Án Nhỏ, Ý Tưởng Lớn: Cách các sinh viên GenZ có thể bắt đầu tích lũy kinh nghiệm từ các dự án nhỏ hàng ngày"
                              href="tin-tuc/ky-nang-mem/nhung-du-an-nho-y-tuong-lon-cach-cac-sinh-vien-genz-co-the-bat-dau-tich-luy-kinh-nghiem-tu-cac-du-an-nho-hang-ngay.html"
                            >
                              <img
                                src="img/posts/ictkgenz-2696.png"
                                alt="Những Dự Án Nhỏ, Ý Tưởng Lớn: Cách các sinh viên GenZ có thể bắt đầu tích lũy kinh nghiệm từ các dự án nhỏ hàng ngày"
                              />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a
                                className="text-split text-split-2"
                                title="Những Dự Án Nhỏ, Ý Tưởng Lớn: Cách các sinh viên GenZ có thể bắt đầu tích lũy kinh nghiệm từ các dự án nhỏ hàng ngày"
                                href="tin-tuc/ky-nang-mem/nhung-du-an-nho-y-tuong-lon-cach-cac-sinh-vien-genz-co-the-bat-dau-tich-luy-kinh-nghiem-tu-cac-du-an-nho-hang-ngay.html"
                              >
                                Những Dự Án Nhỏ, Ý Tưởng Lớn: Cách các sinh viên GenZ
                                có thể bắt đầu tích lũy kinh nghiệm từ các dự án nhỏ
                                hàng ngày
                              </a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p>
                                GenZ - thế hệ năng động, sáng tạo và đầy nhiệt huyết,
                                luôn mong muốn khẳng định bản thân và tạo dựng thành
                                công trong tương lai. Tuy nhiên, không phải ai cũng có
                                cơ hội tham gia vào những dự án lớn ngay từ khi còn là
                                sinh viên. Vậy làm thế nào để tích lũy kinh nghiệm và
                                phát triển bản thân?
                              </p>
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
                                  href="tin-tucc575.html?page=6"
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
                              <li className="paginate_button page-item active ">
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
                                  href="tin-tucfdfa.html?page=8"
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
  