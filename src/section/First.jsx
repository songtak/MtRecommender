import React, { useState } from "react";
import kor_bac from "../kor_bac.json";

import DatePicker from "@mui/lab/DatePicker";
import { TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import koLocale from "date-fns/locale/ko";
import moment from "moment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import CalendarPicker from "@mui/lab/CalendarPicker";

import _ from "lodash";

const First = props => {
  const [selectedDate, setSelectedDate] = useState(null);

  // const maountains = bac;
  const maountains = kor_bac;

  const handleClickSaveBirthDate = () => {
    if (_.isDate(selectedDate)) {
      reduceBirthDate(moment(selectedDate).format("YYMMDD"));
    } else {
      setSelectedDate(null);
    }
  };

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
    const matchOfLastNumberArr = maountains.filter(
      item => item.id.toString().slice(-1) === lastNumber
    );
    setAscendingMountains(matchOfLastNumberArr);
  };

  const setAscendingMountains = matchOfLastNumberArr => {
    const ascendingMountainArr = matchOfLastNumberArr.sort(
      (a, b) => parseFloat(a.height) - parseFloat(b.height)
    );
    props.setGroups(ascendingMountainArr);
  };

  return (
    <div style={{ height: "400px" }}>
      <div>이름과 생년월일 입력 부탁드리는 부분이구여...</div>
      <div style={{ paddingTop: "30px" }}>
        <TextField
          label="이름"
          size="small"
          onChange={e => {
            props.setUserName(e.target.value);
          }}
        />
      </div>
      <div style={{ paddingTop: "30px" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
          <div style={{ backgroundColor: "white" }}>
            {/* <CalendarPicker
              date={selectedDate}
              onChange={newDate => setSelectedDate(newDate)}
            /> */}
            <DatePicker
              label="생년월일"
              value={selectedDate}
              onChange={newValue => {
                setSelectedDate(newValue);
              }}
              disabled={props.disabled}
              renderInput={params => <TextField {...params} size="small" />}
            />
          </div>
        </LocalizationProvider>
      </div>
      <div
        className={`start_button ${
          selectedDate?.toString() === "Invalid Date" ||
          !_.isDate(selectedDate) ||
          _.isEmpty(props.userName)
            ? "disable"
            : ""
        }`}
        onClick={handleClickSaveBirthDate}
      >
        <ArrowForwardIcon style={{ color: "white", paddingTop: "8px" }} />
      </div>
    </div>
  );
};

export default First;
