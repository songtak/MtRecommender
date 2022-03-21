import React from "react";

const Section2 = props => {
  const ascendingMountains = props.ascendingMountains;
  const handleClickItem = id => {
    switch (id) {
      case 1:
        level1();
        break;
      case 2:
        level2();
        break;
      case 3:
        level3();
        break;
      case 4:
        level4();
        break;
      default:
    }
  };

  const level1 = () => {
    props.setGroups(ascendingMountains.slice(0, 5));
  };
  const level2 = () => {
    props.setGroups(ascendingMountains.filter((item, i) => i % 2 === 0));
  };
  const level3 = () => {
    props.setGroups(ascendingMountains.filter((item, i) => i % 2 === 1));
  };
  const level4 = () => {
    props.setGroups(ascendingMountains.slice(-5));
  };

  return (
    <div>
      <div className="contents_title">{props.userName}!</div>
      <div className="contents_title" style={{ paddingTop: "16px" }}>
        나는 이런 서타일
      </div>
      <div className="contents_container">
        <div
          className="contents"
          onClick={() => {
            handleClickItem(3);
          }}
        >
          느려도 꾸준하게
        </div>
        <div
          className="contents"
          onClick={() => {
            handleClickItem(1);
          }}
        >
          복잡한 세상 편하게 살자!
        </div>
        <div
          className="contents"
          onClick={() => {
            handleClickItem(2);
          }}
        >
          산은 산이고 물은 물이로다...
        </div>
        <div
          className="contents"
          onClick={() => {
            handleClickItem(4);
          }}
        >
          놀땐 놀고, 할땐 하자
        </div>
      </div>
    </div>
  );
};

export default Section2;
