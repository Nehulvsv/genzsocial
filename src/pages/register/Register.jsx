import './register.css'

export default function Register() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">GENZSOCIAL</h3>
                    <span className="loginDesc">Connect with friend and the world around you on genzsocial.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="" placeholder='User Name' className="loginInput" />
                        <input type="" placeholder='Email' className="loginInput" />
                        <input type="" placeholder='Password' className="loginInput" />
                        <input type="" placeholder='Password Again' className="loginInput" />
                        <button className='loginButton'>Sign Up</button>
                        {/* <span className='loginForgot'>Forgot Password?</span> */}
                        <button className="loginRegisterButton">Log Into Accuont</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
