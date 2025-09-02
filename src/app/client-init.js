"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ini butuh `aos` sudah diinstall

export default function ClientAOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
      delay: 0,
    });
  }, []);

  return null;
}
