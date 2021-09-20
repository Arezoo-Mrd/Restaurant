import React from "react";

const Dinner = () => {
  return (
    <div
      className="tab-pane fade single-member"
      id="Dinner"
      role="tabpanel"
      aria-labelledby="Dinner-tab"
    >
      <div className="row">
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img
              src="img/food_menu/single_food_4.png"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>پنکیک</h3>
              <p>مزه ی بهشتی گوشت را با ما تجربه کنید.</p>
              <h5>40 تومان</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="img/food_menu/single_food_5.png"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>خرچنگ دریایی</h3>
              <p>مزه ی بهشتی گوشت را با ما تجربه کنید.</p>
              <h5>40 تومان</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="img/food_menu/single_food_6.png"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>خوراک جوجه</h3>
              <p>مزه ی بهشتی گوشت را با ما تجربه کنید.</p>
              <h5>40 تومان</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img
              src="img/food_menu/single_food_1.png"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>خوراک گوشت</h3>
              <p>مزه ی بهشتی گوشت را با ما تجربه کنید.</p>
              <h5>40 تومان</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="img/food_menu/single_food_2.png"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>غذای دریایی</h3>
              <p>مزه ی بهشتی گوشت را با ما تجربه کنید.</p>
              <h5>40 تومان</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="img/food_menu/single_food_3.png"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>گوشت بریان</h3>
              <p>مزه ی بهشتی گوشت را با ما تجربه کنید.</p>
              <h5>40 تومان</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dinner;
