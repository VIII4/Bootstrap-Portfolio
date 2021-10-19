import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
} from "mdb-react-ui-kit";

import styles from "./imageCarousel.module.css";

// Elements
import { DotButton } from "./carouselButtons";

export default function EmblaCarousel({ imgSrc }) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    // aligns the first slide to the start
    // of the viewport else will align it to the middle.

    loop: true,
    // we need the carousel to loop to the
    // first slide once it reaches the last slide.

    skipSnaps: false,
    // Allow the carousel to skip scroll snaps if
    // it's dragged vigorously.

    inViewThreshold: 0.7,
    // percentage of a slide that need's to be visible
    // inorder to be considered in view, 0.7 is 70%.
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // this function allow's us to scroll to the slide whose
  // id correspond's to the id of the navigation dot when we
  // click on it.

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  // set the id of the current slide to active id
  // we need it to correctly highlight it's corresponding
  // navigation dot.

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  // make sure embla is mounted and return true operation's
  // can be only performed on it if it's successfully mounted.

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <MDBRow center className="text-center ">
      <MDBCol>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            <div className={styles.emblaSlide}>
              {imgSrc && (
                <Image
                  src={imgSrc}
                  height={400}
                  width={550}
                  className="rounded-lg"
                  alt="cover image"
                  placeholder="blur"
                  blurDataURL={imgSrc}
                />
              )}
            </div>
            <div className={styles.emblaSlide}>
              {imgSrc && (
                <Image
                  src={imgSrc}
                  height={400}
                  width={600}
                  className="rounded-lg"
                  alt="cover image"
                  placeholder="blur"
                  blurDataURL={imgSrc}
                />
              )}
            </div>
            <div className={styles.emblaSlide}>
              {imgSrc && (
                <Image
                  src={imgSrc}
                  height={400}
                  width={550}
                  className="rounded-lg"
                  alt="cover image"
                  placeholder="blur"
                  blurDataURL={imgSrc}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.emblaButtons}>
          {scrollSnaps.map((_, idx) => (
            <DotButton
              key={idx}
              selected={idx === selectedIndex}
              onClick={() => {
                scrollTo(idx);
              }}
            />
          ))}
        </div>
      </MDBCol>
    </MDBRow>
  );
}
