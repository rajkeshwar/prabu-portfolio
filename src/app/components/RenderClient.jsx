"use client";
import { useEffect, useState } from "react";

const RenderClient = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient ? children : ''}</>;
};

export default RenderClient;
