import React from 'react';

export default function RightCol() {
    return (
        <div className='right-col flex'>
            <h1>Login</h1>
            <div className="email-container">
                <h3>Email</h3>
                <input type="text" placeholder='john@example.com'></input>
            </div>
            <div className="pass-container">
                <h3>Password</h3>
                <input type="text" placeholder='At least 8 characters'></input>
            </div>
            <div className="terms-container flex">
                <input type="checkbox" />
                <p>By creating an account, you agree to the <a href="http://vladimir-baetel.com" target="blank">Terms & Conditions</a>.</p>
            </div>
            <button>Create an Account</button>
        </div>
    )
}
