import React, { useState, useEffect } from "react";
import ApexCharts from "./apexCharts";

const ClientOnly = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  return isMounted ? <ApexCharts /> : null;
};

export default ClientOnly;
