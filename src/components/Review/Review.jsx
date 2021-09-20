import React from "react";

const Review = () => {
  return (
    <section className="review_part gray_bg section_padding" style={{direction: "ltr"}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="section_tittle">
              <p>بازخوردها</p>
              <h2>نظرات مشتریان</h2>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-lg-11">
            <div className="client_review_part owl-carousel">
              <div className="client_review_single media">
                <div className="client_img align-self-center">
                  <img src="/img/client/client_1.png" alt="" />
                </div>
                <div className="client_review_text media-body text-right">
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                  <h4>
                    Mosan Cameron, <span>Executive of fedex</span>
                  </h4>
                </div>
              </div>
              {/* <div className="client_review_single media">
                <div className="client_img align-self-center">
                  <img src="img/client/client_1.png " alt="" />
                </div>
                <div className="client_review_text media-body text-right">
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                  <h4>
                    Mosan Cameron, <span>Executive of fedex</span>
                  </h4>
                </div>
              </div> */}
              {/* <div className="client_review_single media">
                <div className="client_img align-self-center">
                  <img src="img/client/client_1.png" alt="" />
                </div>
                <div className="client_review_text media-body text-right">
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                  <h4>
                    Mosan Cameron, <span>Executive of fedex</span>
                  </h4>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
