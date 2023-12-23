import user_icon from './Components/Assets/person.png'
import password_icon from './Components/Assets/password.png'
import email_icon from './Components/Assets/email.png'
import { useState } from "react";

const SignUp = () => {
    const [action,setAction] = useState("Sign Up")
    return ( <div>
        <div className="container">
            <div className="header">
               <div className="text">{action}</div> 
               <div className="underline"></div>
            </div>
                <div className="inputs">
                    {action==="Login"?<div></div>:<div className="input">
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder="Name" />    
                    </div>}
                    
                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder="Email id"/>    
                    </div>
                    <div className="input">
                        <img src={password_icon} alt=""/>
                        <input type="password" placeholder="Password"/>    
                    </div>
                </div>
                {action==="Sign up"?<div></div>:<div className="forgot-password">Lost Password <span>Click here!</span></div>}
                
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sign up</div>
                    <div className={action==="sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
                </div>
        </div>
    </div>

     );
}
 
export default SignUp;