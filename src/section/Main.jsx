import React from "react";

const Main = (props) => {
  console.log("이 로그는 1955년 영국에서부터 시작되었으며");
  console.log("가짜산악회에 가입하지 않을 시");
  console.log("꼭 배포 후 처음 본 에러가 발생한다고 한다...");
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
