
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const defaultData = {
        email: "",
        fname: "",
        number: "",
        password: "",
        rpassword: ""
    }
    const [uData, setUdata] = useState(defaultData)
    console.log(uData);

    const adddata = (e)=> {
       const {name, value} = e.target;
       setUdata(()=> {
        return{
            ...uData,
            [name] : value
        }
       })
    }

    const sendData = async(e)=> {
      e.preventDefault();
      const { email,  fname, number, password, rpassword } = uData;

      const res = await fetch("register", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            email,  fname, number, password, rpassword
        })
      })

      const data = await res.json();
    //   console.log(data);

    if(res.status === 422 || !data){
    //    alert("no data")
    toast.warn("invalid details",{
        position: "top-right",
    })
    }else{
        // alert("data added successfully");
        toast.success("Data successfully added", {
            position: "top-right",
            autoClose: 5000,
        })
        setUdata({...uData, email: "", fname: "", number: "", password: "", rpassword: ""})
    }
    }
  return (
    <section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src='./blacklogoamazon.png' alt='amazon-logo'/>
            </div>

            <div className='sign_form'>
                <form method='POST'>
                    <h1>Sign Up</h1>
                    <div className='form_data'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email'
                         onChange={adddata}
                         value={uData.email}
                         />
                    </div>

                    <div className='form_data'>
                        <label htmlFor='fname'>Your Name</label>
                        <input type='text' name='fname' id='fname'
                         onChange={adddata}
                         value={uData.fname}
                         />
                    </div>

                    <div className='form_data'>
                        <label htmlFor='number'>Mobile</label>
                        <input type='text' name='number' id='number'
                         onChange={adddata}
                         value={uData.number}
                         />
                    </div>

                    <div className='form_data'>
                        <label htmlFor='password'>Password</label>
                        <input type='text' name='password' id='password'
                         onChange={adddata}
                         value={uData.password}
                         />
                    </div>

                    <div className='form_data'>
                        <label htmlFor='rpassword'>Repeat Password</label>
                        <input type='text' name='rpassword' id='rpassword'
                         onChange={adddata}
                         value={uData.rpassword}
                         />
                    </div>
                    <button className='signin_btn' onClick={sendData}>Sign In</button>
                    <div className='signin_info'>
                        <p>Already have an account ?</p>
                        <NavLink to="/login">Sign In</NavLink>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    </section>
  )
}

export default SignUp