import React from 'react'
import {auth,provider} from '../firebase'

export default function Login() {

    const signin = () => {
        provider.setCustomParameters({prompt:'select_account'});
        auth.signInWithPopup(provider).catch(alert);
    }

    const handleSubmit = event => {
        event.preventDefault();
        
}

    return (
        <div className="text-center" style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <main className="form-signin" style={{width: "350px"}}>
                <form onSubmit={handleSubmit}>
                    {/* <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                    {/* <div className="form-floating">
                    <input name= "floatingInput"type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input name="floatingPassword" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button> */}
                    <button  onClick={signin} style={{margin: "10px 0"}} className="w-100 btn btn-lg btn-light" type="submit" ><img alt="login" src="https://img.icons8.com/color/24/000000/google-logo.png"/>Login</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
        </div>
    )
}
