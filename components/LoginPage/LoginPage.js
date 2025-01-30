import React, { useState } from 'react';
import QRCode from "@/assets/icons/QRcode.png";
import Image from "next/image";
import { RxPencil2 } from "react-icons/rx";
import { CgPassword} from "react-icons/cg";

export default function LoginPage() {
    const [phoneNo, setPhoneNo] = useState('');
    const [password, setPassword] = useState('');
    const [userValidMessage, setUserValidMessage] = useState('');

    const loginSubmit=async()=>{

        if(!phoneNo){
            setUserValidMessage('Field Required')
            return
        }
        else setUserValidMessage('');

        try{
            const reqs=  await fetch('api/users/signIn' ,{
                method:'POST',
                headers:{'Content-Type' : 'application/json'},
                body: JSON.stringify({phoneNo,password})
            })

            if(reqs.ok){
                console.log('API call response sucesss')
            }
            else{
                console.log('API call response Failuree')
            }
        }
        catch(error){
            console.log("API call :",error);
        }

    }

  return (
    <div className='login_box'>
        <h1 className='login_header'>Login or sign up to continue</h1>
        <p className='login_subheader'>Scan QR code or enter phone number to login</p>
        <div className='login_sub_box'>
          <div className='login_box-left'>
              <Image src={QRCode} alt="Demo" priority width={200} height={200}/>   
              <p className='login_subheader'>Use Camera App to Scan QR</p>           
          </div> 
          <div className='login_divider'>
          </div>
          <div className='login_box-right'>            
              <div className='login_textbox'>
                  
                  <div className='login_text'>                    
                      <span> <RxPencil2 /></span>
                      <input type="tel" id="UserId" placeholder='Phone Number'  
                      value={phoneNo} 
                      onChange={(e)=>setPhoneNo(e.target.value)}
                      maxLength={10}></input>
                      {(userValidMessage)&&<div className="login_errorMessage">{userValidMessage}</div>}
                      
                  </div>

                  <div className='login_text'>                
                      <span><CgPassword /></span>
                      <input type="password" placeholder='Password' id="password" 
                      value={password} 
                      onChange={(e)=>setPassword(e.target.value)}
                      maxLength={50}></input> 
                      {/* {(passwordValidMessage)&&<div className="login_errorMessage">{passwordValidMessage}</div>} */}
                      
                  </div>
              </div>
              <div className='buttonCon' >
              <button className='login_button' type='submit' 
              onClick={()=>loginSubmit(phoneNo)}
              >Get OTP</button>
              </div>
          </div>
          </div>
      </div>
  )
}
