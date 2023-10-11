import styled from "styled-components";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Mining from "../assets/images/birmine.jpeg";

const Section = styled.div`
  height: 100vh;
  height: 100svh;
  scroll-snap-type: y proximity;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  width: 100%;
`;

const Event = styled.div`
  position: relative;
  width: 50%;
  background: #3498db;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  text-align: center;
  color: #fff;
  font-size: 14px !important; /* Yazı fontunu küçült */
`;

const Date = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 12px !important; /* Yazı fontunu küçült */
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default function TimelineComponent() {
  const events = [
    { date: "Q4 2023", description: "The first two solar parks that will be equiped with bitcoin mining faclilities are already selected. " },
    { date: "Q4 2023", description: " They are located in the Netherlands and will become active in Q4 of 2023." },
    { date: "Q1 2024", description: "Marketing" },
    { date: "Q4 2024", description: "Launch" },
  ];

  return (
    <Section>
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
          <div id={"timeline"} />
          <img src={Mining} style={{ height: "200px", objectFit: "cover" }} />
          <div
            style={{
              width: "600px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {events.map((event, i) => {
  return (
    <TimelineItem key={i}>
      <TimelineOppositeContent
        style={{ fontFamily: "SatoshiMedium, sans-serif", fontSize: "10px !important" }} // Metin fontunu burada güncelle
        color="text.secondary"
      >
        <p>{event.description}</p>
      </TimelineOppositeContent>

      <TimelineSeparator
        style={{ marginTop: "30px !important", marginBottom: "-30px !important" }}
      >
        <div
          style={{
            width: "10px !important",
            height: "10px !important",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
        {events.length - 1 !== i && (
          <div
            style={{
              width: "1px",
              height: "100%",
              backgroundColor: "darkGreen",
            }}
          />
        )}
      </TimelineSeparator>

      <TimelineContent
        style={{ fontFamily: "SatoshiMedium, sans-serif", fontSize: "20px !important" }} // Metin fontunu burada güncellemeye çalıştım
      >
        <p>{event.date}</p>
      </TimelineContent>
    </TimelineItem>
  );
})}
          </div>
        </div>
      </Container>
    </Section>
  );
}
