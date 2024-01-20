import React from "react";
import ScheduleDay from "../ScheduleDay/ScheduleDay";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";

function ScheduleWeek() {
  return (
    <div class="grid grid-cols-7 gap-2">
      <ScheduleDay dayLabel={"S"}>
        <CheckboxGroup />
      </ScheduleDay>
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
