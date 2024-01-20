import React from "react";
import ScheduleDay from "../ScheduleDay/ScheduleDay";

function ScheduleWeek() {
  return (
    <div class="grid grid-cols-7 gap-2">
      <ScheduleDay dayLabel={"S"}></ScheduleDay>
      <ScheduleDay dayLabel={"M"}></ScheduleDay>
      <ScheduleDay dayLabel={"T"}></ScheduleDay>
      <ScheduleDay dayLabel={"W"}></ScheduleDay>
      <ScheduleDay dayLabel={"T"}></ScheduleDay>
      <ScheduleDay dayLabel={"F"}></ScheduleDay>
      <ScheduleDay dayLabel={"S"}></ScheduleDay>
    </div>
  );
}

export default ScheduleWeek;
