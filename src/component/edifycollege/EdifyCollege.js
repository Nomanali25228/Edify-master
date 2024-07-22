import React, { useState, useEffect } from 'react';
import './EdifyCollege.css'
import line from '../../assest/image/git-branch-security.svg'; // Adjust the path and filename if necessary

function EdifyCollege() {
  const duration = 2000; // Duration for the count animation in milliseconds
  const count1 = useCounter(30, duration);
  const count2 = useCounter(600, duration);
  const count3 = useCounter(1500, duration);
  const count4 = useCounter(3500, duration);

  function useCounter(targetValue, duration) {
    const [count, setCount] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (!hasScrolled && window.scrollY > 0) {
          setHasScrolled(true);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [hasScrolled]);

    useEffect(() => {
      if (!hasScrolled) return;

      const start = Date.now();
      const end = start + duration;

      const step = () => {
        const now = Date.now();
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor(progress * targetValue));

        if (now < end) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }, [targetValue, duration, hasScrolled]);

    return count;
  }

  return (
    <div >
      <div className='featured-main'>
        <div className='greenptaging'>
        </div>
        <img src={line} className='imagessing' alt="" />

        <div className='featured-course'>
          <p className='text'>Edify College of IT</p>
          <p className='text2'>Legacy</p>
          <p className='text3'>to be Remembered</p>
        </div>
      </div>

      <div className='maindiv'>
        <div className='main2'>
          <span>
            <p className='p1'>{count1} +</p>
            <p className='p2'>IT Courses</p>
          </span>
          <span>
            <p className='p1'>{count2} +</p>
            <p className='p2'>Success Stories</p>
          </span>
          <span>
            <p className='p1s'>{count3} +</p>
            <p className='p2s'>Students</p>
          </span>
          <span>
            <p className='p1s'>{count4} +</p>
            <p className='p2s'>Alumni</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default EdifyCollege;