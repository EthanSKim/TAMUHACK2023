export default function Calendar() {
  let dates = [
    { day: 1, took_meds: 0 },
    { day: 2, took_meds: 0 },
    { day: 3, took_meds: 0 },
    { day: 4, took_meds: 0 },
    { day: 5, took_meds: 0 },
    { day: 6, took_meds: 0 },
    { day: 7, took_meds: 0 },
    { day: 8, took_meds: 0 },
    { day: 9, took_meds: 0 },
    { day: 10, took_meds: 0 },
    { day: 11, took_meds: 0 },
    { day: 12, took_meds: 0 },
    { day: 13, took_meds: 0 },
    { day: 14, took_meds: 0 },
    { day: 15, took_meds: 0 },
    { day: 16, took_meds: 0 },
    { day: 17, took_meds: 0 },
    { day: 18, took_meds: 0 },
    { day: 19, took_meds: 0 },
    { day: 20, took_meds: 0 },
    { day: 21, took_meds: 0 },
    { day: 22, took_meds: 0 },
    { day: 23, took_meds: 0 },
    { day: 24, took_meds: 0 },
    { day: 25, took_meds: 0 },
    { day: 26, took_meds: 0 },
    { day: 27, took_meds: 0 },
    { day: 28, took_meds: 0 },
    { day: 29, took_meds: 0 },
    { day: 30, took_meds: 0 },
    { day: 31, took_meds: 0 },
  ];

  return (
    <div>
      {dates.map((date, key) => {
        if (date.took_meds) {
          <div key={key} className="col">
            {date.day}
          </div>;
        } else {
          <div key={key} className="col bg-danger">
            {date.day}
          </div>;
        }
      })}
    </div>
  );
}
