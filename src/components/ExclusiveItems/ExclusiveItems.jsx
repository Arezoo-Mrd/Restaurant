import React from 'react'

const ExclusiveItems = () => {
    return ( 
        <section className="exclusive_item_part blog_item_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <p>غذاهای محبوب</p>
                <h2>غذای ویژه‌ی سرآشپز</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/food_item/food_item_1.png" alt="" />
                </div>
                <div className="single_blog_text">
                  <h3>همبرگر مخصوص</h3>
                  <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  </p>
                  <a href="#" className="btn_3">
                    بریم ببینیم <img src="img/icon/left_2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/food_item/food_item_2.png" alt="" />
                </div>
                <div className="single_blog_text">
                  <h3>نودل ویژه</h3>
                  <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  </p>
                  <a href="#" className="btn_3">
                    بریم ببینیم <img src="img/icon/left_2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/food_item/food_item_3.png" alt="" />
                </div>
                <div className="single_blog_text">
                  <h3>خوراک گوشت</h3>
                  <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  </p>
                  <a href="#" className="btn_3">
                    بریم ببینیم <img src="img/icon/left_2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/food_item/food_item_1.png" alt="" />
                </div>
                <div className="single_blog_text">
                  <h3>اسپاگتی</h3>
                  <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  </p>
                  <a href="#" className="btn_3">
                    بریم ببینیم <img src="img/icon/left_2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default ExclusiveItems;