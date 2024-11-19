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
                            <a className="guong" title="[MBB] - KHÓA ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG 2024 ĐÃ QUAY TRỞ LẠI" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-khoa-dao-tao-hoi-nhap-nang-cao-ky-nang-2024-da-quay-tro-lai.html">
                              <img src="img/posts/gift-from-young-talents-program-2024-season-ii-1-1829.png" alt="[MBB] - KHÓA ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG 2024 ĐÃ QUAY TRỞ LẠI" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[MBB] - KHÓA ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG 2024 ĐÃ QUAY TRỞ LẠI" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-khoa-dao-tao-hoi-nhap-nang-cao-ky-nang-2024-da-quay-tro-lai.html">[MBB] - KHÓA ĐÀO TẠO HỘI NHẬP &amp; NÂNG CAO KỸ NĂNG 2024 ĐÃ QUAY TRỞ LẠI</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Khóa Đào tạo hội nhập &amp; Nâng cao kỹ năng 2024 đã chính thức quay chở lại
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="[MBB] YOUNG TALENT PROGRAM 2024 - SEASON II: “Awaken Potential - Conquer the Peak”" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-young-talent-program-2024-season-iiawaken-potential-conquer-the-peak.html">
                              <img src="img/posts/16-8999.jpg" alt="[MBB] YOUNG TALENT PROGRAM 2024 - SEASON II: “Awaken Potential - Conquer the Peak”" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[MBB] YOUNG TALENT PROGRAM 2024 - SEASON II: “Awaken Potential - Conquer the Peak”" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-young-talent-program-2024-season-iiawaken-potential-conquer-the-peak.html">[MBB] YOUNG TALENT PROGRAM 2024 - SEASON II:&nbsp;“Awaken Potential - Conquer the Peak”</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              4 tài năng trẻ đã sẵn sàng để bắt đầu trải nghiệm thông qua chương trình đào tạo tại Mắt Bão BPO và Company Tour để hiểu hơn về công ty, nơi các bạn hỏi và phát triển bản thân mình, giúp bạn có một bệ phóng phát triển trên con đường sự nghiệp trong tương lai
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="&quot;Accelerate to be Excellent&quot; - HÀNH TRÌNH ĐI TÌM MẢNH GHÉP" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/accelerate-to-be-excellent-hanh-trinh-di-tim-manh-ghep.html">
                              <img src="img/posts/pad0044-8906.jpg" alt="&quot;Accelerate to be Excellent&quot; - HÀNH TRÌNH ĐI TÌM MẢNH GHÉP" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="&quot;Accelerate to be Excellent&quot; - HÀNH TRÌNH ĐI TÌM MẢNH GHÉP" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/accelerate-to-be-excellent-hanh-trinh-di-tim-manh-ghep.html">"Accelerate to be Excellent" - HÀNH TRÌNH ĐI TÌM MẢNH GHÉP</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              Hành trình "Accelerate to be Excellent" diễn ra tại Phan Thiết - Bình Thuận vào ngày 18 - 20/5/2024, đã khép lại cùng những cung bậc cảm xúc đáng nhớ và đắt giá nhất trong suốt hành trình.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-50">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="MBB YOUNG TALENT PROGRAM 2024 SEASON II: Interview with Recruitment Board" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-young-talent-program-2024-season-ii-interview-with-recruitment-board.html">
                              <img src="img/posts/gift-from-young-talents-program-2024-season-ii-8665.png" alt="MBB YOUNG TALENT PROGRAM 2024 SEASON II: Interview with Recruitment Board" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="MBB YOUNG TALENT PROGRAM 2024 SEASON II: Interview with Recruitment Board" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-young-talent-program-2024-season-ii-interview-with-recruitment-board.html">MBB YOUNG TALENT PROGRAM 2024 SEASON II: Interview with Recruitment Board</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Chúc mừng các bạn đã hoàn thành tốt phần phỏng vấn của mình, mong rằng các bạn sẽ phát triển tốt hơn nữa trong tương lai.
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
                                  <a className="guong" title="THÔNG BÁO LỊCH NGHỈ TEAMBUILDING 2024 " href="tin-tuc/su-kien-trach-nhiem-xa-hoi/thong-bao-lich-nghi-teambuilding-2024.html">
                                    <img src="img/posts/nbicthongbaonghitbviet-3113.jpg" alt="THÔNG BÁO LỊCH NGHỈ TEAMBUILDING 2024 " />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a className="text-split text-split-2" title="THÔNG BÁO LỊCH NGHỈ TEAMBUILDING 2024 " href="tin-tuc/su-kien-trach-nhiem-xa-hoi/thong-bao-lich-nghi-teambuilding-2024.html">THÔNG BÁO LỊCH NGHỈ TEAMBUILDING 2024&nbsp;</a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    Công ty CP BPO Mắt Bão trân trọng thông báo đến quý Khách hàng, Đối tác thời gian nghỉ Teambuilding của công ty như sau:&nbsp;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="pic-news">
                                  <a className="guong" title="TIẾP NỐI CHUỖI CHƯƠNG TRÌNH “YOUNG TALENTS PROGRAM 2024 - SEASON II”" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/tiep-noi-chuoi-chuong-trinh-young-talents-program-2024-season-ii.html">
                                    <img src="img/posts/nbicroundii-6254.png" alt="TIẾP NỐI CHUỖI CHƯƠNG TRÌNH “YOUNG TALENTS PROGRAM 2024 - SEASON II”" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a className="text-split text-split-2" title="TIẾP NỐI CHUỖI CHƯƠNG TRÌNH “YOUNG TALENTS PROGRAM 2024 - SEASON II”" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/tiep-noi-chuoi-chuong-trinh-young-talents-program-2024-season-ii.html">TIẾP NỐI CHUỖI CHƯƠNG TRÌNH “YOUNG TALENTS PROGRAM 2024 - SEASON II”</a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    Ngày 10/05 vừa qua, các thí sinh đã trải qua các bài test mang các tiêu chí giúp BTC hiểu hơn về tính cách, tư duy logic và khả năng thích nghi, giải quyết vấn đề của các bạn thí sinh. Từ đó có thể dễ dàng đưa ra những lời khuyên, đánh giá các lĩnh vực phù hợp với thí sinh.
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
                            <a className="guong" title="MBB YOUNG TALENT PROGRAM 2024 SEASON II:  [CHECK MAIL] - Ting ting.. ting ting..." href="tin-tuc/tin-tuc-noi-bo/mbb-young-talent-program-2024-season-ii-check-mail-ting-ting-ting-ting.html">
                              <img src="img/posts/mail2-3726.png" alt="MBB YOUNG TALENT PROGRAM 2024 SEASON II:  [CHECK MAIL] - Ting ting.. ting ting..." />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="MBB YOUNG TALENT PROGRAM 2024 SEASON II:  [CHECK MAIL] - Ting ting.. ting ting..." href="tin-tuc/tin-tuc-noi-bo/mbb-young-talent-program-2024-season-ii-check-mail-ting-ting-ting-ting.html">MBB YOUNG TALENT PROGRAM 2024 SEASON II:&nbsp; [CHECK MAIL] - Ting ting.. ting ting...</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Những chiếc Mail của Young Talents Program 2024 - Season II đã đến tay các Ứng viên tiềm năng rồi đấy ạ
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="MBB YOUNG TALENT PROGRAM 2024 SEASON II: “Awaken Potential - Conquer the Peak” (ROUND 1)" href="tin-tuc/tin-tuc-noi-bo/mbb-young-talent-program-2024-season-iiawaken-potential-conquer-the-peak-round-1.html">
                              <img src="img/posts/phong-van-nhanh-cac-ung-vien-sau-khi-casting-vong-1-tai-mat-bao-bpo-3135.jpg" alt="MBB YOUNG TALENT PROGRAM 2024 SEASON II: “Awaken Potential - Conquer the Peak” (ROUND 1)" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="MBB YOUNG TALENT PROGRAM 2024 SEASON II: “Awaken Potential - Conquer the Peak” (ROUND 1)" href="tin-tuc/tin-tuc-noi-bo/mbb-young-talent-program-2024-season-iiawaken-potential-conquer-the-peak-round-1.html">MBB YOUNG TALENT PROGRAM 2024 SEASON II:&nbsp;“Awaken Potential - Conquer the Peak” (ROUND 1)</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              1/3 chặng đã đi qua, hãy cùng nhìn lại một vài khoảnh khắc cũng như cảm nghĩ của vài bạn thí sinh tham gia chương trình Young Talents Program 2024 - Season II nào
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="Officially Closed | Lời Cảm Ơn Từ MBB Young Talents Program 2023" href="tin-tuc/tin-tuc-noi-bo/officially-close-loi-cam-on-tu-mbb-young-talents-program-2023.html">
                              <img src="img/posts/00010-7546.jpg" alt="Officially Closed | Lời Cảm Ơn Từ MBB Young Talents Program 2023" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Officially Closed | Lời Cảm Ơn Từ MBB Young Talents Program 2023" href="tin-tuc/tin-tuc-noi-bo/officially-close-loi-cam-on-tu-mbb-young-talents-program-2023.html">Officially Closed | Lời Cảm Ơn Từ MBB Young Talents Program 2023</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Hơn 1 tháng đã trôi qua, thời gian không quá dài nhưng đủ để tạo nên sự thay đổi. Hơn 500 ứng viên tài năng của MBB YOUNG TALENTS PROGRAM 2023 đã trải qua được 4 vòng thi cam go nhất. 20 người được chọn vào phòng phỏng vấn cuối cùng hội đồng tuyển dụng. Hiện tại trong tay nhà Bão đã có danh sách 5 YOUNG TALENTS xuất sắc nhất và phù hợp với tiêu chí tuyển dụng của MBB nhất.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="Bật mí chặng đường các ứng viên sẽ trải qua tại Young Talent Program 2024 Season II" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/bat-mi-chang-duong-cac-ung-vien-se-trai-qua-tai-young-talent-program-2024-season-ii.html">
                              <img src="img/posts/mat-bao-bpoytp-2318.jpg" alt="Bật mí chặng đường các ứng viên sẽ trải qua tại Young Talent Program 2024 Season II" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Bật mí chặng đường các ứng viên sẽ trải qua tại Young Talent Program 2024 Season II" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/bat-mi-chang-duong-cac-ung-vien-se-trai-qua-tai-young-talent-program-2024-season-ii.html">Bật mí chặng đường các ứng viên sẽ trải qua tại Young Talent Program 2024 Season II</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Bật mí chặng đường các ứng viên sẽ trải qua tại Young Talent Program 2024 Season II
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
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tucaf4d.html?page=5">
                                  <i className="fa fa-backward" />
                                </a>
                              </li>
                              <li className="paginate_button page-item  ">
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
                              <li className="paginate_button page-item active ">
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
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tuc235c.html?page=7">
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