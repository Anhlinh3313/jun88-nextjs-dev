import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";

import SwiperCore, { Autoplay } from "swiper";

import HomePC from "../app/project/homePC";
import HomeApp from "../app/project/homeApp";
import { useEffect, useState } from "react";

SwiperCore.use([Autoplay]);

export default function Home() {

  const [data, setData] = useState([]);

  const [chromeWidth, setChromeWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // const getLink = async () => {
  //   try {
  //     const res = await fetch(`https://api.jun88.vin/Link/GetLink`);
  //     const data = await res.json();
  //     console.log(data);
  //     setData(data)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getLink()
  // }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setChromeWidth(window.innerWidth);
    });
  }, [typeof window !== "undefined" && window]);

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
