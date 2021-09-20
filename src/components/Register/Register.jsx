import React, { useRef, useState,useEffect } from "react";
// import { Sugar } from "react-preloaders";
import SimpleReactValidator from "simple-react-validator";
import { NavLink, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../Services/UserService";
import { Helmet } from "react-helmet";

const Register = ({history}) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [,forceUpdate] = useState()
  const [loading,setLoading] = useState(false)

  // useEffect(() => {
  //   document.title="فروشگاه ری‌اکتی|عضویت"
  // }, [])

  const reset = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const validator= useRef(new SimpleReactValidator({
    messages:{
      required:"پرکردن این فیلد الزامی است",
      min:"کمتر از 5 کاراکتر نباید باشد",
      email:"فرمت ایمیل صحیح نیست"

    },
    element:message=><div className="validatoin-field">{message}</div>
  }))

  const handelSubmit = async (event) => {
    event.preventDefault();
    // alert('sumbit')
    if (password === confirmPassword) {
      const user = {
        fullname,
        email,
        password,
      };

      try {
       if(validator.current.allValid()){
         setLoading(true)
        const { status } = await registerUser(user);
        if (status === 201) {
          toast.success("کاربر با موفقیت ساخته شد", {
            position: "bottom-right",
            closeOnClick: true,
          });
          setLoading(false)
          history.push("/login")
          reset();
        }
       }else{
         validator.current.showMessages()
         forceUpdate(1)
       }
      } catch (error) {
        setLoading(false)
        toast.error("مشکلی پیش آمد", {
          position: "top-right",
          closeOnClick: true,
        });
      }
    } else {
      alert("رمز عبور شما اشتباه است");
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-html">
        <NavLink
          to="/login"
          className="tab"
          activeStyle={{ color: "#fff", borderColor: "#ff6426" }}
        >
          ورود به سایت
        </NavLink>
        <NavLink
          to="/register"
          className=" tab"
          activeStyle={{ color: "#fff", borderColor: "#ff6426" }}
        >
          عضویت
        </NavLink>
        <Helmet><title>عضویت در سایت</title></Helmet>
        {/* {loading ? <Sugar  time={0} color="#ff6426" customLoading={loading}/> :null} */}
        <div className="login-form">
          <form onSubmit={handelSubmit}>
            <div className="sign-up-htm">
              <div className="group">
                <label for="user" className="label">
                  نام و و نام خانوادگی *
                </label>
                <input
                  id="user"
                  name="fullname"
                  type="text"
                  className="input"
                  value={fullname}
                  onChange={(e) => {
                    setFullName(e.target.value)
                    validator.current.showMessageFor("fullname")
                  }}
                />
                {validator.current.message("fullname",fullname,"required|min:5")}
              </div>
              <div className="group">
                <label for="email" className="label">
                  آدرس ایمیل*
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="input"
                  value={email}
                  onChange={(e) =>{
                    setEmail(e.target.value)
                    validator.current.showMessageFor("email")
                  }}
                />
             {validator.current.message("email",email,"required|email")}
              </div>
              <div className="group">
                <label for="pass" className="label">
                  رمز عبور*
                </label>
                <input
                  id="pass"
                  name="password"
                  type="password"
                  className="input"
                  data-type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    validator.current.showMessageFor("password")
                  }}
                />
                {validator.current.message("password",password,"required|min:5")}
              </div>
              <div className="group">
                <label for="confirmpass" className="label">
                  تکرار رمز عبور*
                </label>
                <input
                  id="confirmpass"
                  name="confirmPassword"
                  type="password"
                  className="input"
                  data-type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    validator.current.showMessageFor("confirmPassword")
                  }}
                />
                {validator.current.message("confirmpass",confirmPassword,"required|min:5")}
              </div>
              <div className="group">
                <button type="submit" className="button">
                  ساخت حساب
                </button>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="/login">رفتن به حساب کاربری </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Register);
