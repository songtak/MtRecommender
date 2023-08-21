import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import {
  REACT_APP_API_URL,
  REACT_APP_API_URL_TOUR_INFO,
  REACT_APP_API_URL_PEAK_INFO,
  REACT_APP_API_URL_CULTURE_INFO,
  REACT_APP_API_URL_TRAFFIC_INFO,
  REACT_APP_API_URL_WILD_INFO,
  REACT_APP_API_URL_ENC_KEY,
} from "../AppStore";

const Result = (props) => {
  const [mountainDetail, setMountainDetail] = useState({});

  const [peak, setPeak] = useState();
  const [tour, setTour] = useState();
  const [culture, setCulture] = useState();
  const [traffic, setTraffic] = useState();
  const [wild, setWild] = useState();

  const [peakExpanded, setPeakExpanded] = useState();
  const [tourExpanded, setTourExpanded] = useState();
  const [cultureExpanded, setCultureExpanded] = useState();
  const [trafficExpanded, setTrafficExpanded] = useState();
  const [wildExpanded, setWildExpanded] = useState();

  const handlePeakChange = (panel) => (event, newExpanded) => {
    setPeakExpanded(newExpanded ? panel : false);
  };
  const handleTourChange = (panel) => (event, newExpanded) => {
    setTourExpanded(newExpanded ? panel : false);
  };
  const handleCultureChange = (panel) => (event, newExpanded) => {
    setCultureExpanded(newExpanded ? panel : false);
  };
  const handleTrafficChange = (panel) => (event, newExpanded) => {
    setTrafficExpanded(newExpanded ? panel : false);
  };
  const handleWildChange = (panel) => (event, newExpanded) => {
    setWildExpanded(newExpanded ? panel : false);
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const getMountainDetain = async (name) => {
    try {
      const { data, status } = await axios
        .get(
          REACT_APP_API_URL +
            "?serviceKey=" +
            REACT_APP_API_URL_ENC_KEY +
            "&mntnNm=" +
            `${props.selectedMountain?.name.split("(")[0]}`
        )
        .then((res) => res);
      if (status === 200) {
        matchedMountain(data.response.body.items.item);
      }
    } catch (e) {
      //   console.log("get error : ", e);
    }
  };

  /** 봉우리 정보 */
  const getMountainPeak = async () => {
    try {
      const { data, status } = await axios
        .get(
          REACT_APP_API_URL_PEAK_INFO +
            "?serviceKey=" +
            REACT_APP_API_URL_ENC_KEY +
            "&srchFrtrlNm=" +
            `${props.selectedMountain?.name.split("(")[0]}` +
            "&type=json" +
            "&numOfRows=100&pageNo=1"
          // `${props.selectedMountain?.name.split("(")[0]}`
        )
        .then((res) => res);
      if (status === 200) {
        setPeak(data.response.body.items.item);
      }
    } catch (e) {
      //   console.log("get error : ", e);
    }
  };

  /** 관광 정보 */
  const getMountainTour = async () => {
    try {
      const { data, status } = await axios
        .get(
          REACT_APP_API_URL_TOUR_INFO +
            "?serviceKey=" +
            REACT_APP_API_URL_ENC_KEY +
            "&srchFrtrlNm=" +
            `${props.selectedMountain?.name.split("(")[0]}` +
            "&type=json" +
            "&numOfRows=100&pageNo=1"
          // `${props.selectedMountain?.name.split("(")[0]}`
        )
        .then((res) => res);
      if (status === 200) {
        setTour(data.response.body.items.item);
      }
    } catch (e) {
      //   console.log("get error : ", e);
    }
  };

  /** 문화 정보 */
  const getMountainCulture = async () => {
    try {
      const { data, status } = await axios
        .get(
          REACT_APP_API_URL_CULTURE_INFO +
            "?serviceKey=" +
            REACT_APP_API_URL_ENC_KEY +
            "&srchFrtrlNm=" +
            `${props.selectedMountain?.name.split("(")[0]}` +
            "&type=json" +
            "&numOfRows=100&pageNo=1"
          // `${props.selectedMountain?.name.split("(")[0]}`
        )
        .then((res) => res);
      if (status === 200) {
        setCulture(data.response.body.items.item);
      }
    } catch (e) {
      //   console.log("get error : ", e);
    }
  };
  /** 교퉁 정보 */
  const getMountainTraffic = async () => {
    try {
      const { data, status } = await axios
        .get(
          REACT_APP_API_URL_TRAFFIC_INFO +
            "?serviceKey=" +
            REACT_APP_API_URL_ENC_KEY +
            "&srchFrtrlNm=" +
            `${props.selectedMountain?.name.split("(")[0]}` +
            "&type=json" +
            "&numOfRows=100&pageNo=1"
          // `${props.selectedMountain?.name.split("(")[0]}`
        )
        .then((res) => res);
      if (status === 200) {
        setTraffic(data.response.body.items.item);
      }
    } catch (e) {
      //   console.log("get error : ", e);
    }
  };
  /** 야생동식물 정보 */
  const getMountainWild = async () => {
    try {
      const { data, status } = await axios
        .get(
          REACT_APP_API_URL_WILD_INFO +
            "?serviceKey=" +
            REACT_APP_API_URL_ENC_KEY +
            "&srchFrtrlNm=" +
            `${props.selectedMountain?.name.split("(")[0]}` +
            "&type=json" +
            "&numOfRows=100&pageNo=1"
          // `${props.selectedMountain?.name.split("(")[0]}`
        )
        .then((res) => res);
      if (status === 200) {
        setWild(data.response.body.items.item);
      }
    } catch (e) {
      //   console.log("get error : ", e);
    }
  };

  // console.log("peak", peak);
  // console.log("tour", tour);
  // console.log("culture", culture);
  // console.log("traffic", traffic);
  // console.log("wild", wild);

  const matchedMountain = (data) => {
    const matchData = data.filter(
      (item) => item.mntninfopoflc === props.selectedMountain?.adrress
    );
    setMountainDetail(matchData[0]);
  };
  useEffect(() => {
    getMountainDetain();
    getMountainTour();
    getMountainPeak();
    getMountainCulture();
    getMountainTraffic();
    getMountainWild();
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
      <div className="bold padding_bottom" style={{ fontSize: "24px" }}>
        100대 명산 선정이유
      </div>
      <div className="padding_bottom">{props.selectedMountain?.reason}</div>
      <div className="bold" style={{ fontSize: "24px" }}>
        상세 정보
      </div>
      <div
        className="padding_bottom"
        style={{ fontSize: "14px", color: "GrayText" }}
      >
        <span>(* 상세 정보는 </span>
        <a style={{ fontWeight: "700" }} href="https://www.komount.or.kr/">
          한국등산트레킹지원센터
        </a>
        <span>에서 지원받고 있습니다.)</span>
      </div>

      <div className="padding_bottom ">
        {!_.isEmpty(peak) && (
          <>
            <div className="bold padding_bottom">봉우리</div>
            {peak.map((item, i) => (
              <Accordion
                expanded={peakExpanded === i}
                onChange={handlePeakChange(i)}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>{item.placeNm}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {!_.isEmpty(item.dscrtCn) ? item.dscrtCn : "내용 없음"}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        )}
      </div>
      <div className="padding_bottom">
        {!_.isEmpty(traffic) && (
          <>
            <div className="bold padding_bottom">교통</div>
            {traffic.map((item, i) => (
              <Accordion
                expanded={trafficExpanded === i}
                onChange={handleTrafficChange(i)}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>{item.placeNm}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {!_.isEmpty(item.dscrtCn) ? item.dscrtCn : "내용 없음"}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        )}
      </div>
      <div className="padding_bottom">
        {!_.isEmpty(tour) && (
          <>
            <div className="bold padding_bottom">관광</div>
            {tour.map((item, i) => (
              <Accordion
                expanded={tourExpanded === i}
                onChange={handleTourChange(i)}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>{item.placeNm}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {!_.isEmpty(item.dscrtCn) ? item.dscrtCn : "내용 없음"}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        )}
      </div>
      <div className="padding_bottom">
        {!_.isEmpty(culture) && (
          <>
            <div className="bold padding_bottom">문화</div>
            {culture.map((item, i) => (
              <Accordion
                expanded={cultureExpanded === i}
                onChange={handleCultureChange(i)}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>{item.plcNm}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {!_.isEmpty(item.explnCn) ? item.explnCn : "내용 없음"}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        )}
      </div>
      <div className="padding_bottom">
        {!_.isEmpty(wild) && (
          <>
            <div className="bold padding_bottom">야생동식물</div>
            {wild.map((item, i) => (
              <Accordion
                expanded={wildExpanded === i}
                onChange={handleWildChange(i)}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>{item.plcNm}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {!_.isEmpty(item.explnCn) ? item.explnCn : "내용 없음"}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        )}
      </div>
      <div>
        {!_.isEmpty(peak) &&
          !_.isEmpty(tour) &&
          !_.isEmpty(culture) &&
          !_.isEmpty(traffic) &&
          !_.isEmpty(wild) && <span>내용 없음</span>}
      </div>
      <div
        className="start_button"
        style={{ marginBottom: "32px" }}
        onClick={() => {
          window.location.reload();
        }}
      >
        처음으로
      </div>

      {/* <div>
        <img src={mountainDetail?.hndfmsmtnmapimageseq} alt="" />
      </div> */}
      {/* <div>{mountainDetail?.mntninfodtlinfocont}</div> */}
    </div>
  );
};

export default Result;
