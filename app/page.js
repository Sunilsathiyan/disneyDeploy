import Image from "next/image";
import Banner from '@/components/Banner/Banner';
import FileRows from '@/components/FileRows/FileRows';

import post1 from "@/assets/posters/poster_1/post-1.avif";
import post2 from "@/assets/posters/poster_1/post-2.webp";
import post3 from "@/assets/posters/poster_1/post-3.avif";
import post4 from "@/assets/posters/poster_1/post-4.avif";
import post5 from "@/assets/posters/poster_1/post-5.avif";
import post6 from "@/assets/posters/poster_1/post-6.avif";
import post7 from "@/assets/posters/poster_1/post-7.avif";

import post21 from "@/assets/posters/poster_2/post-1.webp";
import post22 from "@/assets/posters/poster_2/post-2.webp";
import post23 from "@/assets/posters/poster_2/post-3.webp";
import post24 from "@/assets/posters/poster_2/post-4.webp";
import post25 from "@/assets/posters/poster_2/post-5.webp";
import post26 from "@/assets/posters/poster_2/post-6.webp";
import post27 from "@/assets/posters/poster_2/post-7.webp";

import post31 from "@/assets/posters/poster_3/post-1.webp";
import post32 from "@/assets/posters/poster_3/post-2.webp";
import post33 from "@/assets/posters/poster_3/post-3.webp";
import post34 from "@/assets/posters/poster_3/post-4.webp";
import post35 from "@/assets/posters/poster_3/post-5.webp";
import post36 from "@/assets/posters/poster_3/post-6.avif";

import post41 from "@/assets/posters/poster_4/post-1.webp";
import post42 from "@/assets/posters/poster_4/post-2.webp";
import post43 from "@/assets/posters/poster_4/post-3.webp";
import post44 from "@/assets/posters/poster_4/post-4.webp";
import post45 from "@/assets/posters/poster_4/post-5.webp";
import post46 from "@/assets/posters/poster_4/post-6.webp";
import post47 from "@/assets/posters/poster_4/post-7.webp";

const postImages1=[
  {image : post1 , alt : "demo1"},
  {image : post2 , alt : "demo1"},
  {image : post3 , alt : "demo1"},
  {image : post4 , alt : "demo1"},
  {image : post5 , alt : "demo1"},
  {image : post6 , alt : "demo1"},
  {image : post7 , alt : "demo1"}
];

const postImages2=[
  {image : post21 , alt : "demo1"},
  {image : post22 , alt : "demo1"},
  {image : post23 , alt : "demo1"},
  {image : post24 , alt : "demo1"},
  {image : post25 , alt : "demo1"},
  {image : post26 , alt : "demo1"},
  {image : post27 , alt : "demo1"}
];

const postImages3=[
  {image : post31 , alt : "demo1"},
  {image : post32 , alt : "demo1"},
  {image : post33 , alt : "demo1"},
  {image : post34 , alt : "demo1"},
  {image : post35 , alt : "demo1"},
  {image : post36 , alt : "demo1"},
  {image : post27 , alt : "demo1"}
];

const postImages4=[
  {image : post41 , alt : "demo1"},
  {image : post42 , alt : "demo1"},
  {image : post43 , alt : "demo1"},
  {image : post44 , alt : "demo1"},
  {image : post45 , alt : "demo1"},
  {image : post46 , alt : "demo1"},
  {image : post47 , alt : "demo1"}
];

export default function Home() {
  return (
    <div className="disneyContainer">
      <main className="flex flex-col items-center sm:items-start">
        
        <Banner />
        <FileRows postImages={postImages1} postHeader='Latest Release'/>
        <FileRows postImages={postImages2} postHeader='Love Stories'/>
        <FileRows postImages={postImages3} postHeader='Popular Movies'/>
        <FileRows postImages={postImages4} postHeader='Hotstar Special'/>
      </main>
    </div>
  );
}
