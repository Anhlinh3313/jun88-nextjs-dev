import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";

import SwiperCore, { Autoplay } from "swiper";

import HomePC from "../app/project/homePC";
import HomeApp from "../app/project/homeApp";
import { useEffect, useState } from "react";

SwiperCore.use([Autoplay]);

export default function Home() {

  const [chromeWidth, setChromeWidth] = useState(0);
  let resizeWindow = () => {
    setChromeWidth(window.innerWidth);
  };
  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <div>
      <Head>
        <title>jun88.vin</title>
        <meta name="Thông tin tổng đài" content="Thông tin tổng đài" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>{chromeWidth > 1050 ? <HomePC /> : <HomeApp />} </>;
    </div>
  );
}
