import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import {withRouter} from 'react-router-dom'


import Footer from "../common/Footer";
import Header from "../common/Header";


const MainLayout = (props) => {
  const {pathname} = props.location
  // useEffect(() => {
  //   document.title="فروشگاه ری‌اکتی|خانه"
  // }, [])
  return (
    <Fragment>
       <Helmet><title>صفحه اصلی سایت</title></Helmet>
      <Header classes={pathname==="/archive" ? "bg-light" : null}/>
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default withRouter(MainLayout) ;
