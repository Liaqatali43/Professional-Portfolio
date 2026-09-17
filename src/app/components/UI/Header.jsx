"use client";
import React from "react";

import Button from "../common/Button";

const Header = () => {
  const navbar = [
    {
      num: "01.",
      title: "About",
      link: "#about",
    },
    {
      num: "02.",
      title: "Skills",
      link: "#skills",
    },
    {
      num: "03.",
      title: "Projects",
      link: "#projects",
    },
    {
      num: "04.",
      title: "Contact",
      link: "#contact",
    },
  ];
  return (
    <main>
      <div className=" flex place-items-center justify-between px-[32px] py-[16px]">
        <div className="">
          <button className="text-xl text-semibold font-semibold font-mono">
            <span className="text-purpleA">&lt;</span>
            <span className="text-whiteA">Liaqat</span>
            <span className="text-blueA">.dev </span>
            <span className="text-purpleA">/&gt;</span>
          </button>
        </div>
        <div>
          <nav className=" flex place-items-center gap-[20px]">
            {navbar.map((nav) => {
              const { num, title, link } = nav;
              return (
                <a
                  className="font-mono text-[14px] text-grayA"
                  key={num}
                  href={link}
                >
                  <span className="text-purpleA mr-[4px]">{num}</span>
                  {title}
                </a>
              );
            })}
            <Button className="text-[14px] text-whiteA bg-purpleA px-[20px] py-[10px] font-semibold">
              Hire Me
            </Button>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Header;
