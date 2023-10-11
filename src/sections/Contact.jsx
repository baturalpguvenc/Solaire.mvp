import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "../components/Map";

const Section = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
font-family: "SatoshiMedium", sans-serif !important;

  font-weight: 200;
`;

const Form = styled.form`
font-family: "SatoshiMedium", sans-serif !important;

  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
font-family: "SatoshiMedium", sans-serif !important;

  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
font-family: "SatoshiMedium", sans-serif !important;

  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
font-family: "SatoshiMedium", sans-serif !important;

  background: #353AA1;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
font-family: "SatoshiMedium", sans-serif !important;

  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Buraya EmailJS servisinizin servis ID'sini buraya ekle
        "YOUR_TEMPLATE_ID", // Buraya EmailJS servisinizin şablon ID'sini buraya ekle
        ref.current,
        "YOUR_USER_ID" // Buraya EmailJS servisinizin kullanıcı ID'sini ekle
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
      <div id={"contact"}/>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={5}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
