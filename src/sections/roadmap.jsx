import styled from "styled-components";
import React from "react";

import BackG from "../assets/images/roadmap2.png";
import BackGV from "../assets/images/roadmap-vertical.png";

export default function TimelineComponent() {
  const events = [
    {
      date: "Q4 2023",
      description:
        "The first two solar parks that will be equipped with bitcoin mining facilities are already selected.",
      description2:
        "They are located in the Netherlands and will become active in Q4 of 2023.",
      color: "bg-[#BAC82E]",
      textColor: "text-[#BAC82E]",
    },
    {
      date: "Q1 2024",
      description:
        "The expansion of the Sittaris services - energy storage, grid connection and heat production is anticipated for Q1 - 2024.",
        color: "bg-[#0B6C81]",
        textColor: "text-[#0B6C81]",
    },
    { date: "Q2 2024", description: "Launch", color: "bg-[#F4A120]" ,textColor: "text-[#F4A120]",},
  ];

  return (
    <div id="roadmap"
      className="h-screen w-screen p-3 md:p-6 gap-6 bg-black flex flex-col pt-20 md:pt-32 justify-center items-center"
      style={{
        scrollSnapType: "y proximity",
        scrollSnapAlign: "center",
      }}
    >
        <h1>Roadmap</h1>
      <div
        className={`bg-[url('/roadmap-vertical.png')] md:bg-[url('/roadmap2.png')] w-1/2 m:w-2/3 h-[60vh] md:h-full grid md:grid-cols-3 text-black justify-center items-center`}
        style={{
          
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center relative h-full w-full"
          >
            <div className={`absolute text-white text-center  ${ index === 1 ? '-ml-52 mb-0 md:ml-0 md:-mb-80' : '-mr-52 mt-0 md:mr-0 md:-mt-80  '} flex flex-col text-[10px] w-full md:w-2/3 2xl:w-5/6 md:text-sm 2xl:text-base font-medium gap-2`} >
              <span className={`${event.textColor} font-semibold text-sm md:text-xl`} >{event?.date}</span>
              <span>{event?.description}</span>
              <span>{event?.description2}</span>
            </div>
            <div
              className={`w-full md:w-1/3 h-fit aspect-square rounded-full flex justify-center items-center ${event.color} p-3`}
            >
              <div className="w-full h-full text-sm p-2 md:p-0 md:text-xl rounded-full flex justify-center items-center   bg-white">{event.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
