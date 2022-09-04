import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Img50ty,
  ImgAgent,
  ImgAndroid,
  ImgCus,
  ImgGift,
  ImgHome,
  ImgIOS,
  ImgLogo,
  ImgQuaKhung,
  ImgQuaVip,
  ImgRinging,
  ImgSHT50,
  ImgSieuLiXi,
  ImgSKM,
  ImgSTTV,
  ImgTele,
  ImgThuongKhiThang,
} from "../app/@img";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);

export default function Home() {
  return (
    <div>
      <Head>
        <title>jun88.vin</title>
        <meta name="Thông tin tổng đài" content="Thông tin tổng đài" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="links-container">
        <div className="logo">
          <Image width={323} height={88} src={ImgLogo} alt="" />
        </div>

        <div className="col-lg-12 p-lg-0 m-lg-auto box-noti">
          <div className="notification">
            <div className="icon-noti">
              <Image src={ImgRinging} alt="" />
            </div>
            <marquee>
              Siêu khuyến mãi khủng chào mừng sự kiện{" "}
              <span className="searchText"> Jun88.com </span> trở thành đối tác
              hợp tác chính thức FIFA Word Cup QATAR 2022
            </marquee>
          </div>
          <div
            className="col-lg-12 col-xl-7 pl-lg-0 float-lg-left "
            id="screen-img"
          >
            <div className="box-promos">
              <Swiper
                direction={"vertical"}
                slidesPerView={3}
                initialSlide={1}
                centeredSlides={true}
                autoplay={true}
                reverseDirection={true}
                disableOnInteraction={true}
                className="swiper-container"
              >
                <SwiperSlide>
                  <Link href="https://www.jun82.com/promotions/39153765-76eb-4bef-8b0c-6a7bebb936cd">
                    <Image src={ImgQuaKhung} alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="https://www.jun82.com/promotions/66054bae-ddf4-406b-86fe-2eab5c98fabe">
                    <Image src={ImgThuongKhiThang} alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="https://www.jun82.com/promotions/10329565-5c62-48f0-a4c2-8b2479bd5c18">
                    <Image src={ImgSieuLiXi} alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="https://www.jun82.com/promotions">
                    <Image src={ImgQuaVip} alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="https://www.jun82.com/promotions">
                    <Image src={Img50ty} alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="https://www.jun82.com/promotions">
                    <Image src={ImgSHT50} alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="https://www.jun82.com/promotions">
                    <Image src={ImgSTTV} alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="https://www.jun82.com/promotions">
                    <Image src={ImgSKM} alt="" />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-lg-12 col-xl-5 pr-lg-0 float-lg-left p-0">
            <div id="domains-list">
              <div className="domains-list">
                <div className="link">
                  <Link href="https://www.jun8811.com">
                    <div className="col-8 p-0 float-left">
                      <div className="link-number">
                        <div className="yellow-circle">
                          <div className="black-circle">
                            <p className="test-p">1</p>
                          </div>
                        </div>
                      </div>
                      <div className="float-left ml-2 link-info">
                        <h5 className="d-inline text-white">100</h5>
                        <span className="text-white">ms</span>
                        <h5 className="d-inline text-white ml-3">
                          Link truy cập 1
                        </h5>
                      </div>
                    </div>
                  </Link>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <Link href="https://www.jun8822.com/">
                      <p id="btn-1" className="btn button" >
                        <span>Truy cập</span>
                      </p>
                    </Link>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="domains-list">
                <div className="link">
                  <Link href="https://www.jun8822.com/">
                  <div className="col-8 p-0 float-left">
                    <div className="link-number">
                      <div className="yellow-circle">
                        <div className="black-circle">
                          <p className="test-p">2</p>
                        </div>
                      </div>
                    </div>
                    <div className="float-left ml-2 link-info">
                      <h5 className="d-inline text-white">200</h5>
                      <span className="text-white">ms</span>
                      <h5 className="d-inline text-white ml-3">
                        Link truy cập 2
                      </h5>
                    </div>
                  </div>
                  </Link>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <Link href="https://www.jun8822.com/">
                      <p id="btn-1" className="btn button">
                        <span>Truy cập</span>
                      </p>
                    </Link>
                  </div>
                  <div className="clear-both"></div>  
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="domains-list">
                <div className="link">
                <Link href="https://www.jun8833.com/">
                  <div className="col-8 p-0 float-left">
                    <div className="link-number">
                      <div className="yellow-circle">
                        <div className="black-circle">
                          <p className="test-p">3</p>
                        </div>
                      </div>
                    </div>
                    <div className="float-left ml-2 link-info">
                      <h5 className="d-inline text-white">300</h5>
                      <span className="text-white">ms</span>
                      <h5 className="d-inline text-white ml-3">
                        Link truy cập 3
                      </h5>
                    </div>
                  </div>
                </Link>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <Link href="https://www.jun8833.com/">
                      <p id="btn-1" className="btn button">
                        <span>Truy cập</span>
                      </p>
                    </Link>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="domains-list">
                <div className="link" >
                  <Link href="https://www.jun8844.com/">
                    <div className="col-8 p-0 float-left">
                      <div className="link-number">
                        <div className="yellow-circle">
                          <div className="black-circle">
                            <p className="test-p">4</p>
                          </div>
                        </div>
                      </div>
                      <div className="float-left ml-2 link-info">
                        <h5 className="d-inline text-white">400</h5>
                        <span className="text-white">ms</span>
                        <h5 className="d-inline text-white ml-3">
                          Link truy cập 4
                        </h5>
                      </div>
                    </div>
                  </Link>

                  <div className="col-4 p-0 float-left text-right pr-2">
                    <Link href="https://www.jun8844.com/">
                      <p id="btn-1" className="btn button">
                        <span>Truy cập</span>
                      </p>
                    </Link>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="domains-list">
                <div className="link">
                  <Link href="https://www.jun8844.com/">
                    <div className="col-8 p-0 float-left">
                      <div className="link-number">
                        <div className="yellow-circle">
                          <div className="black-circle">
                            <p className="test-p">5</p>
                          </div>
                        </div>
                      </div>
                      <div className="float-left ml-2 link-info">
                        <h5 className="d-inline text-white">500</h5>
                        <span className="text-white">ms</span>
                        <h5 className="d-inline text-white ml-3">
                          Link truy cập 5
                        </h5>
                      </div>
                    </div>
                  </Link>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <Link href="https://www.jun8844.com/">
                      <p id="btn-1" className="btn button">
                        <span>Truy cập</span>
                      </p>
                    </Link>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="domains-list">
                <div className="link">
                <Link href="https://www.jun8866.com/">
                  <div className="col-8 p-0 float-left">
                    <div className="link-number">
                      <div className="yellow-circle">
                        <div className="black-circle">
                          <p className="test-p">6</p>
                        </div>
                      </div>
                    </div>
                    <div className="float-left ml-2 link-info">
                      <h5 className="d-inline text-white">600</h5>
                      <span className="text-white">ms</span>
                      <h5 className="d-inline text-white ml-3">
                        Link truy cập 6
                      </h5>
                    </div>
                  </div>
                </Link>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <Link href="https://www.jun8866.com/">
                      <p id="btn-1" className="btn button" >
                        <span>Truy cập</span>
                      </p>
                    </Link>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="menu-container">
          <div id="menu">
            <div id="menu-bg">
              <img src="https://jun88.vin/images/icons/menu-bg.png" alt="" />
            </div>
            <div className="btn-bg" id="android">
              <div className="item-menu-bg">
                <Link href="https://jun47.com/" target="_blank" className="icon" icon-name="android" >
                  <Image src={ImgAndroid} alt="android-icon" />
                </Link>
                <Link href="https://jun47.com/" target="_blank">
                    <p className="home-text-item">ANDROID</p>
                </Link>  
              </div>
            </div>
            <div className="btn-bg" id="agent">
              <div className="item-menu-bg">
                <Link href="https://jun.bet/" target="_blank" className="icon" icon-name="agent">
                  <Image src={ImgAgent} alt="android-icon" />
                </Link>
                <Link  href="https://jun.bet/" target="_blank" >
                <p className="home-text-item">ĐẠI LÝ</p>
                </Link>
              </div>
            </div>
            <div className="btn-bg" id="customer-service">
              <div className="item-menu-bg">
                <Link href="https://jun88.gofiber.dev/tawkto" target="_blank" className="icon" icon-name="customerService" >
                  <Image src={ImgCus} alt="android-icon" />
                </Link>
                  <Link href="https://jun88.gofiber.dev/tawkto" target="_blank">
                    <p className="home-text-item">CSKH</p>
                  </Link>
              </div>
            </div>
            <div className="btn-bg" id="gift">
              <div className="item-menu-bg">
                <Link href="https://www.jun85.com/promotions" target="_blank" className="icon" icon-name="gift" >
                  <Image src={ImgGift} alt="android-icon" />
                </Link>
                  <Link href="https://www.jun85.com/promotions" target="_blank">
                    <p className="home-text-item">KHUYẾN MÃI</p>
                  </Link>
              </div>
            </div>
            <div className="btn-bg" id="ios">
              <div className="item-menu-bg">
                <Link href="https://jun47.com/" target="_blank" className="icon" icon-name="ios" >
                  <Image src={ImgIOS} alt="android-icon" />
                </Link>
                  <Link href="https://jun47.com/" target="_blank" >
                    <p className="home-text-item">IOS</p>
                  </Link>
              </div>
            </div>
            <div id="btn-home">
              <div id="btn-home-items">
                <div id="home-icon">
                  <Link href="https://www.jun82.com/" target="_blank">
                    <Image src={ImgHome} alt="android-icon" />
                  </Link>
                </div>
                <div id="home-text">
                  <Link className="home-text-item" href="https://www.jun82.com/" target="_blank">
                    <p className="home-text-item">TRANG CHỦ</p>
                  </Link>
                </div>
                <div className="clear-both"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="cskh-icon">
          <a href="https://t.me/+w2UhveqvYOUwYWM1">
            <Image src={ImgTele} alt="cskh-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
