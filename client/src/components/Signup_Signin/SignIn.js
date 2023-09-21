import React, { useState } from 'react'
import "./Signup_Signin.css"
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const initialData = {
        email: "",
        password: ""
    }
    const [logData, setData] = useState(initialData)
    console.log(logData);

    const adddata = (e)=> {
        const {name, value} = e.target
        // setData({...logData, [e.target.name] : e.target.value})
        setData(()=> {
            return {
                ...logData, 
                    [name] : value
            }
        })
    }

    const sendData = async(e)=> {
        e.preventDefault();

        const {email, password} = logData;

       const res = await fetch("/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
       });

       const data = await res.json();
       console.log(data);

       if(res.status == 400 || !data){
        //    alert("no data")
        toast.warn("invalid details",{
            position: "top-right",
        })
        }else{
            
            toast.success("Login successfully", {
                position: "top-right",
            })
            setData({...logData, email: "", password: ""})
        }
    }
  return (
    <>
    <section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src='./blacklogoamazon.png' alt='amazon-logo'/>
            </div>

            <div className='sign_form'>
                <form method='POST'>
                    <h1>Sign In</h1>
                    <div className='form_data'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email' placeholder='info@gmail.com'
                         onChange={adddata}
                         value={logData.email}
                         />
                    </div>

                    <div className='form_data'>
                        <label htmlFor='password'>Password</label>
                        <input type='text' name='password' id='password' placeholder='At least 6 character'
                        onChange={adddata}
                        value={logData.password}
                        />
                    </div>
                    <button className='signin_btn' onClick={sendData}>Continue</button>
                    
                </form>
            </div>
            <div className='create_accountinfo'>
                <p>New To Amazon</p>
                <NavLink to="/register">
                <button>Create your amazon account</button>
                </NavLink>
            </div>
        </div>
        <ToastContainer />
    </section>
    </>
  )
}

export default SignIn