import React, { useEffect } from "react";
import Aos from "aos";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import playStore from "../../resources/icons/play-store.svg";
import appStore from "../../resources/icons/app_store.svg";
import { startGetDataPage } from "../../redux/pageSlice/thunk";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { DemoModal } from "../../components/modal/DemoModal";
import { startShowModal } from "../../redux/modal/thunk";
import { TrailerModal } from "../../components/modal/TrailerModal";
import { Imagecompany } from "../../components/ui/Imagecompany";

export default function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.page);

  useEffect(() => {
    Aos.init({
      once: true,
    });
    dispatch(startGetDataPage());
  }, []);

  const openModal3D = () => {
    dispatch(startShowModal("petid360"));
  };

  const openModalTrailer = () => {
    dispatch(startShowModal("trailer"));
  };

  const options = {
    rewind: true,
    pagination: false,
    perPage: 1,
    type: "loop",
    autoplay: true,
    interval: 3000,
  };

  return (
    <>
      <Row className="banner-petid" id="inicio">
        <Col xxl={7} xl={7} lg={6} md={6} sm={12} className="banner-text">
          <div data-aos="fade-up" data-aos-duration="3000">
            <div>
              <Image src={data.logoBanner} />
            </div>
            <div className="disponibility">
              <p>{data.TitleBanner}</p>
              <Image
                onClick={() => (window.location.href = data.playStoreUrl)}
                className="googleplay-init cursor-pointer"
                width={"100%"}
                src={playStore}
              />
              <Image
                onClick={() => (window.location.href = data.AppStoreUrl)}
                className="appStore-init cursor-pointer"
                width={"10%"}
                src={appStore}
              />
            </div>
          </div>
        </Col>
        <Col xxl={5} xl={5} lg={6} md={6} sm={12} className="banner-image">
          <Image src={data.imageBanner} />
        </Col>
      </Row>
      <Row className={"second animate__animated animate__fadeInUp"}>
        <Splide options={options}>
          <SplideSlide>
            <Col className="m-auto px-3" sm={10}>
              <h3 data-aos="fade-up" data-aos-duration="1500">
                {data.TitleSlide}
              </h3>
              <p data-aos="fade-up" data-aos-duration="1500">
                {data.DescripcionSlide}
              </p>
            </Col>
          </SplideSlide>
        </Splide>
      </Row>
      <Row className={"thirty"} data-aos="fade-up" data-aos-duration="1500">
        <Col sm={12}>
          <h1 data-aos="fade-up" data-aos-duration="1500" className="title">
            {data.TitleTrace}
          </h1>
          <p data-aos="fade-up" data-aos-duration="1500" className="text-title">
            {data.DescriptionTrace}
          </p>
          <div>
            <Button
              data-aos="fade-up"
              data-aos-duration="1500"
              onClick={() => openModal3D()}
              className="w-25 d-block mx-auto my-4"
              variant="light"
            >
              Demo
            </Button>
            <Button
              data-aos="fade-up"
              data-aos-duration="1500"
              onClick={() => openModalTrailer()}
              className="w-25 d-block mx-auto mb-5"
              variant="light"
            >
              Video
            </Button>
          </div>
        </Col>
        <Row
          id="functions"
          data-aos="fade-up"
          data-aos-duration="1500"
          className={"tagticals"}
        >
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 3, order: 1 }}
            className="m-auto text-end"
          >
            <p>{data.TextLeftTrace}</p>
          </Col>
          <Col
            xs={{ span: 12, order: 3 }}
            md={{ span: 6, order: 2 }}
            className="m-auto"
          >
            <Image src={data.image1Trace} width="50%" />
          </Col>
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 3, order: 3 }}
            className="m-auto"
          >
            <p>{data.TextRightTrace}</p>
          </Col>
        </Row>
      </Row>
      <Row id="fourth-area" data-aos="fade-up" data-aos-duration="1500">
        <Col sm={3} xl={4}>
          <Image
            data-aos="fade-up"
            data-aos-duration="1500"
            className="perroPetid"
            src={data.functionlateral}
          />
        </Col>
        <Col sm={12} lg={9} xl={8} className="set-fourth-area">
          <h1 data-aos="fade-up" data-aos-duration="1500">
            ¿Cómo funciona {import.meta.env.VITE_REACT_APPLICATION_NAME}?
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="boxes-area"
          >
            <div className="box-functions">
              <div className="box">01</div>
              <h6>{data.TitleSection1}</h6>
              <p>{data.DescriptionSection1}</p>
            </div>
            <div className="box-functions mt-auto mb-5 pb-5">
              <div className="box">02</div>
              <h6>{data.TitleSection2}</h6>
              <p>{data.DescriptionSection2}</p>
            </div>
            <div className="box-functions">
              <div className="box">03</div>
              <h6>{data.TitleSection3}</h6>
              <p>{data.DescriptionSection3}</p>
            </div>
            <div className="box-functions mt-auto">
              <div className="box">04</div>
              <h6>{data.TitleSection4}</h6>
              <p>{data.DescriptionSection4}</p>
            </div>
            <div className="box-functions">
              <div className="box">05</div>
              <h6>{data.TitleSection5}</h6>
              <p>{data.DescriptionSection5}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row id="five-area" data-aos="fade-up" data-aos-duration="1500">
        <Col sm={12} lg={6} className="mb-5 pb-5">
          <h1 className="title">{data.TitleSecurity}</h1>
          <p className="text-title">{data.DescriptionSecurity}</p>
          <div className="quad">
            <div className="image-quad">
              <Imagecompany src="/index/expediente.webp" />
            </div>
            <div className="text-quad">
              <p className="title-quad">{data.TitleSecuritySection1}</p>
              <p className="description-quad">
                {data.DescriptionSecuritySection1}
              </p>
            </div>
          </div>
          <div className="quad">
            <div className="image-quad">
              <Imagecompany src="/index/estadisticas.webp" />
            </div>
            <div className="text-quad">
              <p className="title-quad">{data.TitleSecuritySection2}</p>
              <p className="description-quad">
                {data.DescriptionSecuritySection2}
              </p>
            </div>
          </div>
          <div className="quad">
            <div className="image-quad">
              <Imagecompany src="/index/biometrico.webp" />
            </div>
            <div className="text-quad">
              <p className="title-quad">{data.TitleSecuritySection3}</p>
              <p className="description-quad">
                {data.DescriptionSecuritySection3}
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} lg={6} className="image-conect">
          <Image width="80%" src={data.seguritylateral} />
        </Col>
      </Row>
      <Row
        data-aos="fade-up"
        data-aos-duration="1500"
        className="bg-banner-web"
        style={{
          backgroundImage: `url(${data.imagelateraldevice})`,
        }}
      >
        <Col sm={12} lg={6}>
          <Row className="text-center py-5">
            <Col sm={10} className="py-3">
              <h3 className="title-dowload">{data.localizated}</h3>
            </Col>
            <Col className="text-center py-3" sm={10}>
              <img
                width={150}
                className="mx-3 cursor-pointer"
                onClick={() => (window.location.href = data.playStoreUrl)}
                src={playStore}
              />
              <img
                width={135}
                className="mx-3 cursor-pointer"
                onClick={() => (window.location.href = data.AppStoreUrl)}
                src={appStore}
              />
            </Col>
            <Col sm={10} className="text-center py-3">
              <Image width={180} className="mx-3" src={data.deviceleft} />
              <Image width={180} className="mx-3" src={data.deviceright} />
            </Col>
          </Row>
        </Col>
        <Col sm={12} lg={6}></Col>
        <DemoModal />
        <TrailerModal />
      </Row>
    </>
  );
}
