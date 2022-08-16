import axios from "axios";
import React, { useState } from "react";
import "../../src/styling/main.css";
import MapComp from "./MapComp";

const LandingPage = () => {
  const [ip, setIp] = useState("");
  const [post, setPost] = useState(null);

  const [display, setDisplay] = useState('')

  const handleDisplay = () =>{
    setDisplay('hidden')
  }

  const handleIp = (event) => {
    setIp(event.target.value);
  };

  const location = `${post?.location.city}, ${post?.location.country}, ${post?.location.region}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    // useEffect(()=>{

    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_gis3yR9EohK8h19EmSuDacmhmCWn0&ipAddress=${ip}`
      )
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
        // });
      });
  };

  return (
    <div>
      <main className="mainpage">
        <section className="section1">
          <h1 className="section1__h1-header">IP Address Tracker</h1>
          <form className="section__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="ipadd"
              id="ipadd"
              placeholder="Search for any IP address or domain"
              value={ip}
              onChange={handleIp}
            />
            <button type="submit" className="buttonSub" onClick={() => setDisplay('')}>
              <i className="fa-solid fa-2x fa-angle-right" ></i>
            </button>
          </form>
        </section>
        <section className="section2">
          <MapComp
            lat={post ? post.location.lat : 1}
            long={post ? post.location.lng : 1}
          />
        </section>

        <div className={`div-ipInfo ${display}`}>
        
           
          
          <ul className="infoList">
          <i class="fa-solid fa-xmark fa-3x" onClick={handleDisplay}></i>

            <li className="infoListItem">
              <h3 className="div__h3-header">ip address</h3>
              <p className="div__p-info">{post?.ip}</p>
            </li>
            <li className="infoListItem">
              <h3 className="div__h3-header">location</h3>
              <p className="div__p-info">{post ? location : ""}</p>
            </li>
            <li className="infoListItem">
              <h3 className="div__h3-header">timezone</h3>
              <p className="div__p-info">
                {post?.location.country}: {post?.location.timezone}
              </p>
            </li>
            <li className="infoListItem">
              <h3 className="div__h3-header">isp</h3>
              <p className="div__p-info div__pInfo">{post?.isp}</p>
            </li>
          </ul>
        </div>
        
      </main>
    </div>
  );
};

export default LandingPage;

// 192.234.34.123
