"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";

type Props = {
  currentPage: string;
};

const ScrollTopButton = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (props.currentPage === "contact") setIsVisible(true);
    else setIsVisible(false);
  }, [props.currentPage]);

  const scrollTop = () => {
    const homePage = document.querySelector("#home");
    homePage?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-2 w-full flex justify-end">
      <button onClick={() => scrollTop()} className={`${isVisible === true ? "opacity-100" : "opacity-0"} topBtn`}>
        <ArrowUpIcon className="w-7 h-7" />
      </button>
    </div>
  );
};

export default ScrollTopButton;
