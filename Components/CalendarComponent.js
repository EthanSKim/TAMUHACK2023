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

  return (
    <div suppressHydrationWarning>
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
      />
    </div>
  );
}

export default dynamic(() => Promise.resolve(CalendarComponent),{ssr : false})
