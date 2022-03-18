import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

import { REACT_APP_API_URL, REACT_APP_API_URL_ENC_KEY } from "../AppStore";

const Result = props => {
  const [mountainDetail, setMountainDetail] = useState({});

  const getMountainDetain = async name => {
    try {
      const { data, status } = await axios
        .get(
          REACT_APP_API_URL +
            "?serviceKey=" +
            REACT_APP_API_URL_ENC_KEY +
            "&mntnNm=" +
            `${props.selectedMountain?.name.split("(")[0]}`
        )
        .then(res => res);
      if (status === 200) {
        matchedMountain(data.response.body.items.item);
      }
    } catch (e) {
      //   console.log("get error : ", e);
    }
  };

  const matchedMountain = data => {
    const matchData = data.filter(
      item => item.mntninfopoflc === props.selectedMountain?.adrress
    );
    setMountainDetail(matchData[0]);
  };
  useEffect(() => {
    getMountainDetain();
  }, []);

  return (
    <div>
      <div className="contents_title">
        {props.userName}에게 추천하는 100대 명산은!
      </div>
      <div
        style={{ paddingTop: "32px", paddingBottom: "8px", fontSize: "54px" }}
      >
        {props.selectedMountain?.name}
      </div>
      <div style={{ paddingBottom: "40px", fontSize: "18px" }}>
        {mountainDetail?.mntnsbttlinfo}
      </div>
      <div className="padding_bottom ">
        <span>높이 | </span>
        <span className="bold">{props.selectedMountain?.height}M</span>
      </div>
      <div className="padding_bottom">
        <span>주소 | </span>
        <span className="bold">{props.selectedMountain?.adrress}</span>
      </div>
      <div className="bold">100대 명산 선정이유</div>
      <div className="padding_bottom">{props.selectedMountain?.reason}</div>
      {/* <div>
        <img src={mountainDetail?.hndfmsmtnmapimageseq} alt="" />
      </div> */}
      {/* <div>{mountainDetail?.mntninfodtlinfocont}</div> */}
    </div>
  );
};

export default Result;
