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

const FontColour = "text-black"
const BgColour = "bg-black"
const AccentColour = "yellow-500"
const PrimaryImage = "https://via.placeholder.com/40x60.png"

const Header = tw(HeaderBase)`lg:max-w-none md:text-base`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`text-left ${FontColour} leading-snug xl:text-6xl`;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5 ${BgColour}`;
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
const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 ${BgColour} text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`
const QuotesLeftIcon = tw(QuotesLeftIconBase)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-${AccentColour} transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`
const Quote = tw.blockquote``
const CustomerName = tw.p`mt-4 font-bold`
const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`


export default ({
  heading = "DevOps Engineer",
  description = "I'm an experienced, UK-based Platform Engineer with a proven track record across the data, software and DevOps domains. I'm passionate about delivering real-world value and driving continuous improvement in product-led environments. Comfortable collaborating with technologists, business stakeholders and clients, alike.",
  imageSrc = PrimaryImage,
  imageDecoratorBlob = true,
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Download CV",
  buttonRounded = true,
  features = ["Cloud providers: Azure, AWS", "Scripting: Python, node.js, Bash, PowerShell", "IaC: Terraform", "CD/CD: Azure DevOps", "OS and Server Management: Linux, Windows"],
  testimonial = {
    quote: "Jordan is a highly accomplished and extraordinarily talented Engineer whom I have had the pleasure of working with.",
    customerName: "...",
    customerCompany: "KPMG"
  }
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full ${BgColour} hocus:bg-${AccentColour}`;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="https://www.linkedin.com/in/jordan-balsamo-b96444113/">LinkedIn</NavLink>
      <NavLink href="https://github.com/jordanbalsamo">GitHub</NavLink>
      <NavLink href="/#">Blog</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink css={buttonRoundedCss} href="/#">
        Contact Me
      </PrimaryLink>
    </NavLinks>
  ];
  return (
    <div tw="m-6">
      <>
        <Header links={navLinks} />
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <PrimaryButton as="a" href={primaryButtonUrl} css={buttonRoundedCss}>
                  {primaryButtonText}
                </PrimaryButton>
                <FeatureList>
                  {features.map((feature, index) => (
                    <Feature key={index}>
                      <FeatureIcon />
                      <FeatureText>{feature}</FeatureText>
                    </Feature>
                  ))}
                </FeatureList>
              </TextColumn>
              <ImageColumn>
                <ImageContainer>
                  <Image src={imageSrc} />
                  {imageDecoratorBlob && <ImageDecoratorBlob />}
                  <Testimonial>
                    <QuotesLeftIcon/>
                    <Quote>{testimonial.quote}</Quote>
                    <CustomerName>{testimonial.customerName}</CustomerName>
                    <CustomerCompany>{testimonial.customerCompany}</CustomerCompany>
                  </Testimonial>
                </ImageContainer>
                <Offsetbackground />
              </ImageColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </>
    </div>
  );
};