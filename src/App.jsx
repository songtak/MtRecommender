import React, { useState } from "react";
import "./App.css";
// import Mountain from "./Mountain";
import bac from "./bac.json";
import DatePicker from "@mui/lab/DatePicker";
import { TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import koLocale from "date-fns/locale/ko";
import moment from "moment";
import _ from "lodash";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const [tenGroups, setTenGroups] = useState([]);
  const [twentyGroups, setTwentyGroups] = useState([]);
  const [fiveProperties, setFiveProperties] = useState([]);

  /**
   * @description 생년월일 입력
   * @param {*} date
   */
  const handleClickSaveBirthDate = () => {
    if (_.isDate(selectedDate)) {
      reduceBirthDate(moment(selectedDate).format("YYMMDD"));
    } else {
      setSelectedDate(null);
    }
  };

  /**
   * @description 생년월일 합산
   */
  const reduceBirthDate = date => {
    const selectedDateArr = [...date];
    let result = 0;
    selectedDateArr.forEach(num => {
      result += Number(num);
    });
    setListOfLastNumber(result.toString().slice(-1));
  };

  /**
   * @description 취득
   * @param {*} lastNumber
   */
  const setListOfLastNumber = lastNumber => {
    const matchOfLastNumberArr = bac.filter(
      item => item.id.toString().slice(-1) === lastNumber
    );
    setTenGroups(matchOfLastNumberArr);
  };

  return (
    <div style={{ paddingTop: "400px" }} className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
        <DatePicker
          label="생년월일"
          value={selectedDate}
          onChange={newValue => {
            setSelectedDate(newValue);
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button
        onClick={handleClickSaveBirthDate}
        disabled={selectedDate === null}
      >
        저장
      </Button>
      <div>
        0. 입력받은 생년월일 합산된 값의 일의 자리 취득 (예: 930227, 23, 3)
      </div>
      <div>1. 일의 자리가 같은 것끼리 묶음 (그룹 10개/객체 10개)</div>
      <div>
        2. 1번에서 묶인 그룹을 두 개의 그룹으로 나눔(단, 나뉜 그룹의 평균 높이의
        차가 최소일 것) (그룹 20개 / 객체 5개)
      </div>
      <div>(각 그룹의 산높이 오름차순으로 정렬)</div>
    </div>
  );
}

export default App;
