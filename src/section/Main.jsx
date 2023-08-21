import React from "react";

const Main = (props) => {
  return (
    <>
      <div className="contents_title">산을... 좋아하는... 분덜...께</div>
      <div className="contents_title" style={{ paddingTop: "16px" }}>
        추천해 드립니다... 산을...
      </div>
      <div className="contents_title" style={{ paddingTop: "62px" }}>
        산림청이...선정한...100대 명산...
      </div>
      {/* <div style={{ paddingTop: "16px" }}>(* 틀딱된 기념) </div> */}
      <div
        className="start_button"
        onClick={() => {
          props.setIsStart(true);
        }}
      >
        가보자고
      </div>
    </>
  );
};

export default Main;
