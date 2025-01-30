import classes from './Banner.module.css';
import Image from "next/image";

import banner1 from "@/assets/banners/Banner1.avif";
// import banner1 from "@/assets/banners/Banner2.avif";
// import banner1 from "@/assets/banners/Banner3.avif";
// import banner1 from "@/assets/banners/Banner4.avif";

import banLogo1 from "@/assets/bannerLogo/banLogo1.avif";

export default function Banner() {
  return (
    <div className={classes.BannerMain}>
       <Image src={banner1} alt="Banner"/>
       <div className={classes.Overlay}>
            <Image src={banLogo1} alt="BannerLogo"/>
            <p className={classes.sTitle}>Newly Added</p>
            <p className={classes.sDescription}>
            For 400 years, a loyal mystical guardian awaits the true heir to Vasco da Gama’s treasure. A frenzy begins when a girl from the bloodline finally arrives.
            </p>
            <button class="text-white font-bold py-2 px-4 rounded">
            Watch Now
            </button>
       </div>
    </div>
  )
}
