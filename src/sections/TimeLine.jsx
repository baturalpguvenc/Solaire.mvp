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
  scroll-snap-type: y proximity;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;

const Event = styled.div`
  width: 70%;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  text-align: center;
  color: #fff;
  font-size: 30px !important;
  font-weight: bold;
  font-family: Montserrat, sans-serif !important;
  background: linear-gradient(to right, #22c1c3, #fdbb2d);

  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;

const Date = styled.div`
  width: 70%;
  padding: 20px;
  font-size: 36px !important; /* Yazıları daha büyük yapmak için font-size'i artırdık */
  font-weight: bold;
  font-family: Montserrat, sans-serif !important;
  background: linear-gradient(to right, #fd711d, #fdbb2d);
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 10px;

  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`;


export default function TimelineComponent() {
  const events = [
    { date: "Q4 2023", description: "The first two solar parks that will be equipped with bitcoin mining facilities are already selected." },
    { date: "Q4 2023", description: "They are located in the Netherlands and will become active in Q4 of 2023." },
    { date: "Q1 2024", description: "The expansion of the Sittaris services - energy storage, grid connection and heat production is anticipated for Q1 - 2024." },
    { date: "Q2 2024", description: "Launch" },
  ];

  return (
    <Section>
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Timeline align="left">
            {events.map((event, i) => (
              <TimelineItem key={i}>
                <TimelineOppositeContent>
                  <Event>{event.description}</Event>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {i < events.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Date>{event.date}</Date>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Container>
    </Section>
  );
}
