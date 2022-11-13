import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "components/headers/light-custom.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as QuotesLeftIconBase } from "images/resume/quotes-l.svg"
import { ReactComponent as SvgDecoratorBlob1 } from "images/resume/dot-pattern.svg"

const BodyColour = "gray-500"
const AccentColour = "yellow-500"
const TextShadow = {"text-shadow": "2px 2px #21262E"} //will get around to using Tailwind helper for this :)

const PrimaryImage = "https://drive.google.com/uc?export=view&id=1IVMXsep1bXnd_Bmie-62XSA4ZkcbAmfq"
const CVUrl = "https://drive.google.com/file/d/1_XfYr_-EURttVrOyNxg8-qglDXYiCjvY/view"
const LinkedInUrl = "https://www.linkedin.com/in/jordan-balsamo-b96444113/"
const GitHubUrl = "https://github.com/jordanbalsamo"

const Header = tw(HeaderBase)`lg:max-w-none md:text-base`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`text-left text-${AccentColour} leading-snug xl:text-5xl`;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5 bg-${BodyColour} hocus:text-${BodyColour} hover:shadow-outline`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-${AccentColour}`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-${BodyColour} text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`
const QuotesLeftIcon = tw(QuotesLeftIconBase)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-${AccentColour} transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`
const Quote = tw.blockquote``
const FeedbackName = tw.p`mt-4 font-bold`
const FeedbackCompany = tw.p`mt-1 text-sm text-gray-500`


export default ({
  heading = "I build infrastructure, software and data solutions",
  description = "I'm an experienced Platform Engineer with a proven track record of delivering secure, scalable, production-ready solutions across the infrastructure, software and data domains. I'm passionate about generating real-world value for my clients and driving continuous improvement in product-led environments. Comfortable collaborating with technologists, business stakeholders and clients, alike.",
  imageSrc = PrimaryImage,
  imageDecoratorBlob = true,
  primaryButtonUrl = CVUrl,
  primaryButtonText = "Download CV",
  buttonRounded = true,
  features = [
    "Certified: Azure Solutions Architect Expert (MCSE)",
    "Cloud providers: Azure, AWS",
    "Programming: Python, JavaScript (inc. node.js), Bash, PowerShell, SQL",
    "IaC: Terraform, ARM Templates",
    "CI/CD: Azure DevOps",
    "OS and Server Management: Linux, Windows"
  ],
  testimonial = {
    quote: "Jordan is a highly accomplished and extraordinarily talented Engineer whom I have had the pleasure of working with.",
    feedbackName: "Faisel Khan, Lead QA Engineer, KPMG",
    feedbackCompany: "KPMG"
  }
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full bg-${BodyColour} hocus:bg-${AccentColour}`;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href={LinkedInUrl}>LinkedIn</NavLink>
      <NavLink href={GitHubUrl}>GitHub</NavLink>
      <NavLink href="/#">Blog</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink css={buttonRoundedCss} href="https://www.linkedin.com/in/jordan-balsamo-b96444113/">
        Contact Me
      </PrimaryLink>
    </NavLinks>
  ];
  return (
    <div >
      <>
        <Header links={navLinks} />
        <Container>
          {/* <ContentWithVerticalPadding> */}
            <Row>
              <TextColumn>
                <Heading style={TextShadow}>{heading}</Heading>
                <Description>{description}</Description>
                <PrimaryButton as="a" href={primaryButtonUrl} css={buttonRoundedCss} target="_blank" rel="noopener noreferrer">
                  {primaryButtonText}
                </PrimaryButton>
              </TextColumn>
              <ImageColumn>
                <ImageContainer>
                  <Image src={imageSrc} onContextMenu={(e)=> e.preventDefault()}/>
                  {imageDecoratorBlob && <ImageDecoratorBlob />}
                  <Testimonial>
                    <QuotesLeftIcon/>
                    <Quote>{testimonial.quote}</Quote>
                    <FeedbackName>{testimonial.feedbackName}</FeedbackName>
                    <FeedbackCompany>{testimonial.feedbackCompany}</FeedbackCompany>
                  </Testimonial>
                </ImageContainer>
                <Offsetbackground />
              </ImageColumn>
            </Row>
          {/* </ContentWithVerticalPadding> */}
        </Container>
      </>
    </div>
  );
};
