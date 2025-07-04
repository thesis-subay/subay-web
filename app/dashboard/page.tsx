import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { pieChartData } from "@/app/lib/pieChartData";
import AnalyticsCard from "../components/AnalyticsCard";
import AnalyticsBarChart from "../components/AnalyticsBar";
import AnalyticsPieChart from "../components/AnalyticsPie";
import AnalyticsLineChart from "../components/AnalyticsLine";
import {
  MdVideocam,
  MdBubbleChart,
  MdSpaceDashboard,
  MdInsights,
  MdDateRange,
  MdArrowOutward,
} from "react-icons/md";

const DashboardPage = () => {
  const uniqueDates = [
    ...new Set(pieChartData.map((item) => item.date)),
  ].sort();

  const formatDate = (dateStr: string) => {
    return format(parseISO(dateStr), "MMM dd, yyyy");
  };

  let formattedDateRange = "";

  if (uniqueDates.length === 1) {
    formattedDateRange = formatDate(uniqueDates[0]);
  } else if (uniqueDates.length > 1) {
    const start = formatDate(uniqueDates[0]);
    const end = formatDate(uniqueDates[uniqueDates.length - 1]);
    formattedDateRange = `${start} → ${end}`;
  }

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 -mt-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-white text-base font-medium">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full rounded-md text-center font-semibold p-8 bg-gradient-to-r from-[var(--deepteal)] via-[var(--deepteal)] to-[var(--brightaqua)] dark:from-[var(--cyanblue)] dark:via-[var(--cyanblue)] dark:to-[var(--royalblue)] cursor-pointer">
          <Link
            href={"../dashboard/live-analytics"}
            className="flex flex-row items-center justify-center transform transition duration-500 hover:scale-110 hover:animate-pulse gap-x-4"
          >
            <MdVideocam size={24} />
            Live Analytics
          </Link>
        </div>
        <div className="w-full rounded-md text-center font-semibold p-8 bg-gradient-to-r from-[var(--brightaqua)] via-[var(--softblue)] to-[var(--softblue)] dark:from-[var(--royalblue)] dark:via-[var(--royalblue)] dark:to-[var(--elecpurple)] cursor-pointer">
          <Link
            href={"../dashboard/heatmapping"}
            className="flex flex-row items-center justify-center transform transition duration-500 hover:scale-110 hover:animate-pulse gap-x-4"
          >
            <MdBubbleChart size={24} />
            Heatmapping
          </Link>
        </div>
        <div className="w-full rounded-md text-center font-semibold p-8 bg-gradient-to-r from-[var(--softblue)] via-[var(--softcyan)] to-[var(--softcyan)] dark:from-[var(--elecpurple)] dark:via-[var(--elecpurple)] dark:to-[var(--purgenta)] cursor-pointer">
          <Link
            href={"../dashboard/post-analytics"}
            className="flex flex-row items-center justify-center transform transition duration-500 hover:scale-110 hover:animate-pulse gap-x-4"
          >
            <MdSpaceDashboard size={20} />
            Post Analytics
          </Link>
        </div>
        <div className="w-full rounded-md text-center font-semibold p-8 bg-gradient-to-r from-[var(--softcyan)] via-[var(--cyanblue)] to-[var(--cyanblue)] dark:from-[var(--purgenta)] dark:via-[var(--brimagenta)] dark:to-[var(--brimagenta)] cursor-pointer">
          <Link
            href={"../dashboard/insights"}
            className="flex flex-row items-center justify-center transform transition duration-500 hover:scale-110 hover:animate-pulse gap-x-4"
          >
            <MdInsights size={20} />
            Insights
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-2/3 flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md gap-y-4 p-4">
          <div className="flex flex-row justify-between">
            <h1 className="font-semibold text-[var(--bluetext)] dark:text-white text-base">
              Introducing, SUBAY...
            </h1>
            <Link
              href={"/dashboard/about"}
              className="flex flex-row items-center gap-x-2"
            >
              <button className="rounded-md p-1 bg-[var(--softcyan)] dark:bg-[var(--brimagenta)] transform transition duration-500 hover:scale-110">
                <MdArrowOutward size={16} className="text-white" />
              </button>
            </Link>
          </div>
          <div className="h-fit w-full border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md">
            <iframe
              src="https://www.youtube.com/embed/SwW-KC5U4Zo?playlist=SwW-KC5U4Zo&loop=1&autoplay=1&controls=0"
              title="Re-Identification"
              allow="autoplay; encrypted-media; accelerometer; mute; clipboard-write; gyroscope; picture-in-picture; web-share"
              className="w-full aspect-[16/9] object-cover"
            />
            {/*<video
              controls
              preload="none"
              autoPlay
              loop
              muted
              className="w-full object-cover"
            >
              <source src="/re-id.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>*/}
          </div>
        </div>
        <div className="h-full w-full sm:w-1/2 flex flex-col gap-4">
          <div className="h-full w-full flex flex-col sm:flex-row gap-4">
            <div className="h-full w-full sm:w-1/2 flex flex-col items-center justify-center bg-white dark:bg-[var(--navyblue)] rounded-md gap-2 p-4">
              <div className="flex flex-row items-center justify-center gap-x-3">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
                </span>
                <h1 className="text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-center text-sm">
                  Live Cameras
                </h1>
              </div>
              <div className="text-center text-base font-semibold text-[var(--bluetext)] dark:text-white">
                <h1>Camera 02 → Camera 05</h1>
                <h1>Camera 03 ← Camera 09</h1>
              </div>
            </div>
            <div className="h-full w-full sm:w-1/2 flex flex-col items-center justify-center bg-white dark:bg-[var(--navyblue)] rounded-md gap-2 p-4">
              <span className="flex flex-row text-[var(--bluetext)] dark:text-[var(--periwinkle)] text-center text-sm gap-x-2">
                <MdDateRange size={18} className="animate-pulse" />
                Available Dates for Analysis
              </span>
              <h1 className="text-center text-2xl font-semibold text-[var(--bluetext)] dark:text-white px-4">
                {formattedDateRange}
              </h1>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <AnalyticsCard />
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col sm:flex-row gap-4">
        <div className="h-full w-full sm:w-1/3">
          <AnalyticsPieChart page="analytics" />
        </div>
        <div className="h-full w-full sm:w-1/3">
          <AnalyticsLineChart page="analytics" />
        </div>
        <div className="h-full w-full sm:w-1/3">
          <AnalyticsBarChart page="analytics" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
