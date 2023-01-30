import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import events from "../dummydata/events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dynamic from "next/dynamic";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

// function CalendarComponent({ selectedDate, onDateChange }) {
function CalendarComponent({ selectedDate, onDateChange, events }) {
  const [eventsData, setEventsData] = useState(events);
  const [selectedProp, setSelectedProp] = useState(selectedDate);
  const today = new Date();

  const handleSelect = ({ start, end }) => {
    setSelectedProp(start);
    onDateChange(start);
  };

  useEffect(() => {
    setEventsData(events);
  }, [events]);

  return (
    <div>
      {/* {console.log(eventsData)} */}
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        localizer={localizer}
        defaultDate={today}
        defaultView="month"
        events={eventsData}
        style={{ height: "80vh" }}
        selectable
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}

export default dynamic(() => Promise.resolve(CalendarComponent), {
  ssr: false,
});
