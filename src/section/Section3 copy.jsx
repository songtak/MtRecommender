import React from "react";

const Section3 = props => {
  const ascendingMountains = props.ascendingMountains;

  const handleClickItem = id => {
    props.setSelectedMountain(ascendingMountains[id]);
  };

  return (
    <div>
      <div className="contents_title">등산 후</div>
      <div className="contents_title" style={{ paddingTop: "16px" }}>
        {props.userName}이(가) 먹을 메뉴는?
      </div>
      <div className="contents_container">
        <div
          className="contents_3"
          onClick={() => {
            handleClickItem(0);
          }}
        >
          파전
        </div>
        <div
          className="contents_3"
          onClick={() => {
            handleClickItem(1);
          }}
        >
          묵사발
        </div>
        <div
          className="contents_3"
          onClick={() => {
            handleClickItem(2);
          }}
        >
          두부두루치기
        </div>
        <div
          className="contents_3"
          onClick={() => {
            handleClickItem(3);
          }}
        >
          굶어!
        </div>
        <div
          className="contents_3"
          onClick={() => {
            handleClickItem(4);
          }}
        >
          돼지갈비
        </div>
      </div>
    </div>
  );
};

export default Section3;
