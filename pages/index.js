import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";

import SwiperCore, { Autoplay } from "swiper";

import HomePC from "../app/project/homePC";
import HomeApp from "../app/project/homeApp";
import { useEffect, useState } from "react";

SwiperCore.use([Autoplay]);

export default function Home() {
  return (
    <div>
      <Head>
        <title>jun88.vin</title>
        <meta name="Thông tin tổng đài" content="Thông tin tổng đài" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePC />
      {/* <>{chromeWidth > 1050 ? <HomePC /> : <HomeApp />} </>; */}
    </div>
  );
}
