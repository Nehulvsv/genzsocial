import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">GENZSOCIAL</h3>
                    <span className="loginDesc">Connect with friend and the world around you on genzsocial.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="" placeholder='Email' className="loginInput" />
                        <input type="" placeholder='Password' className="loginInput" />
                        <button className='loginButton'>Log In</button>
                        <span className='loginForgot'>Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
