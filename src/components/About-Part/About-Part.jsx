import React from "react";

const AboutPart = () => {
  return (
    <section className="about_part">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-4 col-lg-5 offset-lg-1">
            <div className="about_img">
              <img src="img/about.png" alt="" />
            </div>
          </div>
          <div className="col-sm-8 col-lg-4">
            <div className="about_text">
              <h5>سوابق ما</h5>
              <h2>جایی که در آن غذاها طعمی خاص و خوشمزه دارند</h2>
              <h4>طعم لذیذترین غذاها را تنها در رستوران ما بچشید.</h4>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <a href="#" className="btn_3">
                مشاهده ی منو <img src="img/icon/left_2.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPart;
