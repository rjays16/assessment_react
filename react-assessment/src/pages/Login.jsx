import React from 'react';
import Background from "../img/background.jpeg"
function Login() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 text-black">
                    <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                        <form>
                            <h3 className="fw-normal mb-3 pb-3">Log in</h3>
                            <div className="form-outline mb-4">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control form-control-lg" />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control form-control-lg" required />
                            </div>
                            <div className="pt-1 mb-4">
                                <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
                            </div>
                            <p>Don't have an account? Register here!</p>
                        </form>
                    </div>
                </div>
                <div className="col-sm-6 px-0 d-none d-sm-block">
                    <img src={Background} alt="" className="w-100 vh-100" />
                </div>
            </div>
        </div>
    );
}

export default Login;