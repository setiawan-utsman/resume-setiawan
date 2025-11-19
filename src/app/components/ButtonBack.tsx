import React, { useCallback, useEffect, useState } from "react";
import { Card } from "./Card/card";
import { useNavigate } from "react-router-dom";

interface IButtonBack {
  className?: string;
  path?: string;
  title?: any;
  // title2?: any;
}

export default function ButtonBack({ className, path="/", title="Kembali Ke Portal" }: IButtonBack) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  if (!isVisible) return null;

  return (
    <div className="cursor-pointer fixed bottom-4 right-4 z-20">
      <Card
        className={`shadow-sm rounded-lg bg-[#323237] text-white py-2 text-sm hover:bg-[#111718] transition-colors ${className}`}
        onClick={scrollToTop}
      >
        {title}
      </Card>
    </div>
  );
}

