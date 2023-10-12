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

  @media only screen and (max-width: 768px) {
    gap: 0px;
    flex-direction:column-reverse;
  }
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

  font-weight: 500;
  font-size: 56px !important;

  @media (max-width: 768px) {
    font-size: 42px !important;
    font-weight: 500;
    line-height:36px !important;
    margin-bottom:20px !important
  }
`;

const Form = styled.form`
font-family: "SatoshiMedium", sans-serif !important;

  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 768px) {
    width: 100% !important;
    padding:16px !important;
    gap: 12px;
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

  @media (max-width: 768px) {
    flex:0;
    height:350px !important;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //setSuccess(true)
    /* emailjs.init("z_oOBlM3S9f3AaIxZ"); */
    emailjs
      .sendForm(
        "service_ntsnxvu", // Buraya EmailJS servisinizin servis ID'sini buraya ekle
        "template_hbainek", // Buraya EmailJS servisinizin şablon ID'sini buraya ekle
        ref.current,
        "z_oOBlM3S9f3AaIxZ" // Buraya EmailJS servisinizin kullanıcı ID'sini ekle
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          ref.current.reset();
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
        <div id={"contact"} />
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <Input placeholder="Name" className="text-black" name="name" type="text" required />
            <Input placeholder="Email" className="text-black" name="email" type="email" required />
            <TextArea
              placeholder="Write your message"
              className="text-black"
              name="message"
              rows={5}
              required
            />
            <Button type="submit">Send</Button>
            {success ?
              "Your message has been sent. We'll get back to you soon :)" : success === false && "Something went wrong. Please try again later :(" }
          </Form>
        </Left>
        <Right className="hidden md:block">
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
