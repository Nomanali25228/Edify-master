import React, { useEffect, useRef } from 'react';
import LongCardss from './LongCardss';
import longcard1 from "../../assest/image/londcard1.jpg";
import longcard2 from "../../assest/image/longcard2.jpg";
import longcard4 from "../../assest/image/longcard3.jpg";
import longcard3 from "../../assest/image/longcard4.jpg";
import longcard5 from "../../assest/image/longcard5.jpg";
import longcard7 from "../../assest/image/longcard6.jpg";
import longcard6 from "../../assest/image/longcard7.jpg";
import longcard8 from "../../assest/image/longcard8.jpg";


export default function LongCard() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scrollers = scrollerRef.current?.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // Clone and append items
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });

        let scrollIndex = 0;

        function scrollItems() {
          scrollerInner.style.transition = "transform 1s";
          scrollerInner.style.transform = `translateX(-${scrollIndex * 15}%)`;

          scrollIndex++;
          if (scrollIndex >= scrollerContent.length) {
            scrollIndex = 0;
          }

          setTimeout(scrollItems, 3000);
        }

        scrollItems();
      });
    }
  }, []);

  return (
    <div ref={scrollerRef}>
      <div className="scroller">
        <div className="scroller__inner">
          <ul className="tag-list">
            <li><LongCardss image={longcard1} name={"Full Stack Web Development"} name1={"Development"} name2={"20 Week"} /></li>
            <li><LongCardss image={longcard2} name={"Andrioad Development"} name1={"Development"} name2={"20 Week"} /></li>
            <li><LongCardss image={longcard3} name={"Full Stack Web Development"} name1={"Development"} name2={"20 Week"} /></li>
            <li><LongCardss image={longcard4} name={"Full Stack Web Development"} name1={"Development"} name2={"20 Week"} /></li>
            <li><LongCardss image={longcard5} name={"Full Stack Web Development"} name1={"Development"} name2={"20 Week"} /></li>
            <li><LongCardss image={longcard6} name={"Full Stack Web Development"} name1={"Development"} name2={"20 Week"} /></li>
            <li><LongCardss image={longcard7} name={"Full Stack Web Development"} name1={"Development"} name2={"20 Week"} /></li>
            <li><LongCardss image={longcard8} name={"Full Stack Web Development"} name1={"Development"} name2={"20 Week"} /></li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
