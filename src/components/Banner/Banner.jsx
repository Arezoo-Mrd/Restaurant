import React from "react";

const Banner = () => {
  return (
    <section className="banner_part">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner_text">
              <div className="banner_text_iner text-right">
                <h5>کیفتی مثال زدنی</h5>
                <h1>لذیذترین غذاهای دنیا</h1>
                <p className="text-justify" style={{direction: "rtl"}}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <div className="banner_btn float-left">
                  <div className="banner_btn_iner">
                    <a href="#" className="btn_2">
                      رزرو <img src="img/icon/left_1.svg" alt="" />
                    </a>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                    className="popup-youtube video_popup"
                  >
                    <span>
                      <img src="img/icon/play.svg" alt="" />
                    </span>{" "}
                    ویدئوهای ما
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
