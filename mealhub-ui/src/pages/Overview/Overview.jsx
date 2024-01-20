import ScheduleWeek from "../../components/ScheduleWeek/ScheduleWeek";
import WeekPagerButtonGroup from "../../components/WeekPagerButtonGroup/WeekPagerButtonGroup";

function Overview() {
  return (
    <div class="flex flex-col w-full">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl text-gray-900 font-header">Overview</h1>
        <h2 class="text-xl text-gray0800 font-header">Jan 21 - Jan 27</h2>
        <WeekPagerButtonGroup />
      </div>
      <ScheduleWeek />
    </div>
  );
}

export default Overview;
