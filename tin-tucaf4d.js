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
                            <a className="guong" title="Mắt Bão BPO chức mừng thành viên có sinh nhật tháng 6 và thông báo bổ nhiệm nhân sự cấp quản lý mới" href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-chuc-mung-thanh-vien-co-sinh-nhat-thang-6--%26-thong-bao-bo-nhiem-nhan-su-cap-quan-ly-moi.html">
                              <img src="img/posts/z5575061155930_4d1cd0b3d68d247942ffef782dd49f16%20(1).jpg" alt="Mắt Bão BPO chức mừng thành viên có sinh nhật tháng 6 và thông báo bổ nhiệm nhân sự cấp quản lý mới" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Mắt Bão BPO chức mừng thành viên có sinh nhật tháng 6 và thông báo bổ nhiệm nhân sự cấp quản lý mới" href="tin-tuc/tin-tuc-noi-bo/mat-bao-bpo-chuc-mung-thanh-vien-co-sinh-nhat-thang-6--%26-thong-bao-bo-nhiem-nhan-su-cap-quan-ly-moi.html">Mắt Bão BPO chức mừng thành viên có sinh nhật tháng 6 và thông báo bổ nhiệm nhân sự cấp quản lý mới</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Đại gia đình Mắt Bão cùng tổ chức sinh nhật cho thành viên có ngày sinh vào tháng 6&nbsp;và thông báo bổ nhiệm nhân sự cấp quản lý mới</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="Đánh mất khách hàng đồng nghĩa với việc đánh mất doanh thu và lợi nhuận" href="tin-tuc/tin-tuc-nganh/danh-mat-khach-hang-dong-nghia-voi-viec-danh-mat-doanh-thu-va-loi-nhuan.html">
                              <img src="img/posts/C%c3%94NG%20TY%20C%e1%bb%94%20PH%e1%ba%a6N%20BPO%20M%e1%ba%aeT%20B%c3%83O%20(6).jpg" alt="Đánh mất khách hàng đồng nghĩa với việc đánh mất doanh thu và lợi nhuận" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Đánh mất khách hàng đồng nghĩa với việc đánh mất doanh thu và lợi nhuận" href="tin-tuc/tin-tuc-nganh/danh-mat-khach-hang-dong-nghia-voi-viec-danh-mat-doanh-thu-va-loi-nhuan.html">Đánh mất khách hàng đồng nghĩa với việc đánh mất doanh thu và lợi nhuận</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              <p><span style={{backgroundColor: 'transparent', color: '#212529'}}>Mục đích chính của dịch vụ Contact Center là cung cấp cho khách hàng hỗ trợ kỹ thuật, dịch vụ khách hàng và hỗ trợ bán hàng nhằm tối ưu hóa trải nghiệm khách hàng nhằm tăng doanh thu hiệu quả nhất.</span></p><p>&nbsp;</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="Doanh nghiệp của bạn có thể mất rất nhiều tiền do &quot;Dịch vụ Khách hàng không tốt?&quot;" href="tin-tuc/tin-tuc-nganh/doanh-nghiep-cua-ban-tieu-ton-bao-nhieu-tien---do-_dich-vu-khach-hang-khong-tot_.html">
                              <img src="img/posts/C%c3%94NG%20TY%20C%e1%bb%94%20PH%e1%ba%a6N%20BPO%20M%e1%ba%aeT%20B%c3%83O%20(4).jpg" alt="Doanh nghiệp của bạn có thể mất rất nhiều tiền do &quot;Dịch vụ Khách hàng không tốt?&quot;" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="Doanh nghiệp của bạn có thể mất rất nhiều tiền do &quot;Dịch vụ Khách hàng không tốt?&quot;" href="tin-tuc/tin-tuc-nganh/doanh-nghiep-cua-ban-tieu-ton-bao-nhieu-tien---do-_dich-vu-khach-hang-khong-tot_.html">Doanh nghiệp của bạn có thể mất rất nhiều tiền do&nbsp;"Dịch vụ Khách hàng không tốt?"</a>
                            </h3>
                            <div className="desc-news text-home text-split text-split-3">
                              <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Doanh nghiệp của bạn có thể mất rất nhiều tiền do&nbsp;<strong>"Dịch vụ Khách hàng không tốt."</strong> Mặc dù con số cụ thể có thể khác nhau tùy thuộc vào ngành nghề, quy mô doanh nghiệp, và nhiều yếu tố và lĩnh vực khác nhau.</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-50">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title=" 5 Yếu tố xây dựng dịch vụ Payroll (Quản lý tiền lương)" href="tin-tuc/kien-thuc-goc-nhin/-5-yeu-to-xay-dung-dich-vu-payroll-(quan-ly-tien-luong)-.html">
                              <img src="img/posts/M%e1%ba%aeT%20B%c3%83O%20BPO%20(6).jpg" alt=" 5 Yếu tố xây dựng dịch vụ Payroll (Quản lý tiền lương)" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title=" 5 Yếu tố xây dựng dịch vụ Payroll (Quản lý tiền lương)" href="tin-tuc/kien-thuc-goc-nhin/-5-yeu-to-xay-dung-dich-vu-payroll-(quan-ly-tien-luong)-.html"> 5 Yếu tố xây dựng dịch vụ Payroll (Quản lý tiền lương)</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Xây dựng một dịch vụ Payroll (Quản lý tiền lương) hiệu quả là một quá trình phức tạp, đòi hỏi sự chú ý đến nhiều yếu tố để đảm bảo sự chính xác, tuân thủ pháp lý và sự hài lòng của khách hàng. Dưới đây là các yếu tố quan trọng cần cần có của dịch vụ này.</span></p>
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
                                  <a className="guong" title="Điều khách hàng mong muốn từ Contact Center là gì?" href="tin-tuc/tin-tuc-nganh/dieu-khach-hang-mong-muon-tu-contact-center-la-gi.html">
                                    <img src="img/posts/M%e1%ba%aeT%20B%c3%83O%20BPO%20(5).png" alt="Điều khách hàng mong muốn từ Contact Center là gì?" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a className="text-split text-split-2" title="Điều khách hàng mong muốn từ Contact Center là gì?" href="tin-tuc/tin-tuc-nganh/dieu-khach-hang-mong-muon-tu-contact-center-la-gi.html">Điều khách hàng mong muốn từ Contact Center là gì?</a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Khách hàng thường mong đợi&nbsp; điều gì từ Contact Center để có được trải nghiệm dịch vụ khách hàng tốt nhất?&nbsp;</span></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="pic-news">
                                  <a className="guong" title=" Fact về cuộc gọi đầy “bất ổn” - Chuyện không của riêng ai ở ngành Contact Center" href="tin-tuc/tin-tuc-nganh/-fact-ve-cuoc-goi-day-%e2%80%9cbat-on%e2%80%9d---chuyen-khong-cua-rieng-ai-o-nganh-contact-center.html">
                                    <img src="img/posts/M%e1%ba%aeT%20B%c3%83O%20BPO%20(2).jpg" alt=" Fact về cuộc gọi đầy “bất ổn” - Chuyện không của riêng ai ở ngành Contact Center" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="info-news">
                                  <h3 className="name-news name-main">
                                    <a className="text-split text-split-2" title=" Fact về cuộc gọi đầy “bất ổn” - Chuyện không của riêng ai ở ngành Contact Center" href="tin-tuc/tin-tuc-nganh/-fact-ve-cuoc-goi-day-%e2%80%9cbat-on%e2%80%9d---chuyen-khong-cua-rieng-ai-o-nganh-contact-center.html"> Fact về cuộc gọi đầy “bất ổn” - Chuyện không của riêng ai ở ngành Contact Center</a>
                                  </h3>
                                  <div className="desc-news text-split text-split-3">
                                    <p><span style={{backgroundColor: 'transparent', color: '#000000'}}>Bạn hãy cho Ad biết là một Call Agent, bạn đã bao giờ gặp cuộc gọi “bất ổn” này chưa? Hãy kể câu chuyện của bạn cho Ad nghe nhé!</span></p>
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
                            <a className="guong" title="[MBB] - Chúc mừng sinh nhật các thành viên của Mắt Bão BPO" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-chuc-mung-sinh-nhat-cac-thanh-vien-cua-mat-bao-bpo.html">
                              <img src="img/posts/thiet-ke-chua-co-ten-1-3271.jpg" alt="[MBB] - Chúc mừng sinh nhật các thành viên của Mắt Bão BPO" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[MBB] - Chúc mừng sinh nhật các thành viên của Mắt Bão BPO" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-chuc-mung-sinh-nhat-cac-thanh-vien-cua-mat-bao-bpo.html">[MBB] - Chúc mừng sinh nhật các thành viên của Mắt Bão BPO</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Mắt Bão BPO chúc mừng các thành viên có sinh nhật trong tháng 4 và tháng 5
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="[MBB] - Workshop: &quot;Chia sẻ định hướng nghề nghiệp&quot;" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-workshop-chia-se-dinh-huong-nghe-nghiep.html">
                              <img src="img/posts/20240527050256158ios-2186.jpg" alt="[MBB] - Workshop: &quot;Chia sẻ định hướng nghề nghiệp&quot;" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[MBB] - Workshop: &quot;Chia sẻ định hướng nghề nghiệp&quot;" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-workshop-chia-se-dinh-huong-nghe-nghiep.html">[MBB] - Workshop: "Chia sẻ định hướng nghề nghiệp"</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              <p>Ngày 27/05 Ban Lãnh Đạo đã có những chỉa sẻ đầy ú nghĩa về các chính sách cũng như các phòng ban quan trọng của Mắt Bão BPO đến với các bạn "Young Talents Program 2024 - II"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title="[MBB] - TeamBuilding Mắt Bão BPO 2024" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-teambuilding-mat-bao-bpo-2024.html">
                              <img src="img/posts/pad0792-5547.jpg" alt="[MBB] - TeamBuilding Mắt Bão BPO 2024" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title="[MBB] - TeamBuilding Mắt Bão BPO 2024" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-teambuilding-mat-bao-bpo-2024.html">[MBB] - TeamBuilding Mắt Bão BPO 2024</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Các chiến binh Mắt Bão BPO đều đã chiến thắng trong thử thách lần này - chiến thắng nỗi sợ của chính mình để cùng vươn lên trong tập thể. Và chính nhờ những điều này đã góp phần cho đoạn recap hành trình " Accelerate to be Excellent" trở nên đặc biệt hơn
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="news">
                          <div className="pic-news">
                            <a className="guong" title=" [MBB] - KẾT THÚC KHÓA II - ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-ket-thuc-khoa-ii-dao-tao-hoi-nhap-nang-cao-ky-nang.html">
                              <img src="img/posts/mbbttnb2024-3810.jpg" alt=" [MBB] - KẾT THÚC KHÓA II - ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG" />
                            </a>
                          </div>
                          <div className="info-news">
                            <h3 className="name-news name-main">
                              <a className="text-split text-split-2" title=" [MBB] - KẾT THÚC KHÓA II - ĐÀO TẠO HỘI NHẬP & NÂNG CAO KỸ NĂNG" href="tin-tuc/su-kien-trach-nhiem-xa-hoi/mbb-ket-thuc-khoa-ii-dao-tao-hoi-nhap-nang-cao-ky-nang.html"> [MBB] - KẾT THÚC KHÓA II - ĐÀO TẠO HỘI NHẬP &amp; NÂNG CAO KỸ NĂNG</a>
                            </h3>
                            <div className="desc-news text-split text-split-2">
                              Khóa Đào tạo hội nhập &amp; Nâng cao kỹ năng giúp các bạn ứng viên trải nghiệm những kiến thức bổ ích, và tham gia các hoạt động vô cùng thú vị đến từ BTC
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
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tucfdb0.html?page=4">
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
                              <li className="paginate_button page-item active ">
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
                                <a aria-controls data-dt-idx tabIndex className="page-link" href="tin-tucc575.html?page=6">
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