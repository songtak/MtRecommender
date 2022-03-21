import React, { useState } from "react";
import "./Web.css";
import "./Common.css";
import "./Mobile.css";

import { Main, Section1, Section2, Section3, Result } from "./section";
import _ from "lodash";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [userName, setUserName] = useState("");

  const [firstGroups, setFirstGroups] = useState([]);
  const [secondGroups, setSecondGroups] = useState([]);
  const [selectedMountain, setSelectedMountain] = useState({});

  const init = () => {
    setIsStart(false);
    setFirstGroups([]);
    setSecondGroups([]);
    setSelectedMountain({});
  };

  const handleClickInstagram = () => {
    window.open(
      "https://instagram.com/mt_gazzagaebalja?utm_medium=copy_link",
      "_blank"
    );
  };
  const handleClickOpenKakaoTalk = () => {
    window.open("https://open.kakao.com/o/gu0FxSHd", "_blank");
  };

  // console.log("까꿍~");
  console.log("이 로그는 1955년 영국에서부터 시작되었으며");
  console.log("가짜산악회에 가입하지 않을 시");
  console.log("꼭 배포 후 처음 본 에러가 발생한다고 한다...");

  return (
    <div>
      <div className="App">
        <div className="title" onClick={init}>
          <span className="button">가짜개발자 산악회</span>
        </div>
        <div className="body">
          {!isStart && <Main setIsStart={setIsStart} />}

          {isStart && _.isEmpty(firstGroups) && (
            <Section1
              setGroups={setFirstGroups}
              disabled={!_.isEmpty(firstGroups)}
              setUserName={setUserName}
              userName={userName}
            />
          )}
          {!_.isEmpty(firstGroups) && _.isEmpty(secondGroups) && (
            <Section2
              setGroups={setSecondGroups}
              ascendingMountains={firstGroups}
              userName={userName}
            />
          )}
          {!_.isEmpty(secondGroups) && _.isEmpty(selectedMountain) && (
            <Section3
              setSelectedMountain={setSelectedMountain}
              ascendingMountains={secondGroups}
              userName={userName}
            />
          )}
          {!_.isEmpty(selectedMountain) && (
            <Result selectedMountain={selectedMountain} userName={userName} />
          )}
        </div>
        {!isStart && (
          <div className="footer">
            <div style={{ fontSize: "8px", color: "teal" }}>
              아직 미완성이에요...
            </div>
            <div>
              <div
                className="insta_link_button"
                style={{ paddingBottom: "8px" }}
                onClick={handleClickInstagram}
              >
                <span>가짜산악회 인스타</span>
              </div>
              <div
                className="kakao_link_button"
                onClick={handleClickOpenKakaoTalk}
              >
                <span>가짜산악회 오픈카톡방</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
