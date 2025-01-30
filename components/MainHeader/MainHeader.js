import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/icons/logo-d-plus.svg";
import classes from './MainHeader.module.css';

import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdOutlineMovie } from "react-icons/md";
import { MdSportsVolleyball } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
// import { GoHomeFill } from "react-icons/go";
// import { IoSearchSharp } from "react-icons/io5";
// import { FaUserCircle } from "react-icons/fa";

export default function MainHeader(){

    return <header className={classes.header}>
    <Link className={classes.logo} href="/"> 
        <Image src={logoImg} alt="Disney+" priority/>
    </Link>

    <nav className={classes.nav}>
        <ul>
            <li>
                <Link href="/MyPage"><span className={classes.nIcons}><FaRegUserCircle /></span>
                <span className={classes.nTitle}>My Space</span></Link>
            </li>
            <li>
                <Link href="/"><span className={classes.nIcons}><GoHome /></span>
                <span className={classes.nTitle}>Home</span></Link>
            </li>
            <li>
                <Link href="/mobile"><span className={classes.nIcons}><IoSearchOutline /></span>
                <span className={classes.nTitle}>Search</span></Link>
            </li>
            <li>
                <Link href="/shop"><span className={classes.nIcons}><PiTelevisionSimpleBold /></span>
                <span className={classes.nTitle}>TV</span></Link>
            </li>
            <li>
                <Link href="/about"><span className={classes.nIcons}><MdOutlineMovie /></span>
                <span className={classes.nTitle}>Movie</span></Link>
            </li>
            <li>
                <Link href="/about"><span className={classes.nIcons}><MdSportsVolleyball /></span>
                <span className={classes.nTitle}>Sports</span></Link>
            </li>
        </ul>
    </nav>

    </header>
}