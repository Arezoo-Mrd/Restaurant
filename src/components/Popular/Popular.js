import React from "react";
import Special from "./Special";
import Breakfast from "./Breakfast";
import Launch from "./Launch";
import Dinner from "./Dinner";
import Sneaks from "./Sneaks";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <section className="food_menu gray_bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="section_tittle">
              <p>غذاهای محبوب</p>
              <h2>خوشمزه ترین غذاها</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="nav nav-tabs food_menu_nav"
              id="myTab"
              role="tablist"
            >
              <a
                className="active"
                id="Special-tab"
                data-toggle="tab"
                href="#Special"
                role="tab"
                aria-controls="Special"
                aria-selected="false"
              >
                غذاهای ویژه <img src="img/icon/play.svg" alt="play" />
              </a>
              <a
                id="Breakfast-tab"
                data-toggle="tab"
                href="#Breakfast"
                role="tab"
                aria-controls="Breakfast"
                aria-selected="false"
              >
                صبحانه <img src="img/icon/play.svg" alt="play" />
              </a>
              <a
                id="Launch-tab"
                data-toggle="tab"
                href="#Launch"
                role="tab"
                aria-controls="Launch"
                aria-selected="false"
              >
                ناهار <img src="img/icon/play.svg" alt="play" />
              </a>
              <a
                id="Dinner-tab"
                data-toggle="tab"
                href="#Dinner"
                role="tab"
                aria-controls="Dinner"
                aria-selected="false"
              >
                شام <img src="img/icon/play.svg" alt="play" />{" "}
              </a>
              <a
                id="Sneaks-tab"
                data-toggle="tab"
                href="#Sneaks"
                role="tab"
                aria-controls="Sneaks"
                aria-selected="false"
              >
                فست فود <img src="img/icon/play.svg" alt="play" />
              </a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tab-content" id="myTabContent">
              <Special />
              <Breakfast />
              <Launch />
              <Dinner />
              <Sneaks />
            </div>
          </div>
          <div className="col-12 text-center ">
          <Link to="/archive" className="btn_3">
        مشاهده ی همه ی غذاها <img src="img/icon/left_2.svg" alt="" />
      </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
