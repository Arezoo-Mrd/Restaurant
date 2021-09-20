import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
            <div className="single-footer-widget footer_1">
              <h4>درباره ما</h4>
              <p className="text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-md-2 col-lg-3">
            <div className="single-footer-widget footer_2">
              <h4>لینک های مهم</h4>
              <div className="contact_info">
                <ul className="text-center">
                  <li>
                    <a href="#"> غذاهای مخصوص</a>
                  </li>
                  <li>
                    <a href="#">حساب کاربری</a>
                  </li>
                  <li>
                    <a href="#">سبد خرید</a>
                  </li>
                  <li>
                    <a href="#">فروشگاه ما</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
            <div className="single-footer-widget footer_2">
              <h4>تماس با ما</h4>
              <div className="contact_info text-right">
                <p>
                  <span>آدرس :</span>Hath of it fly signs bear be one
                  blessed after{" "}
                </p>
                <p>
                  <span> تلفن :</span> +989131234567
                </p>
                <p>
                  <span> Email : </span>info@yoursite.com{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-md-4 col-lg-3">
            <div className="single-footer-widget footer_3 text-justify">
              <h4>خبرنامه</h4>
              <p>
                می‌خوای از لیست غذاهای روزانه‌ی ما مطلع بشی؟ عضو خبرنامه‌ی ما شو.
              </p>
              <form action="#">
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ایمیل..."
                      // onFocus="this.placeholder = ''"
                      // onBlur="this.placeholder = 'ایمیلتو وارد نکردیا.'"
                    />
                    <div className="input-group-append">
                      <button className="btn" type="button">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright_part_text">
          <div className="row">
            <div className="col-lg-8">
              <p className="footer-text m-0">
                {/* Copyright &copy;
                {document.write(new Date().getFullYear())} All rights reserved |
                This template is made with{" "} */}
                تمامی حقوق این سایت 
                <i aria-hidden="true"></i> متعلق به {" "}
                <a href="https://colorlib.com" target="_blank">
                  A.M
                </a>
                است
              </p>
            </div>
            <div className="col-lg-4">
              <div className="copyright_social_icon text-right">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="ti-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
