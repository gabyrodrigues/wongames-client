import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SlickSlider from "react-slick";
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

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: "ondemand",
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
};

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
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
  ]
};

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
};

export default function Gallery({ items }: GalleryProps) {
  const slider = useRef<SlickSlider>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === "Escape" && setIsOpen(false);
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <S.Wrapper>
      <Slider
        ref={slider}
        settings={settings}>
        {items?.map((item, index) => (
          <Image
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            height={405}
            width={768}
            priority
            onClick={() => {
              setIsOpen(true);
              slider.current!.slickGoTo(index, true);
            }}
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

        <S.Content>
          <Slider
            ref={slider}
            settings={modalSettings}>
            {items?.map((item, index) => (
              <Image
                key={`gallery-${index}`}
                src={item.src}
                alt={item.label}
                height={405}
                width={768}
                priority
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  );
}
