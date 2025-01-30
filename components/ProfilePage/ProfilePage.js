import React from 'react';
import Image from "next/image";
import classes from './ProfilePage.module.css';
import mySpace from "@/assets/icons/my_space_login.webp";

export default function ProfilePage({flagHandler}) {
  return (
    <div className={classes.proContainer}>
      
    <Image src={mySpace} alt="Disney+" priority/>

  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  onClick={()=>flagHandler()}
  >
    Login
  </button>
    </div>
  )
}
