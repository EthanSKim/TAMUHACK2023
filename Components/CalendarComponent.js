import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "../dummydata/events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dynamic from 'next/dynamic';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

function CalendarComponent() {
  const [eventsData, setEventsData] = useState(events);
  const today = new Date()
  const currentDate = today.getDate() + '-' + today.getMonth()+1 + '-' + today.getFullYear();

  return (
    <div suppressHydrationWarning>
      <h1>Current Date: {currentDate}</h1>
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        localizer={localizer}
        defaultDate={today}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
      />
    </div>
  );
}

export default dynamic(() => Promise.resolve(CalendarComponent),{ssr : false})
