import React, { Fragment } from "react";
import { Switch, Route , Link } from "react-router-dom";

import MainLayout from "../components/Layouts/MainLayout";
import Blog from "./Blog";
import Shop from "./Shop";
import ExclusiveItems from "../components/ExclusiveItems/ExclusiveItems";
import Video from "../components/Video/Video";
import AboutPart from "../components/About-Part/About-Part";
import Banner from "../components/Banner/Banner";
import Review from "../components/Review/Review";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Archive from "./Archive";

const MySite = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/register"
         component={Register}
        />
        <Route
          path="/archive"
         component={Archive}
        />
      <Route
        path="/"
        exact
        render={() => (
          <Fragment>
            <Banner />
            <ExclusiveItems />
            <AboutPart />
            <Video />
            <Shop />
            {/* <Review /> */}
            <Blog />
          </Fragment>
        )}
      />
      </Switch>
    </MainLayout>
  );
};

export default MySite;
