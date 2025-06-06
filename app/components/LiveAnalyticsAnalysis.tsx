"use client";
import React, { useEffect } from "react";
import { db } from "../firebase/config";
import { onValue, ref } from "firebase/database";

function LiveAnalyticsAnalysis() {
  const [totalCustomers, setTotalCustomers] = React.useState(0);
  const [currentCustomers, setCurrentCustomers] = React.useState(0);
  const [totalAisleVisits, setTotalAisleVisits] = React.useState(0);
  const [averageDwellTime, setAverageDwellTime] = React.useState(0);

  useEffect(() => {
    const query = ref(db, "/analytics/summary");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        setTotalCustomers(data.total_customers);
        setCurrentCustomers(data.current_customers);
        setTotalAisleVisits(data.total_isle_visits);
        setAverageDwellTime(data.average_dwell_time);
      }
    });
  }, []);

  return (
    <div className="h-fit w-full sm:w-[300px] flex flex-col bg-white dark:bg-[var(--navyblue)] rounded-md gap-y-4 p-4">
      <h1 className="font-semibold text-base">Analysis</h1>
      <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-4">
        <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-sm">
          Total Customers
        </h1>
        <h1 className="text-center text-6xl font-semibold">{totalCustomers}</h1>
      </div>
      <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-4">
        <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-sm">
          Current Customers
        </h1>
        <h1 className="text-center text-6xl font-semibold">
          {currentCustomers}
        </h1>
      </div>
      <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-4">
        <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-sm">
          Total Aisle Visits
        </h1>
        <h1 className="text-center text-6xl font-semibold">
          {totalAisleVisits}
        </h1>
      </div>
      <div className="flex flex-col bg-transparent border border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-md p-4">
        <h1 className="font-semibold dark:font-medium text-[var(--brightaqua)] dark:text-[var(--periwinkle)] text-sm">
          Average Dwell Time (secs)
        </h1>
        <h1 className="text-center text-6xl font-semibold">
          {averageDwellTime}
        </h1>
      </div>
    </div>
  );
}

export default LiveAnalyticsAnalysis;
