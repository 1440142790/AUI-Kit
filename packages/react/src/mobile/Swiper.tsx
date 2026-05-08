/**
 * Swiper 轮播
 *
 * @example React
 * import { Swiper } from '@aui/react';
 * <Swiper autoplay dots loop>
 *   <div>Slide 1</div>
 *   <div>Slide 2</div>
 *   <div>Slide 3</div>
 * </Swiper>
 */

import React, { useState, useEffect, useRef } from 'react';
import { type SwiperProps, cx } from '@aui/core';

export const Swiper = React.forwardRef<HTMLDivElement, SwiperProps>(
  ({ autoplay = false, dots = true, loop = false, interval = 3000, onChange, currentIndex, className, children, ...rest }, ref) => {
    const [active, setActive] = useState(0);
    const [isControlled] = useState(currentIndex !== undefined);
    const current = isControlled ? (currentIndex ?? 0) : active;
    const timerRef = useRef<ReturnType<typeof setInterval>>();
    const slides = React.Children.toArray(children);
    const count = slides.length;

    const goTo = (index: number) => {
      const next = loop
        ? (index + count) % count
        : Math.max(0, Math.min(index, count - 1));
      if (!isControlled) setActive(next);
      onChange?.(next);
    };

    useEffect(() => {
      if (autoplay && count > 1) {
        timerRef.current = setInterval(() => {
          goTo(current + 1);
        }, interval);
      }
      return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [autoplay, interval, current, count, loop]);

    return (
      <div ref={ref} className={cx('relative overflow-hidden', className)} {...rest}>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>

        {dots && count > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                className={cx(
                  'w-1.5 h-1.5 rounded-full transition-all',
                  current === i ? 'bg-white w-4' : 'bg-white/50'
                )}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Swiper.displayName = 'Swiper';
