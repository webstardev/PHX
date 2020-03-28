import React from "react";
import SubscribeCard from "react-subscribe-card";

const url = `https://curiee.us5.list-manage.com/subscribe/post?u=20de75c5ff12bc92439108960&amp;id=330020dc19`;

const outerCardStyle = `
  padding: 0;
  width: 650px;
  max-width: 90%;
  margin: 0 auto;
`;

const innerCardStyle = `
  padding: 12px;
`;

const titleStyle = `
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol";
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const descriptionStyle = `
  display: none;
`;

const subContainerStyle = `
  justify-content: center;
`;

const subInputStyle = `
  border-color: #000;
  border-width: 3px;
  border-radius: 3px 0 0 3px;
  margin-right: 0;
  padding: 20px 10px;
  width: 240px;
`;

const subButtonStyle = `
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol";
  border-radius: 0 3px 3px 0;
  height: 46px;
`;

const BigSubscribe = () => (
  <SubscribeCard
    mailchimpURL={url}
    title="Curious? Join our newsletter 📰👾"
    description="‍"
    outerCardStyle={outerCardStyle}
    innerCardStyle={innerCardStyle}
    titleStyle={titleStyle}
    descriptionStyle={descriptionStyle}
    subContainerStyle={subContainerStyle}
    subInputStyle={subInputStyle}
    subButtonStyle={subButtonStyle}
    emailPlaceholder="Your Email"
  />
);

const smallOuterCardStyle = `
  padding: 0;
  width: auto;
  max-width: 100%;
  margin: 0;

  @media all and (max-width: 930px) {
    margin: 0 auto;
  }
`;

const smallInnerCardStyle = `
  padding: 0;
`;

const noTitle = `
  display: none;
`;

const SmallSubscribe = () => (
  <SubscribeCard
    mailchimpURL={url}
    title=""
    description="‍"
    outerCardStyle={smallOuterCardStyle}
    innerCardStyle={smallInnerCardStyle}
    titleStyle={noTitle}
    descriptionStyle={descriptionStyle}
    subInputStyle={subInputStyle}
    subButtonStyle={subButtonStyle}
    emailPlaceholder="Your Email"
  />
);

export { BigSubscribe, SmallSubscribe };
