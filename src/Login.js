import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import {auth} from './firebase'

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    // usually har ek button ka onclick function inline hi likhna preferred rehta hai 
    // ~ Aditya Nair
    const signIn = e=> {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth=>{
            navigate('/')
            .catch(error=> alert(error.message))
        })
    }
    
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            console.log(auth);
            if(auth){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login '>
            <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png" alt="img" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)} />
                    <button className='login__signInButton' type='submit' onClick={(e)=>{
                        e.preventDefault();
                        setLoading(true);
                        auth.signInWithEmailAndPassword(email, password).then(auth=>{
                            navigate('/')
                            .catch(error=> alert(error.message))
                            setLoading(false);
                        })
                    }}>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's&nbsp;
                <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Conditions of Use</a>&nbsp;and&nbsp;<a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">Privacy Notice</a>
                .</p>
                <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
                
            </div>


        </div>
    )
}

export default Login