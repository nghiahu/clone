import "./userLogin.css"

export default function UserLogin() {
  return (
    <>
  <div className="ng-nhp">
    <div className="overlap">
      <img className="decor" src="./uploads/login/img-decor.svg" />
      <div className="content">
        <div className="login-form">
          <div className="title">
            <img className="logo" src="./uploads/login/img-logo.svg" />
            <div className="frame">
              <div className="text-wrapper">Đăng nhập</div>
              <p className="div">
                Cùng phát triển con đường sự nghiệp với Rikkei Jobs
              </p>
            </div>
          </div>
          <div className="div-2">
            <div className="div-2">
              <div className="input-field">
                <div className="div-3">
                  <div className="div-3">
                    <input
                      className="label"
                    //   htmlFor="input-2"
                      placeholder="Email"
                      type="email"
                    />
                    <div className="input">
                      <div className="content-2">
                        <img className="img" src="./uploads/login/img-sms.svg" />
                        <input
                          className="text"
                          placeholder="you@company.com"
                          type="email"
                          id="input-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="div-3">
                  <div className="div-3">
                    <div className="label-2">Mật khẩu</div>
                    <div className="input">
                      <div className="content-2">
                        <img className="img" src="./uploads/login/img-lock.svg" />
                        <div className="text-2">**********</div>
                      </div>
                      <img className="eye-slash" src="./uploads/login/img-eye-slash.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="remember">
              <div className="checkbox">
                <div className="checkbox-base-wrapper">
                  <div className="checkbox-base" />
                </div>
                <div className="text-3">Ghi nhớ đăng nhập</div>
              </div>
              <div className="text-wrapper-2">Quên mật khẩu?</div>
            </div>
          </div>
          <div className="button-group">
            <button className="button">
              <div className="button-base">
                <div className="text-4">Đăng nhập</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="IMG">
      <div className="overlap-group">
        <img className="rectangle" src="./uploads/login/img-dta05536-1.png" alt="" />
      </div>
    </div>
    <div className="sign-up">
      <p className="p">Bạn chưa có tài khoản?</p>
      <div className="text-wrapper-3">Đăng ký</div>
    </div>
  </div>
</>

  )
}
