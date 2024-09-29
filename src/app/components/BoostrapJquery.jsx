"use client";
import { useEffect } from "react";
import { bootstrapJquery } from "@/app/utils/script";

const BootstrapJquery = () => {
  useEffect(bootstrapJquery, []);
  return <div className=""></div>;
};

export default BootstrapJquery;
