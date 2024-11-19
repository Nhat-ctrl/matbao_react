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
                            <a className="guong" title="[Ma trận EISENHOWER] - Bí quyết quản lý thời gian hiệu quả" href="tin-tuc/tin-tuc-nganh/%5bma-tran-eisenhower%5d---bi-quyet-quan-ly-thoi-gian-hieu-qua.html">
                              <img src="img/posts/C%c3%94NG%20TY%20C%e1%bb%94%20PH%e1%ba%a6N%20BPO%20M%e1%ba%aeT%20B%c3%83O%20(564%20x%20320%20px)%20(1).jpg" alt="[Ma trận EISENHOWER] - Bí quyết quản lý thời gian hiệu quả" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[Ma trận EISENHOWER] - Bí quyết quản lý thời gian hiệu quả" href="tin-tuc/tin-tuc-nganh/%5bma-tran-eisenhower%5d---bi-quyet-quan-ly-thoi-gian-hieu-qua.html">[Ma trận EISENHOWER] - Bí quyết quản lý thời gian hiệu quả</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              <p>Bạn có bao giờ cảm thấy choáng ngợp bởi vô số công việc cần hoàn thành? Bạn có lo lắng rằng mình không có đủ thời gian để đạt được mục tiêu? Nếu vậy, ma trận quản lý thời gian Eisenhower chính là bí kíp dành cho bạn!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="Mắt Bão BPO rộn ràng chào mừng ngày Phụ Nữ Việt Nam 20/10 & Chúc mừng thành viên có ngày sinh tháng 10" href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-ron-rang-chao-mung-ngay-phu-nu-viet-nam-2010-%26-chuc-mung-thanh-vien-co-ngay-sinh-thang-10.html">
                              <img src="img/posts/K%c3%adch%20th%c6%b0%e1%bb%9bc%20Website.jpg" alt="Mắt Bão BPO rộn ràng chào mừng ngày Phụ Nữ Việt Nam 20/10 & Chúc mừng thành viên có ngày sinh tháng 10" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Mắt Bão BPO rộn ràng chào mừng ngày Phụ Nữ Việt Nam 20/10 & Chúc mừng thành viên có ngày sinh tháng 10" href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-ron-rang-chao-mung-ngay-phu-nu-viet-nam-2010-%26-chuc-mung-thanh-vien-co-ngay-sinh-thang-10.html">Mắt Bão BPO rộn ràng chào mừng ngày Phụ Nữ Việt Nam 20/10 &amp; Chúc mừng thành viên có ngày sinh tháng 10</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              <p>Mắt Bão BPO gửi những lời chúc chân thành nhất đến các nữ nhân viên nhân ngày Phụ Nữ Việt Nam 20/10. Chúng tôi vô cùng biết ơn sự cống hiến và nỗ lực không ngừng của các bạn trong công việc. Không chỉ làm việc xuất sắc mà các bạn còn là những người đồng nghiệp tuyệt vời, luôn mang lại sự hỗ trợ và cảm hứng cho mọi người xung quanh.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="[Social Recruiting] - Xu hướng Tuyển Dụng phổ biến của Doanh Nghiệp" href="tin-tuc/tin-tuc-nganh/%5bsocial-recruiting%5d---xu-huong-tuyen-dung-pho-bien-cua-doanh-nghiep.html">
                              <img src="img/posts/3.jpg" alt="[Social Recruiting] - Xu hướng Tuyển Dụng phổ biến của Doanh Nghiệp" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[Social Recruiting] - Xu hướng Tuyển Dụng phổ biến của Doanh Nghiệp" href="tin-tuc/tin-tuc-nganh/%5bsocial-recruiting%5d---xu-huong-tuyen-dung-pho-bien-cua-doanh-nghiep.html">[Social Recruiting] - Xu hướng Tuyển Dụng phổ biến của Doanh Nghiệp</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              <p>Social Recruiting là phương pháp sử dụng mạng xã hội để tìm kiếm và tuyển chọn ứng viên hiện nay của các doanh nghiệp, giúp quy trình tuyển dụng trở nên hiện đại, hiệu quả và tiết kiệm hơn, đồng thời tăng khả năng tuyển chọn được ứng viên chất lượng cao.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-50">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="[MBB] - Chúc mừng ngày Doanh Nhân Việt Nam (13/10)" href="tin-tuc/tin-tuc-nganh/%5bmbb%5d---chuc-mung-ngay-doanh-nhan-viet-nam-(1310).html">
                              <img src="img/posts/2.jpg" alt="[MBB] - Chúc mừng ngày Doanh Nhân Việt Nam (13/10)" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[MBB] - Chúc mừng ngày Doanh Nhân Việt Nam (13/10)" href="tin-tuc/tin-tuc-nganh/%5bmbb%5d---chuc-mung-ngay-doanh-nhan-viet-nam-(1310).html">[MBB] - Chúc mừng ngày Doanh Nhân Việt Nam (13/10)</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p>Mắt Bão BPO xin gửi đến Quý đối tác lời chúc trân trọng nhất nhân ngày Doanh nhân Việt Nam. Chúc Quý doanh nhân luôn mạnh khỏe, hạnh phúc và gặt hái được nhiều thành công mới. Mỗi bước đi của các Anh,Chị chính là niềm tự hào của cộng đồng doanh nghiệp Việt Nam. Hãy tiếp tục cùng nhau xây dựng một nền kinh tế Việt Nam phát triển, hội nhập mạnh mẽ và đầy bản lĩnh!</p>
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
                                  <a className="guong" title="Công ty Mắt Bão BPO tham gia phỏng vấn với KOTRA NEWS" href="tin-tuc/tin-tuc-noi-bo/cong-ty-mat-bao-bpo-tham-gia-phong-van-voi-kotra-news.html">
                                    <img src="img/posts/Untitled-1%201.jpg" alt="Công ty Mắt Bão BPO tham gia phỏng vấn với KOTRA NEWS" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a className="text-split text-split-2" title="Công ty Mắt Bão BPO tham gia phỏng vấn với KOTRA NEWS" href="tin-tuc/tin-tuc-noi-bo/cong-ty-mat-bao-bpo-tham-gia-phong-van-voi-kotra-news.html">Công ty Mắt Bão BPO tham gia phỏng vấn với KOTRA NEWS</a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    <p style={{marginLeft: '0px', textAlign: 'justify'}}>&nbsp;Vừa qua công ty Cổ phần Mắt Bão BPO đã có một cuộc phỏng vấn cùng với KOTRA (Cơ quan xúc tiến thương mại – đầu tư Hàn Quốc) với tư cách là một công ty FDI xuất sắc và được giới thiệu trên trang tin tức doanh nghiệp KOTRA.&nbsp;&nbsp;</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="pic-news">
                                  <a className="guong" title="V/v: Cấp giấy phép hoạt động dịch vụ việc làm của công ty Cổ phần BPO Mắt Bão" href="tin-tuc/dich-vu/vv_-cap-giay-phep-hoat-dong-dich-vu-viec-lam-cua-cong-ty-co-phan-bpo-mat-bao.html">
                                    <img src="img/posts/Licensed-pdf.jpg" alt="V/v: Cấp giấy phép hoạt động dịch vụ việc làm của công ty Cổ phần BPO Mắt Bão" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a className="text-split text-split-2" title="V/v: Cấp giấy phép hoạt động dịch vụ việc làm của công ty Cổ phần BPO Mắt Bão" href="tin-tuc/dich-vu/vv_-cap-giay-phep-hoat-dong-dich-vu-viec-lam-cua-cong-ty-co-phan-bpo-mat-bao.html">V/v: Cấp giấy phép hoạt động dịch vụ việc làm của công ty Cổ phần BPO Mắt Bão</a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    <p style={{marginLeft: '0in'}}>Ngày 23 tháng 09 năm 2024, <strong>Sở Lao động - Thương binh và Xã hội Hồ Chí Minh</strong> đã chính thức cấp <strong>Giấy phép hoạt động Dịch vụ việc làm</strong> cho Công ty Cổ phần BPO Mắt Bão&nbsp;</p><p style={{marginLeft: '0in'}}>Công ty Cổ Phần BPO Mắt Bão bắt đầu hoạt động dịch vụ việc làm là ngày <strong>10/10/2024</strong></p>
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
                            <a className="guong" title="Công ty Cổ phần BPO Mắt Bão gửi lời cảm ơn sâu sắc nhất đến với nhân viên dự án Lotte Mart Bình Dương" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/cong-ty-co-phan-bpo-mat-bao-gui-loi-cam-on-sau-sac-nhat-den-voi-nhan-vien-du-an-lotte-mart-binh-duong.html">
                              <img src="img/posts/NB%20IC_Nh%c3%a2n%20vi%c3%aan%20t%e1%ba%adn%20t%c3%a2m.jpg" alt="Công ty Cổ phần BPO Mắt Bão gửi lời cảm ơn sâu sắc nhất đến với nhân viên dự án Lotte Mart Bình Dương" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Công ty Cổ phần BPO Mắt Bão gửi lời cảm ơn sâu sắc nhất đến với nhân viên dự án Lotte Mart Bình Dương" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/cong-ty-co-phan-bpo-mat-bao-gui-loi-cam-on-sau-sac-nhat-den-voi-nhan-vien-du-an-lotte-mart-binh-duong.html">Công ty Cổ phần BPO Mắt Bão gửi lời cảm ơn sâu sắc nhất đến với nhân viên dự án Lotte Mart Bình Dương</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p><span style={{backgroundColor: '#ffffff', color: '#050505'}}><strong>Tin Cậy - Tận Tâm - Tôn Trọng </strong></span>là ba tiêu chí hàng đầu mà Mắt Bão BPO luôn hướng đến Khách hàng, Quý Đối tác của mình. Mỗi một thành viên tại Mắt Bão BPO đều luôn mang lại sự tin cậy, tận tâm trong công việc và tôn trọng dành cho Khách hàng, Quý Đối tác.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="MBB - Tấm gương &quot;Người tốt, Việc tốt&quot; Tại Mắt Bão BPO" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb---tam-guong-_nguoi-tot%2c-viec-tot_-tai-mat-bao-bpo.html">
                              <img src="img/posts/Thi%e1%ba%bft%20k%e1%ba%bf%20ch%c6%b0a%20c%c3%b3%20t%c3%aan%20(1).png" alt="MBB - Tấm gương &quot;Người tốt, Việc tốt&quot; Tại Mắt Bão BPO" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="MBB - Tấm gương &quot;Người tốt, Việc tốt&quot; Tại Mắt Bão BPO" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb---tam-guong-_nguoi-tot%2c-viec-tot_-tai-mat-bao-bpo.html">MBB - Tấm gương "Người tốt, Việc tốt" Tại Mắt Bão BPO</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p><span style={{backgroundColor: '#ffffff', color: '#050505'}}><strong>Tin Cậy - Tận Tâm - Tôn Trọng</strong> là ba giá trị cốt lõi mà Mắt Bão BPO luôn đặt lên hàng đầu trong mối quan hệ với khách hàng và đối tác. Mỗi thành viên tại Mắt Bão BPO đều mang trong mình tinh thần trách nhiệm, sự tận tụy trong công việc, và lòng tôn trọng đối với những người mà chúng tôi phục vụ.</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="[MBB] - Khoá Đào tạo Quản trị cảm xúc và Kỹ năng bán hàng Telesales" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/%5bmbb%5d---khoa-dao-tao-quan-tri-cam-xuc-va-ky-nang-ban-hang-telesales.html">
                              <img src="img/posts/MBB_TTNB2024.jpg" alt="[MBB] - Khoá Đào tạo Quản trị cảm xúc và Kỹ năng bán hàng Telesales" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[MBB] - Khoá Đào tạo Quản trị cảm xúc và Kỹ năng bán hàng Telesales" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/%5bmbb%5d---khoa-dao-tao-quan-tri-cam-xuc-va-ky-nang-ban-hang-telesales.html">[MBB] - Khoá Đào tạo Quản trị cảm xúc và Kỹ năng bán hàng Telesales</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Tại Mắt Bão BPO, chúng tôi luôn đặt trọng tâm vào việc phát triển con người. Các khóa đào tạo Quản trị cảm xúc và Kỹ năng bán hàng Telesales không chỉ là nơi để nhân viên trẻ trang bị kiến thức, mà còn là cơ hội để khám phá bản thân, rèn luyện kỹ năng giao tiếp, thấu hiểu khách hàng và nâng cao hiệu quả làm việc.</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="[MBB] - Samkoo INC ghé thăm Công ty CP BPO Mắt Bão" href="tin-tuc/tin-tuc-noi-bo/%5bmbb%5d---samkoo-inc-ghe-tham-cong-ty-cp-bpo-mat-bao.html">
                              <img src="img/posts/NB_IC_MBBTRUNGTHU2024%20(5).jpg" alt="[MBB] - Samkoo INC ghé thăm Công ty CP BPO Mắt Bão" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[MBB] - Samkoo INC ghé thăm Công ty CP BPO Mắt Bão" href="tin-tuc/tin-tuc-noi-bo/%5bmbb%5d---samkoo-inc-ghe-tham-cong-ty-cp-bpo-mat-bao.html">[MBB] - Samkoo INC ghé thăm Công ty CP BPO Mắt Bão</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Vào ngày 13/09,&nbsp;Mr. Kim Hyung Kyu -&nbsp; Tổng Giám đốc của Samkoo INC đã có chuyến ghé thăm văn phòng của Mắt Bão BPO.&nbsp;</span></p>
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
                              <li className="paginate_button page-item previous disabled" id="example2_previous">
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tuc2679.html?page=1">
                                  <i className="fa fa-step-backward" /> 
                                </a>
                              </li>
                              <li className="paginate_button page-item previous disabled" id="example2_previous">
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tuc02e4.html?page=0">
                                  <i className="fa fa-backward" />
                                </a>
                              </li>
                              <li className="paginate_button page-item active ">
                                <a className="page-link" aria-controls="example2" data-dt-idx={2} tabIndex={0} href="tin-tuc2679.html?page=1">1</a>
                              </li>
                              <li className="paginate_button page-item  ">
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
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tuc4658.html?page=2">
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