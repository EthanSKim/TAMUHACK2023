import CalendarComponent from "@/Components/CalendarComponent";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function calendar() {
  const [dailyList, setDailyList] = useState([]);
  const [events, setEvents] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [load, setLoad] = useState(true);
  const today = new Date();
  const currentDate = "2023-01-29T00:00:00.000Z";
  const [selected, setSelected] = useState(today);
  // today.getDate() + "-" + today.getMonth() + 1 + "-" + today.getFullYear();

  // let data = [
  //   {
  //     task: "Amoxicillin 40mg",
  //     time: "Take twice per day",
  //     taken: 1,
  //     date: "1-29-2023",
  //   },
  //   {
  //     task: "Mucinex 150mg",
  //     time: "Take up to four times per day",
  //     taken: 0,
  //     date: "1-29-2023",
  //   },
  //   { task: "Drink Plenty of Water", time: "", taken: 1, date: "1-29-2023" },
  // ];

  const client = axios.create({
    baseURL: "http://localhost:3001",
  });

  useEffect(() => {
    loadEvents();
    if (events.length !== 0) {
      loadDailyList();
    }
    loadChecks();
  }, []);

  useEffect(() => {
    if (events.length !== 0) {
      loadDailyList();
    }
    // loadChecks();
  }, [load, events, selected]);

  useEffect(() => {
    loadChecks();
  }, [dailyList]);

  async function loadEvents() {
    let list = await client.get("/events").then((res) => {
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
    // console.log(list);
    setEvents(list);
    let formattedEvents = [];
    list.map((event, key) => {
      let day = new Date(event.date.substring(0,10));
      console.log("pre: " + day);
      day.setDate(day.getDate()+1);
      // console.log(event.date.substring(0,10));
      // console.log(event);
      console.log("post: " + day);

      formattedEvents.push({"id":key, "title":event.task, "start": day, "end": day});
    });
    setCalendarEvents(formattedEvents);
    console.log(formattedEvents);
  }

  function loadDailyList() {
    let dataList = [];
    for (var i = 0; i < events.length; ++i) {
      // console.log(events[i].date.substring(0, 10));
      // console.log(selected.toISOString().substring(0, 10));
      if (
        events[i].date.substring(0, 10) ===
        selected.toISOString().substring(0, 10)
      ) {
        dataList.push(events[i]);
      }
    }
    // console.log(dataList);
    setDailyList(dataList);
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

  const dateChange = (newDate) => {
    setSelected(newDate);
  };

  return (
    <div className="row m-0">
      <div className="col-8 my-3 px-3">
        <h1>Selected Date: {selected.toDateString()}</h1>
        <CalendarComponent selectedDate={selected} onDateChange={dateChange} events={calendarEvents} />
        {/* <CalendarComponent selectedDate={selected} onDateChange={dateChange} /> */}
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
