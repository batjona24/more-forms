import React, {useState} from 'react';
const MoreForms = (props) => {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    return(
        <div>
            <form className='MoreForms'>
                <div>
                    <label>First name : </label>
                    <input type="text" onChange={(e) =>setFirstname(e.target.value)}></input>
                </div>
                {(firstname.length<2 && firstname!==0) ? <p>*First Name must be at least 2 characters</p> : null}
                <div>
                    <label>Last name : </label>
                    <input type="text" onChange={(e) =>setLastname(e.target.value)}></input>
                </div>
                {(lastname.length<2 && lastname!==0) ? <p>*Last Name must be at least 2 characters</p> : null}
                <div>
                    <label>Email : </label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                {(email.length<5 && lastname!==0) ? <p>*Email must be at least 5 characters</p> : null}
                <div>
                    <label>Password : </label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                {(password.length<8 && password!==0) ? <p>*Password must be at least 8 characters</p> : null}
                <div>
                    <label>Confirm Password : </label>
                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)}></input> 
                </div>
                {(confirmpassword !== password) ? <p>*Password must match</p> : null}
                {(confirmpassword.length<8 && confirmpassword!==0) ? <p>*Password must be at least 8 characters</p> : null}
            </form>
        </div>
    );
}
export default MoreForms;
