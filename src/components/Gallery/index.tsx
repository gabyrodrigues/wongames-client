import { useState } from "react";
import Image from "next/image";
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";
import { Close } from "@styled-icons/material-outlined";

import Slider, { SliderSettings } from "@components/Slider";
import * as S from "./styles";

export interface GalleryImageProps {
  src: string;
  label: string;
}

export interface GalleryProps {
  items: GalleryImageProps[];
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
};

export default function Gallery({ items }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items?.map((item, index) => (
          <Image
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            height={405}
            width={768}
            priority
            onClick={() => setIsOpen(true)}
          />
        ))}
      </Slider>

      <S.Modal
        aria-label="modal"
        aria-hidden={!isOpen}
        $isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}>
          <Close size={40} />
        </S.Close>
      </S.Modal>
    </S.Wrapper>
  );
}
