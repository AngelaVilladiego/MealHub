import React from "react";

function ScheduleDay({ dayLabel, children }) {
  return (
    <div class="flex flex-col items-start min-w-32">
      <span class="self-center">{dayLabel}</span>
      {children}
    </div>
  );
}

export default ScheduleDay;
