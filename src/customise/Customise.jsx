import React, { useState, useEffect, useCallback } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { motion } from "framer-motion";
import { hexToHSL } from "../utils/hexToHsl";
import { hslToRgb } from "../utils/hslToRgb";
import "./Customise.css";

// Default colors for dark and light themes
const defaultColors = {
  dark: {
    primaryColor: "#ff9900",
    secondaryColor: "#454545",
    textColor: "#fdfdfd",
    backgroundColor: "#0a0a0a",
  },
  light: {
    primaryColor: "#ff9900",
    secondaryColor: "#bbbbbb",
    textColor: "#000000",
    backgroundColor: "#ffffff",
  },
};

const Customise = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  // Convert RGB to HEX
  const rgbToHex = (r, g, b) =>
    "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

  // Convert HSL directly to HEX
  const hslToHex = (h, s, l) => {
    const { r, g, b } = hslToRgb(h, s, l);
    return rgbToHex(r, g, b);
  };

  // Update CSS variables for color changes
  const updateCSSVariables = useCallback((themeColors) => {
    Object.entries(themeColors).forEach(([key, value]) => {
      const property = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      const { h, s, l } = hexToHSL(value);
      const hslValue = `hsl(${h}, ${s}%, ${l}%)`;
      document.documentElement.style.setProperty(property, hslValue);

      if (property === "--background-color") {
        const tempHSL = `hsl(${h}, ${s}%, ${l + 6}%)`;
        document.documentElement.style.setProperty("--background-color-2", tempHSL);
      }
      if (property === "--text-color") {
        const tempHSL = `hsl(${h}, ${s}%, ${l - 29}%)`;
        document.documentElement.style.setProperty("--grey-color", tempHSL);
      }
    });
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? "dark" : "light";
      updateCSSVariables(defaultColors[newTheme]);
      sessionStorage.setItem("theme", newTheme);
      return !prev;
    });
  }, [updateCSSVariables]);

  // Initialize theme from sessionStorage or default to dark
  useEffect(() => {
    const savedTheme = sessionStorage.getItem("theme") || "dark";
    setIsDarkMode(savedTheme === "dark");
    updateCSSVariables(defaultColors[savedTheme]);
  }, [updateCSSVariables]);

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="edit-button"   onClick={toggleTheme}>
        {isDarkMode  ? (     
          <WbSunnyIcon className="icon" />
        ) : (
          <BedtimeIcon className="icon" />
        )}
      </div>


  );
};

export default Customise;