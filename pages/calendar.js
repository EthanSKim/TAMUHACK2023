import CalendarComponent from "@/Components/CalendarComponent";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function calendar() {
  const [dailyList, setDailyList] = useState([]);
  const [events, setEvents] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [load, setLoad] = useState(true);
  const today = new Date();
  const currentDate =
    today.getDate() + "-" + today.getMonth() + 1 + "-" + today.getFullYear();

  let data = [
    {
      task: "amoxicillin 40mg",
      time: "1 pill each morning",
      taken: 1,
      date: "1-29-2023",
    },
    {
      task: "medicine 150mg",
      time: "2 pills each evening",
      taken: 0,
      date: "1-29-2023",
    },
    { task: "drink water", time: "", taken: 1, date: "1-29-2023" },
  ];

  const client = axios.create({
    baseURL: "http://localhost:3001",
  });

  useEffect(() => {
    loadEvents();
    loadDailyList();
    loadChecks();
  }, []);

  useEffect(() => {
    loadEvents();
    loadDailyList();
    loadChecks();
  }, [load, currentDate]);

  function loadEvents() {
    let list = client.get("/events").then((res) => {
      let dataList = [];
      for (var i = 0; i < res.data.length; i++) {
        dataList.push({
          task: res.data[i].name,
          time: res.data[i].dosage,
          taken: res.data[i].taken,
          date: res.data[i].date,
        });
      }
      return dataList;
    });
    setEvents(data);
  }

  function loadDailyList() {
    let list = events.map((event) => {
      let dataList = [];
      if (event.date === currentDate) {
        dataList.push(event);
      }
      return dataList;
    });
    setDailyList(list);
    setLoad(false);
  }

  function loadChecks() {
    let checks = [];
    dailyList.map((day) => {
      checks.push(day.taken);
    });
    setCheckedState(checks);
  }

  function handleCheckChange(position) {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }

  return (
    <div className="row m-0">
      <div className="col-8 my-3 px-3">
        <CalendarComponent />
      </div>
      <div className="col-4">
        <div className="w-75 m-5">
          <h4 className="w-75">Daily Treatment</h4>
          <div className="d-flex-column align-items-center mt-3">
            {dailyList.map((item, key) => {
              return (
                <div className="my-1" key={key}>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={checkedState[key]}
                      onChange={() => {
                        handleCheckChange(key);
                      }}
                      value={key}></input>
                    <span className="fw-semibold ms-2">{item.task}</span>
                  </div>
                  <span className="ms-5">{item.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
