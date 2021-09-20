import React from "react";

const Reserve = () => {
  return (
    <section className="regervation_part section_padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="section_tittle">
              <p>سیستم رزرو</p>
              <h2>انتخاب یک میز</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="regervation_part_iner" dir="rtl">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="آدرس ایمیل *"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="پسوورد *"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <select className="form-control" id="Select">
                      <option value="1" selected>
                        تعداد *
                      </option>
                      <option value="2">یک نفره</option>
                      <option value="3">دو نفره</option>
                      <option value="4">سه نفره</option>
                      <option value="5">چهار نفره</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="pnone"
                      placeholder="شماره تماس *"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <div className="input-group date">
                      <input
                        id="datepicker"
                        type="date"
                        className="form-control"
                        placeholder="تاریخ *"
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <select className="form-control" id="Select2">
                      <option value="" selected>
                       ساعت *
                      </option>
                      <option value="1">8 AM TO 10AM</option>
                      <option value="1">10 AM TO 12PM</option>
                      <option value="1">12PM TO 2PM</option>
                      <option value="1">2PM TO 4PM</option>
                      <option value="1">4PM TO 6PM</option>
                      <option value="1">6PM TO 8PM</option>
                      <option value="1">4PM TO 10PM</option>
                      <option value="1">10PM TO 12PM</option>
                    </select>
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      className="form-control"
                      id="Textarea"
                      rows="4"
                      placeholder="یادداشت ها *"
                    ></textarea>
                  </div>
                </div>

                <div className="regerv_btn">
                  <a href="#" className="btn_4">
                    رزرو یک میز
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
