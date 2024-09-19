/* eslint-disable */

import axios from "axios";
import { useEffect, useState } from "react";
import DashboardData from "../Component/DashboardData";

function Dashboard() {
  return (
    <section className="mb-20">
      <h1 className="font-bold my-10">License Plate Data</h1>
      <DashboardData />
    </section>
  );
}

export default Dashboard;
