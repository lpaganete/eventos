import React from 'react';


function Login() {
    return (

        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                </div>

                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>

            </form>
        </div>
    )
}

export default Login;