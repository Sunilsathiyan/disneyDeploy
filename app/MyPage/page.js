"use client";

import React, { useState } from 'react';
import LoginPage from '@/components/LoginPage/LoginPage';
import ProfilePage from '@/components/ProfilePage/ProfilePage'; 
import Image from "next/image";

export default  function MyPage(){

    const [profileFlag, setProfileFlag] = useState(true);

    const flagHandler=()=>{
        console.log('BUTTON CLICKED');
        return setProfileFlag(false)
    }

  return <main className='items-center sm:items-start'>
    <div className="MyContainer">
      {(profileFlag) ? <ProfilePage  flagHandler={flagHandler}/> : <LoginPage />}
      </div>
</main>

}