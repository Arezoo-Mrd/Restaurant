import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
// import{Sugar} from "react-preloaders"
import { Link, NavLink, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../Services/UserService";
import { Helmet } from "react-helmet";

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [,forceUpdate]=useState("")
  const [loading,setLoading] = useState(false)
  const validator = useRef(new SimpleReactValidator({
    messages:{
      required:"پر کردن این فیلد الزامی است",
      min:"رمز عبور شما کمتراز 5 کاراکتر نیست",
      email:"فرمت ایمیل صحیح نیست"
    },
    element:message=><div className="validatoin-field">{message}</div>
  }))

  const handelSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    const reset=()=>{
      setEmail("")
      setPassword("")
    }
    try {
     if(validator.current.allValid()){
       setLoading(true)
      const { status,data } = await loginUser(user);
      if (status === 200) {
        toast.success("ورود با موفقیت انجام شد", {
          position: "bottom-right",
          closeOnClick: true,
        });
        localStorage.setItem("token",data.token)
        setLoading(false)
        history.push("/");
        reset();
      }
     }else{
       validator.current.showMessages()
        forceUpdate(1)
     }
    } catch (error) {
      console.log(error);
      setLoading(false)
      toast.error("مشکلی پیش آمد", {
        position: "top-right",
        closeOnClick: true,
      });
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
        <Helmet><title>ورود به سایت</title></Helmet>
     {/* <Sugar time={0} color="#111" customLoading={loading}/> */}
        <div className="login-form">
          <form onSubmit={handelSubmit}>
            <div className="sign-in-htm">
              <div className="group">
                <label for="email" className="label">
                  ایمیل*
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="input"
                  placeholder="ایمیل خود را وارد کنید"
                  value={email}
                  onChange={e=>{
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
                  type="password"
                  name="pass"
                  className="input"
                  value={password}
                  onChange={e=>{
                    setPassword(e.target.value)
                    validator.current.showMessageFor("password")
                  }}
                />
                {validator.current.message("password",password,"required|min:5")}
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" checked />
                <label for="check">
                  <span className="icon"></span> مرا به خاطر بسپار
                </label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="ورود" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <Link to="/forgot">رمز عبور خود را فراموش کرده‌اید؟</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
