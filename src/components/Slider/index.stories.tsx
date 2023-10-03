import { StoryObj, Meta } from "@storybook/react";
import { Settings } from "react-slick";
import styled from "styled-components";
import Slider from ".";

export default {
  title: "Slider",
  component: Slider
} as Meta;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Slide = styled.div`
  background: gray;
  border: 0.1rem solid red;
  color: white;
  padding: 10rem 0;
  text-align: center;
  width: 30rem;
`;

export const Horizontal: StoryObj = {
  render: () => {
    return (
      <Slider settings={settings}>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
        <Slide>4</Slide>
        <Slide>5</Slide>
      </Slider>
    );
  }
};

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
};

export const Vertical: StoryObj = {
  render: () => {
    return (
      <Slider settings={verticalSettings}>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
        <Slide>4</Slide>
        <Slide>5</Slide>
      </Slider>
    );
  }
};
