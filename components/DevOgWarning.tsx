"use client";

import { useEffect } from "react";

export default function DevOgWarning() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[portfolio] OG image: add public/og-image.png (1200x630). See public/og-image-TODO.txt"
      );
    }
  }, []);
  return null;
}