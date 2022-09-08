import React from "react";
import styled from "styled-components";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import illustration1 from "../../public/images/illustration-1.svg";
import illustration2 from "../../public/images/illustration-2.svg";
import personImg from "../../public/images/avatar-testimonial.jpg";
import bgCurve from "../../public/images/bg-curve-desktop.svg";

export default function Hero() {
  const Section = styled.section`
    display: grid;
    font-family: "Raleway", sans-serif;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    position: relative;
    max-width: 1400px;
    background-color: ${(props) =>
      props.gray ? "hsl(240, 75%, 98%)" : "white"};
    padding-bottom: 5rem;

    @media (max-width: 1000px) {
      & {
        grid-template-columns: 1fr;
      }
      .illustration-img-1 {
        order: -1;
        height: 350px;
        max-width: 550px;
        margin-inline: auto;
        margin-bottom: 2rem;
      }
      .illustration-img-2 {
        order: -1;
        height: 350px;
        max-width: 550px;
        margin-inline: auto;
        margin-bottom: 2rem;
      }
    }

    @media (max-width: 515px) {
      & {
        padding: 0 1rem;
      }
    }
  `;
  const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => (props.white ? "white" : "black")};
  `;
  const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    @media (max-width: 1000px) {
      text-align: center;
      font-size: 2rem;
    }
  `;
  const Paragraph = styled.p`
    line-height: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    @media (max-width: 1000px) {
      text-align: center;
    }
  `;

  const Image = styled.img`
    width: 100%;
  `;
  const Form = styled.form`
    display: flex;
    gap: 0.7rem;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  `;

  const Input = styled.input`
    padding: 0.5rem;
    font-size: 1.2rem;
    width: 100%;
    max-width: 340px;
    @media (max-width: 1000px) {
      max-width: 100%;
    }
  `;

  const Link = styled.a`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `;

  const ModifiedLink = styled(Link)`
    &:hover {
      color: hsl(170, 45%, 53%);
    }
    transition: color 300ms;
    border-bottom: hsl(170, 45%, 43%) solid 1px;
    color: hsl(170, 45%, 43%);
    padding-bottom: 0.4rem;
    width: max-content;
    @media (max-width: 1000px) {
      align-self: center;
    }
  `;

  const Button = styled.button`
    background-color: hsl(224, 93%, 58%);
    color: white;
    border: none;
    border-radius: 3px;
    width: 200px;
    font-weight: 700;
    cursor: pointer;
    @media (max-width: 1000px) {
      width: 100%;
      padding .8rem 0;
      font-size: 1.2rem;
    }
  `;
  const SectionTestimonial = styled(Section)`
    grid-template-columns: 60% 40%;
    @media (max-width: 1000px) {
      & {
        grid-template-columns: 1fr;
        place-items: center;
      }
    }
  `;
  const ParagraphTestimonial = styled(Paragraph)`
    max-width: 560px;
    @media (max-width: 1000px) {
      text-align: start;
    }
  `;
  const Testimonial = styled.article`
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: white;
    max-width: 500px;
    margin-top: 2rem;
    box-shadow: 4px 3px 10px 0px rgb(0 0 0 / 20%);
    @media (max-width: 1000px) {
      margin-inline: auto;
    }
    @media (max-width: 515px) {
      margin-bottom: 2rem;
    }
  `;

  const TestimonialTxt = styled(Paragraph)`
    line-height: 2rem;
    font-weight: 600;
    text-align: start;
  `;
  const Person = styled.div`
    display: flex;
    align-items: center;
  `;
  const PersonImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 0.5rem;
  `;
  const PersonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `;

  const PersonName = styled.span`
    font-weight: 700;
  `;

  const BgCurve = styled.img`
    width: 100%;
    margin-top: 2rem;
    transform: translateY(5px);
  `;
  const EarlyAccessSection = styled(Section)`
    background-color: hsl(238, 22%, 44%);
    padding: 4rem;
    @media (max-width: 1000px) {
      & {
        grid-template-columns: 1fr;
      }
    }
  `;

  const EarlyAccessForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: center;
  `;

  const EarlyAccessBtn = styled(Button)`
    padding: 0.8rem;
    margin-top: 0.5rem;
  `;
  const EarlyAccessInput = styled(Input)`
    min-width: 400px;
    max-width: 500px;
    @media (max-width: 515px) {
      min-width: 0;
    }
  `;

  return (
    <>
      <Section>
        <Article>
          <Title>
            All your files in one secure location, accessible anywhere.
          </Title>
          <Paragraph>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers
          </Paragraph>

          <Form>
            <Input placeholder="Enter your email..." type="email" />
            <Button type="submit">Get started</Button>
          </Form>
        </Article>
        <Image className="illustration-img-1" src={illustration1} />
      </Section>

      <BgCurve src={bgCurve} />

      <SectionTestimonial gray>
        <Article>
          <Title as="h2">Stay productive, wherever you are</Title>
          <ParagraphTestimonial>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </ParagraphTestimonial>
          <ParagraphTestimonial>
            Securely share files and folders with friends, family and colleagues
            for live colaboration. no emails attachments required!
          </ParagraphTestimonial>
          <ModifiedLink href="kjn">
            See how Fylo works <BsFillArrowRightCircleFill />
          </ModifiedLink>
          <Testimonial>
            <FaQuoteLeft />
            <TestimonialTxt>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </TestimonialTxt>
            <Person>
              <PersonImage src={personImg} />
              <PersonWrapper>
                <PersonName>Kyle Burton</PersonName>
                <span>Founder and CEO, Huddle</span>
              </PersonWrapper>
            </Person>
          </Testimonial>
        </Article>
        <Image className="illustration-img-2" src={illustration2} />
      </SectionTestimonial>

      <EarlyAccessSection>
        <Article white>
          <Title as="h2">Get early access today</Title>
          <Paragraph>
            It only takes a minute to sign up and our free started tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </Paragraph>
        </Article>

        <EarlyAccessForm>
          <EarlyAccessInput type="email" placeholder="email.exemple.com" />
          <EarlyAccessBtn type="submit">Get started for free</EarlyAccessBtn>
        </EarlyAccessForm>
      </EarlyAccessSection>
    </>
  );
}
