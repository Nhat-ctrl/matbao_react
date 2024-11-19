var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <ul className="h-card hidden-vcard">
            <li className="h-fn fn">Mắt Bão BPO</li>
            <li className="h-org org">Mắt Bão BPO</li>
            <li className="h-tel tel">02873019988</li>
            <li><a className="u-url ul" href="/">https://matbaobpo.com/</a></li>
          </ul>
          <h1 className="hidden-seoh">Tin tức</h1>
          <section className="menu menu-inpage" id="menu">
            <div className="container">
              <div className="desc-menu d-flex justify-content-between align-items-center">
                <div className="logo-header">
                  <a href="/"><img src="upload/photo/logo-3797.svg" alt="Mắt Bão BPO" /></a>
                </div>
                <ul className="menu-i d-flex align-items-center justify-content-between">
                  <li className="li-home">
                    <a className="transition active" title="Trang chủ" href="/">
                      <img src="assets/images/home.svg" alt="Trang chủ" />
                    </a>
                  </li>
                  <li>
                    <a className="transition " href="javascript:void(0)" title="Giới thiệu">
                      Giới thiệu
                    </a>
                    <ul>
                      <li>
                        <a title="Về Mắt Bão BPO" href="gioi-thieu/ve-mat-bao-bpo.html">
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
                        <a title="Thuê ngoài nhân sự" href="dich-vu/thue-ngoai-nhan-su.html">
                          Thuê ngoài nhân sự
                        </a>
                      </li>
                      <li>
                        <a title="Tính lương" href="dich-vu/tinh-luong.html">
                          Tính lương
                        </a>
                      </li>
                      <li>
                        <a title="Quản lý tòa nhà" href="dich-vu/quan-ly-toa-nha.html">
                          Quản lý tòa nhà
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="transition " href="javascript:void(0)" title="Tuyển dụng">
                      Tuyển dụng
                    </a>
                    <ul>
                      <li>
                        <a title="Chính sách- chế độ của Mắt Bão BPO" href="viec-lam/van-hoa-mat-bao-bpo.html">
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
                    <a className="transition active" title="Tin tức" href="tin-tuc.html">
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
                        <a title="Kiến thức- Góc nhìn" href="tin-tuc/kien-thuc-goc-nhin.html">
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
                    <span className="search-open"><img src="assets/images/icon-search.svg" alt="Search" /></span>
                    <form id="frmSearch" method="get" action="https://matbaobpo.com/Search">
                      <div className="search-ab">
                        <div className="search">
                          <input type="text" id="keyword" name="keyword" placeholder="Nhập từ khóa cần tìm..." />
                          <p onclick="onSearch('keyword');"><i className="fas fa-search" /></p>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className=" box-ngonngu lang-google position-relative">
                    <p className="show-lang-gg ngonngu lang_txt">
                      <span className="ngonngu-img"><img src="assets/images/vietnam.svg" alt="Mắt Bão BPO" /></span>
                      <span className="ngonngu-text ngonngu-none">Tiếng Việt</span>
                      <span className="ngonngu-icon"><i className="fas fa-angle-down" /></span>
                    </p>
                    <div className="list-translate bg-white" style={{display: 'none'}}>
                      <ul>
                        <li>
                          <a href="javascript:void(0)" data-code="vn" data-text="Tiếng Việt" className="changeLanguage text-left active" data-img="<img src='_/assets/images/vietnam.html' alt=''>">
                            <span className="ngonngu-img"><img src="assets/images/vietnam.svg" alt="Mắt Bão BPO" /></span>
                            <span className="ngonngu-text text-dark">Tiếng Việt</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" data-code="us" data-text=" Tiếng Anh" className="changeLanguage text-left " data-img="<img src='_/assets/images/eng.html' alt=''>">
                            <span className="ngonngu-img"><img src="assets/images/eng.svg" alt="Mắt Bão BPO" /></span>
                            <span className="ngonngu-text text-dark">Tiếng Anh</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" data-code="kr" data-text="Tiếng Hàn" data-img="<img src='_/assets/images/han.html' alt=''>" className="changeLanguage text-left ">
                            <span className="ngonngu-img"><img src="assets/images/han.svg" alt="Mắt Bão BPO" /></span>
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
                    <button id="navMenuClose" className="reset cd-nav-trigger js-cd-nav-trigger cd-nav-trigger--nav-is-visible"><span /></button>
                  </li>
                  <li className="li-home">
                    <a className="transition active" title="Trang chủ" href="/">
                      <img src="assets/images/home.svg" alt="Trang chủ" />
                    </a>
                  </li>
                  <li>
                    <a className="transition " href="javascript:void(0)" title="Giới thiệu">
                      Giới thiệu
                    </a>
                    <ul className="ul-sub">
                      <li>
                        <a title="Về Mắt Bão BPO" href="gioi-thieu/ve-mat-bao-bpo.html">
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
                        <a title="Thuê ngoài nhân sự" href="dich-vu/thue-ngoai-nhan-su.html">
                          Thuê ngoài nhân sự
                        </a>
                      </li>
                      <li>
                        <a title="Tính lương" href="dich-vu/tinh-luong.html">
                          Tính lương
                        </a>
                      </li>
                      <li>
                        <a title="Quản lý tòa nhà" href="dich-vu/quan-ly-toa-nha.html">
                          Quản lý tòa nhà
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="transition " href="javascript:void(0)" title="Tuyển dụng">
                      Tuyển dụng
                    </a>
                    <ul className="ul-sub">
                      <li>
                        <a title="Chính sách- chế độ của Mắt Bão BPO" href="viec-lam/van-hoa-mat-bao-bpo.html">
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
                    <a className="transition active" title="Tin tức" href="tin-tuc.html">
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
                        <a title="Kiến thức- Góc nhìn" href="tin-tuc/kien-thuc-goc-nhin.html">
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
          <section id="bc" className>
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
                        <span>
                          Trang chủ
                        </span>
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-decoration-none" href="tin-tuc.html">
                        <span>
                          Tin tức
                        </span>
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
                  <div className="title-members title-clicks">
                  </div>
                </div>
              </div>
              <div className="load-culture">
                <div className="container">
                  <div className>
                    {/*row mb-96*/}
                    <div className="row mb-50">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="[MBB] - Tết Trung Thu - Tết Đoàn Viên" href="tin-tuc/tin-tuc-noi-bo/%5bmbb%5d---tet-trung-thu---tet-doan-vien.html">
                              <img src="img/posts/3.jpg" alt="[MBB] - Tết Trung Thu - Tết Đoàn Viên" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[MBB] - Tết Trung Thu - Tết Đoàn Viên" href="tin-tuc/tin-tuc-noi-bo/%5bmbb%5d---tet-trung-thu---tet-doan-vien.html">[MBB] - Tết Trung Thu - Tết Đoàn Viên</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Một mùa Trung Thu nữa lại đến, là một trong những dịp lễ được mong chờ nhất trong năm! Dưới ánh trăng tròn viên mãn, không chỉ là thời khắc để ngắm trăng mà còn là lúc mọi người sum họp, sẻ chia yêu thương, và cùng nhau ôn lại những kỷ niệm tuổi thơ. Đây là dịp để chúng ta trở về bên gia đình, thưởng thức bánh Trung Thu, rước đèn lồng và cùng nhau ngắm trăng sáng.</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="𝐘𝐎𝐔𝐍𝐆 𝐓𝐀𝐋𝐄𝐍𝐓 𝐏𝐑𝐎𝐆𝐑𝐀𝐌 𝟐𝟎𝟐𝟒 𝐒𝐄𝐀𝐒𝐎𝐍 𝐈𝐈: “𝐀𝐰𝐚𝐤𝐞𝐧 𝐏𝐨𝐭𝐞𝐧𝐭𝐢𝐚𝐥 - 𝐂𝐨𝐧𝐪𝐮𝐞𝐫 𝐭𝐡𝐞 𝐏𝐞𝐚𝐤”" href="tin-tuc/tin-tuc-noi-bo/__________-____________-______________-________-____________-_____-%e2%80%9c____________-__________________---______________-______-________%e2%80%9d.html">
                              <img src="img/posts/z5812667313837_e26cee3264f3d117ff74d8e2255183ab.jpg" alt="𝐘𝐎𝐔𝐍𝐆 𝐓𝐀𝐋𝐄𝐍𝐓 𝐏𝐑𝐎𝐆𝐑𝐀𝐌 𝟐𝟎𝟐𝟒 𝐒𝐄𝐀𝐒𝐎𝐍 𝐈𝐈: “𝐀𝐰𝐚𝐤𝐞𝐧 𝐏𝐨𝐭𝐞𝐧𝐭𝐢𝐚𝐥 - 𝐂𝐨𝐧𝐪𝐮𝐞𝐫 𝐭𝐡𝐞 𝐏𝐞𝐚𝐤”" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="𝐘𝐎𝐔𝐍𝐆 𝐓𝐀𝐋𝐄𝐍𝐓 𝐏𝐑𝐎𝐆𝐑𝐀𝐌 𝟐𝟎𝟐𝟒 𝐒𝐄𝐀𝐒𝐎𝐍 𝐈𝐈: “𝐀𝐰𝐚𝐤𝐞𝐧 𝐏𝐨𝐭𝐞𝐧𝐭𝐢𝐚𝐥 - 𝐂𝐨𝐧𝐪𝐮𝐞𝐫 𝐭𝐡𝐞 𝐏𝐞𝐚𝐤”" href="tin-tuc/tin-tuc-noi-bo/__________-____________-______________-________-____________-_____-%e2%80%9c____________-__________________---______________-______-________%e2%80%9d.html">𝐘𝐎𝐔𝐍𝐆 𝐓𝐀𝐋𝐄𝐍𝐓 𝐏𝐑𝐎𝐆𝐑𝐀𝐌 𝟐𝟎𝟐𝟒 𝐒𝐄𝐀𝐒𝐎𝐍 𝐈𝐈: “𝐀𝐰𝐚𝐤𝐞𝐧 𝐏𝐨𝐭𝐞𝐧𝐭𝐢𝐚𝐥 - 𝐂𝐨𝐧𝐪𝐮𝐞𝐫 𝐭𝐡𝐞 𝐏𝐞𝐚𝐤”</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Chào mừng 4 bạn trong chương trình&nbsp;</span><span style={{backgroundColor: 'transparent', color: '#050505'}}>𝐘𝐎𝐔𝐍𝐆 𝐓𝐀𝐋𝐄𝐍𝐓 𝐏𝐑𝐎𝐆𝐑𝐀𝐌 𝟐𝟎𝟐𝟒 𝐒𝐄𝐀𝐒𝐎𝐍 𝐈𝐈: “𝐀𝐰𝐚𝐤𝐞𝐧 𝐏𝐨𝐭𝐞𝐧𝐭𝐢𝐚𝐥 - 𝐂𝐨𝐧𝐪𝐮𝐞𝐫 𝐭𝐡𝐞 𝐏𝐞𝐚𝐤”</span><span style={{backgroundColor: 'transparent', color: '#000000'}}>đã chính thức gia nhập Đại gia đình MBB. Đại gia đình MBB rất vui mừng khi được chào đón 04 bạn trẻ đầy tài năng và nhiệt huyết chính thức gia nhập&nbsp;</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="Mắt Bão BPO thành viên có sinh nhật trong tháng 8 " href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-thanh-vien-co-sinh-nhat-trong-thang-8-.html">
                              <img src="img/posts/Thi%e1%ba%bft%20k%e1%ba%bf%20ch%c6%b0a%20c%c3%b3%20t%c3%aan%20(4).jpg" alt="Mắt Bão BPO thành viên có sinh nhật trong tháng 8 " />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Mắt Bão BPO thành viên có sinh nhật trong tháng 8 " href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-thanh-vien-co-sinh-nhat-trong-thang-8-.html">Mắt Bão BPO thành viên có sinh nhật trong tháng 8 </a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              <p><span style={{backgroundColor: 'transparent', color: '#050505'}}>&nbsp;Đại gia đình Mắt Bão cùng tổ chức sinh nhật cho thành viên có ngày sinh vào tháng 8 với bầu không khí đầy hạnh phúc xen lẫn niềm vui tại Mắt Bão BPO.</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-50">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="04 nhiệm vụ chính của một HRBP - Human Resource Business Partner" href="tin-tuc/tin-tuc-nganh/04-nhiem-vu-chinh-cua-mot-hrbp---human-resource-business-partner.html">
                              <img src="img/posts/67.jpg" alt="04 nhiệm vụ chính của một HRBP - Human Resource Business Partner" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="04 nhiệm vụ chính của một HRBP - Human Resource Business Partner" href="tin-tuc/tin-tuc-nganh/04-nhiem-vu-chinh-cua-mot-hrbp---human-resource-business-partner.html">04 nhiệm vụ chính của một HRBP - Human Resource Business Partner</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <ul><li>Kiểm soát chiến lược các quy trình nhân sự</li><li>Đánh giá &amp; phát triển nhân sự</li><li>hợp tác chặt chẽ với ban điều hành</li><li>Xây dựng thương hiệu tuyển dụng</li></ul>
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
                                  <a className="guong" title="[Thông báo] - Thời gian nghỉ lễ Quốc Khánh (02/09)" href="tin-tuc/tin-tuc-noi-bo/%5bthong-bao%5d---thoi-gian-nghi-le-quoc-khanh-(0209).html">
                                    <img src="img/posts/CK%20IC_Th%c3%b4ng%20b%c3%a1o%20ngh%e1%bb%89%20l%e1%bb%85%200209_VI%20(1).jpg" alt="[Thông báo] - Thời gian nghỉ lễ Quốc Khánh (02/09)" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a className="text-split text-split-2" title="[Thông báo] - Thời gian nghỉ lễ Quốc Khánh (02/09)" href="tin-tuc/tin-tuc-noi-bo/%5bthong-bao%5d---thoi-gian-nghi-le-quoc-khanh-(0209).html">[Thông báo] - Thời gian nghỉ lễ Quốc Khánh (02/09)</a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Mừng đại lễ Quốc Khánh (02/09/1945 - 02/09/2024), Công ty Mắt Bão BPO xin trân trọng thông báo thời gian nghỉ lễ</span></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="pic-news">
                                  <a className="guong" title="HRBP & Xu hướng chuyển đổi chức năng nhân sự trong tương lai" href="tin-tuc/kien-thuc-goc-nhin/hrbp-%26-xu-huong-chuyen-doi-chuc-nang-nhan-su-trong-tuong-lai.html">
                                    <img src="img/posts/65.jpg" alt="HRBP & Xu hướng chuyển đổi chức năng nhân sự trong tương lai" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a className="text-split text-split-2" title="HRBP & Xu hướng chuyển đổi chức năng nhân sự trong tương lai" href="tin-tuc/kien-thuc-goc-nhin/hrbp-%26-xu-huong-chuyen-doi-chuc-nang-nhan-su-trong-tuong-lai.html">HRBP &amp; Xu hướng chuyển đổi chức năng nhân sự trong tương lai</a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    <p><span style={{backgroundColor: 'transparent', color: '#000000'}}><strong>HRBP</strong> là viết tắt của cụm từ<strong> Human Resource Business Partner</strong>, có nghĩa là Nhân sự – đối tác kinh doanh. Đây là một vị trí cấp cao trong bộ phận Nhân sự, có nhiệm vụ tối ưu các hoạt động nhân sự để hỗ trợ các mục tiêu kinh doanh của tổ chức.</span></p>
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
                            <a className="guong" title="Bộ phận Contact Center chỉ làm công việc chăm sóc khách hàng?" href="tin-tuc/cham-soc-khach-hang-(cskh)/bo-phan-contact-center-chi-lam-cong-viec-cham-soc-khach-hang.html">
                              <img src="img/posts/57.jpg" alt="Bộ phận Contact Center chỉ làm công việc chăm sóc khách hàng?" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Bộ phận Contact Center chỉ làm công việc chăm sóc khách hàng?" href="tin-tuc/cham-soc-khach-hang-(cskh)/bo-phan-contact-center-chi-lam-cong-viec-cham-soc-khach-hang.html">Bộ phận Contact Center chỉ làm công việc chăm sóc khách hàng?</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Bộ phận<strong> </strong>Contact Center không chỉ giới hạn ở công việc chăm sóc khách hàng mà còn đóng vai trò quan trọng trong nhiều khía cạnh khác của hoạt động nhằm hỗ trợ mục tiêu kinh doanh và phát triển của doanh nghiệp.. Dưới đây là một số nhiệm vụ chính mà Contact Center có thể đảm nhận:</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="Phòng Cháy Chữa Cháy" href="tin-tuc/chinh-phu/phong-chay-chua-chay.html">
                              <img src="img/posts/PCCC%20(1).jpg" alt="Phòng Cháy Chữa Cháy" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Phòng Cháy Chữa Cháy" href="tin-tuc/chinh-phu/phong-chay-chua-chay.html">Phòng Cháy Chữa Cháy</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p>Thông tư sửa đổi, bổ sung một số điều của Thông tư số 149/2020/tt-bca ngày 31 tháng 12 năm 2020 của Bộ Trưởng Bộ Công an quy định chi tiết một số điều và biện pháp thi hành Luật phòng cháy và chữa cháy và Luật sửa đổi, bổ sung một số điều của Luật phòng cháy và chữa cháy và Thông tư số 08/2018/TT-BCA ngày 05 tháng 03 năm 2018 của Bộ Trưởng Bộ Công An quy định chi tiết một số điều của Nghị định số 83/2017/ND-CP ngày 18 tháng 7 năm 2017 của Chính Phủ quy định về công tác cứu nạn, cứu hộ của lực lượng phòng cháy và chữa cháy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="Tiền tệ - Ngân hàng" href="tin-tuc/chinh-phu/tien-te---ngan-hang.html">
                              <img src="img/posts/Ng%c3%a2n%20h%c3%a0ng.jpg" alt="Tiền tệ - Ngân hàng" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Tiền tệ - Ngân hàng" href="tin-tuc/chinh-phu/tien-te---ngan-hang.html">Tiền tệ - Ngân hàng</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p>Thông tư quy định về hoạt động cung ứng dịch vụ trung gian thông toán</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="Thuế - Phí - Lệ Phí" href="tin-tuc/chinh-phu/thue---phi---le-phi.html">
                              <img src="img/posts/Thu%e1%ba%bf.jpg" alt="Thuế - Phí - Lệ Phí" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Thuế - Phí - Lệ Phí" href="tin-tuc/chinh-phu/thue---phi---le-phi.html">Thuế - Phí - Lệ Phí</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p>Thông tư bãi bỏ một số Thông tư của Bộ trưởng Bộ Tài chính trong lĩnh vực thuế</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pagination-home my-3 mx-auto">
                      <div className="row">
                        <div className="col-sm-12 col-md-12">
                          <div className="dataTables_paginate paging_simple_numbers mbb-paging-style" id="example2_paginate">
                            <ul className="pagination">
                              <li className="paginate_button page-item previous " id="example2_previous">
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tuc2679.html?page=1">
                                  <i className="fa fa-step-backward" /> 
                                </a>
                              </li>
                              <li className="paginate_button page-item previous " id="example2_previous">
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tuc2679.html?page=1">
                                  <i className="fa fa-backward" />
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuc2679.html?page=1">1</a>
                              </li>
                              <li className="paginate_button page-item active ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuc4658.html?page=2">2</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuc9ba9.html?page=3">3</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tucfdb0.html?page=4">4</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tucaf4d.html?page=5">5</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tucc575.html?page=6">6</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuc235c.html?page=7">7</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tucfdfa.html?page=8">8</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuc0b08.html?page=9">9</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuc1448.html?page=10">10</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuc1c8b.html?page=11">11</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tucce37.html?page=12">12</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuc8c93.html?page=13">13</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuca7f1.html?page=14">14</a>
                              </li>
                              <li className="paginate_button page-item  ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuc5760.html?page=15">15</a>
                              </li>
                              <li className="paginate_button page-item next " id="example2_next">
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tuc9ba9.html?page=3">
                                  <i className="fa fa-forward" />
                                </a>
                              </li>
                              <li className="paginate_button page-item next " id="example2_next">
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tuc5760.html?page=15">
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
                      <a href="#"><img src="upload/photo/logo-footer-4403.svg" /></a>
                    </div>
                    <div className="info-footer">
                      Mắt Bão BPO luôn luôn hoàn thiện và phát triển để trở thành doanh nghiệp Outsourcing số 1
                    </div>
                    <div>
                      <p style={{marginTop: '10px'}}>
                        <img src="img/iso9001.png" className="img-iso" />
                        <img src="img/iso27001.png" className="img-iso" />
                        <a href="http://online.gov.vn/Home/WebDetails/46907" target="_blank"><img alt="" title src="img/logoSaleNoti.png" className="img-logo-bct" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="footer-news col-12 col-sm-6 col-md-6 col-lg-3">
                    <p className="title-footer">
                      CÔNG TY CỔ PHẦN BPO MẮT BÃO
                    </p>
                    <div className="content-footer">
                      <h6>
                        <span style={{fontSize: '16px'}}>
                          <span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>
                            <strong>Trụ Sở Hồ Chí Minh</strong>
                          </span>
                        </span>
                      </h6>
                      <p>
                        <span style={{fontSize: '16px'}}>
                          <span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>
                            12A Núi Thành, Phường 13, Quận Tân Bình, Thành Phố Hồ Chí Minh, Việt Nam
                          </span>
                        </span>
                      </p>
                      <p>&nbsp;</p>
                      <h6>
                        <span style={{fontSize: '16px'}}>
                          <span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>
                            <strong>Chi Nhánh Hà Nội</strong>
                          </span>
                        </span>
                      </h6>
                      <p>
                        <span style={{fontSize: '16px'}}>
                          <span style={{fontFamily: 'Arial,Helvetica,sans-serif'}}>
                            381 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội, Việt Nam
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="footer-news col-12 col-sm-6 col-md-6 col-lg-3">
                    <p className="title-footer">Thông tin liên hệ</p>
                    <div className="content-footer">
                      <p>Hotline Call Center: <a href="tel:19007151" className="lnk-hotline"><strong>1900 7151</strong></a></p>
                      <p>Hotline Kinh Doanh:<a href="tel:02873019988" className="lnk-hotline"><strong> 028 7301 9988</strong></a></p>
                      <p>Email: <a href="mailto:info@matbaobpo.com"><strong>info@matbaobpo.com</strong></a></p>
                      <p>Website: <a href="/"><strong>matbaobpo.com</strong></a></p>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="copyright">Copyright© 2024 Mắt Bão BPO. All rights reserved.</p>
          </footer>
          {/* Modal notify */}
          {/* Modal tuvan */}
          <div className="toolbar">
            <ul>
              <li>
                <a id="goidien" href="tel:02873019988" title="title">
                  <img src="assets/images/icon-t1.png" alt="images" /><br />
                  <span>Gọi điện</span>
                </a>
              </li>
              <li>
                <a id="nhantin" href="sms:02873019988" title="title">
                  <img src="assets/images/icon-t2.png" alt="images" /><br />
                  <span>Nhắn tin</span>
                </a>
              </li>
              <li>
                <a id="chatzalo" href="https://zalo.me/02873019988" title="title">
                  <img src="assets/images/icon-t3.png" alt="images" /><br />
                  <span>Chat zalo</span>
                </a>
              </li>
              <li>
                <a id="chatfb" href="https://www.facebook.com/matbaobpo2014" title="title">
                  <img src="assets/images/icon-t4.png" alt="images" /><br />
                  <span>Chat facebook</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Modal notify */}
          <div className="modal modal-custom fade" id="popup-notify" tabIndex={-1} role="dialog" aria-labelledby="popup-notify-label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-top modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h6 className="modal-title" id="popup-notify-label">Thông báo</h6>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body"><span id="msg" /></div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Thoát</button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal tuvan */}
          <div id="script-main" />
        </div>
      );
    }
  });
  export default App;