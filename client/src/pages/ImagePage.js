import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountDown from "../components/CountDown";
import HistoryTable from "../components/HistoryTable";
import "../styles/PagesDesc.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ImagePage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  console.log(detail);
  const getOneFile = async () => {
    await axios
      .post("http://localhost:5000/getOneFile", { id: id })
      .then((res) => setDetail(res.data.result[0]))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getOneFile();
  }, []);
  console.log(id);
  // const data = [
  //   {
  //     id: 1,
  //     column1: "Tsion Moges",
  //     column2: "5.5 ETH",
  //     column3: "13 Hours ago",
  //   },
  //   {
  //     id: 2,
  //     column1: "Tselote Yonas",
  //     column2: "3.3 ETH",
  //     column3: "14 Hours ago",
  //   },
  //   {
  //     id: 3,
  //     column1: "Selina Yeshanew",
  //     column2: "2.5 ETH",
  //     column3: "16 hours ago",
  //   },
  //   {
  //     id: 4,
  //     column1: "Abebe Kebede",
  //     column2: "1.1 ETH",
  //     column3: "20 Hours ago",
  //   },
  //   {
  //     id: 5,
  //     column1: "Azalu Mekbeb",
  //     column2: "0.5 ETH",
  //     column3: "1 Day ago",
  //   },
  // ];
  if (!detail) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className='alien'>
      <div className='left' style={{ overflow: "hidden" }}>
        <img
          src={`http://localhost:5000/${detail.image.replace("//", "/")}`}
          alt=''
        />
      </div>
      <div className='right'>
        <h1>{detail.photoname}</h1>
        {/* <p id="title">Created on &nbsp; &nbsp; &nbsp; &nbsp; Items &nbsp; &nbsp; &nbsp;  
          Owners &nbsp; &nbsp; &nbsp; Floor Price&nbsp; &nbsp; &nbsp; Current Price &nbsp; &nbsp; &nbsp; Creator Earnings </p>
        <p id="value">mar 2023&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
         48 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0.1 Eth&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5 ETH &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5% </p> */}
        <div className='firstInline'>
          <span>Auction Date</span>
          <span>Photographer</span>
          <span>Description</span>
          <span>Floor Price</span>
          {/* <span>Current Price</span>
          <span>Creator Earnings</span> */}
        </div>
        <div>&nbsp;</div>
        <div className='secondInline'>
          <span>{detail.auctiondate}</span>
          <span>{detail.photographer}</span>
          <span>{detail.description}</span>
          <span>{detail.floorprice}</span>

          {/* <span>&nbsp;&nbsp;&nbsp;5%</span> */}
        </div>
        <div>&nbsp;</div>
        <h2>Auction Duration</h2>
        <CountDown countdownTimestampMs={1685032714000} /> {/* 1684724434 */}
        <div>&nbsp;</div>
        {/* <p>Church of Saint George</p>
        <h3>by George Steinmetz</h3> */}
        {/* <div>&nbsp;</div> */}
        <Link to='/ImagePageAddress'>
          <button className='address'>Address</button>
        </Link>
        {/* <div>&nbsp;</div> */}
        <div className='table'>
          {/* <h3 id='history'>Trading History</h3> */}
          {/* <HistoryTable data={data} /> */}
        </div>
        <div>&nbsp;</div>
        <Link to='/offer'>
          {/* <button className='makeOffer'>Make Offer</button> */}
        </Link>
      </div>
    </div>
  );
};
export default ImagePage;
