import React from "react";
import Button from "elements/Button";
import NewsImage from "assets/images/news-image.png";

export default function News(props) {
  function showMostPicked() {}
  return (
    <section
      className="container-full mt-4 pt-4"
      style={{
        backgroundColor: "#e2f4f2",
        margin: "auto",
        height: 592,
        width: 1440,
      }}
    >
      <div className="row">
        <div className="col-6 align-self-center pr-5">
          <img
            src={NewsImage}
            style={{
              width: 492,
              marginLeft: 180,
              marginTop: 25,
            }}
            className="justify-content-center position-relative"
          ></img>
        </div>
        <div className="col-6 align-self-center pl-5">
          <p className="mt-5 mb-3 font-weight-bold text-gray-800">BERITA</p>
          <h1 className="h2 font-weight-bold mb-3 text-gray-900">
            Bagikan Disinfektan <br /> Untuk 1.202 Dusun
          </h1>
          <p className="mb-5 font-weight-normal text-gray-800 w-75">
            Membagikan larutan disinfektan kepada warga Sleman. Pembagian
            larutan disinfektan dikhususkan untuk 1.202 padukuhan
          </p>
          <Button
            className="btn px-5 py-2 mb-5"
            isPrimary
            onClick={showMostPicked}
          >
            Baca Selengkapnya
          </Button>
        </div>
      </div>
    </section>
  );
}
