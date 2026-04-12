"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import "moment-precise-range-plugin";

export interface ITimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  firstDateWasLater: boolean;
}

export function Clock({ date }: { date: string }) {
  // @ts-expect-error - moment.preciseDiff is not typed
  const [time, setTime] = useState<ITimeLeft | null>(moment.preciseDiff(new Date(date), new Date(), true));

  useEffect(() => {
    const interval = setInterval(() => {
      // @ts-expect-error - moment.preciseDiff is not typed
      setTime(moment.preciseDiff(new Date(date), new Date(), true));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  const addY = (number: number) => {
    return [2, 3, 4].includes(number % 10) && !([12, 13, 14].includes(number)) ? 'y' : number === 1 ? 'a' : '';
  };

  const yOrE = (number: number) => {
    return [2, 3, 4].includes(number % 10) && !([12, 13, 14].includes(number)) ? 'ące' : 'ęcy';
  }

  if (!time) return null;

  return (
    <div className="flex flex-col items-center gap-8 py-16 px-6 w-full max-w-4xl mx-auto mb-18">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 text-center">
        Widzimy się na inauguracji!
      </h2>
      
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-4">
        {time.months > 0 && (
          <div className="flex flex-col items-center min-w-[80px]">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-800 tabular-nums">
              {time.months}
            </span>
            <span className="text-xs sm:text-sm text-stone-500 font-medium uppercase tracking-wider mt-2">
              {`Miesi${yOrE(time.months)}`}
            </span>
          </div>
        )}
        
        <div className="flex flex-col items-center min-w-[80px]">
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-800 tabular-nums">
            {time.days}
          </span>
          <span className="text-xs sm:text-sm text-stone-500 font-medium uppercase tracking-wider mt-2">
            {time.days === 1 ? 'Dzień' : 'Dni'}
          </span>
        </div>
        
        <div className="flex flex-col items-center min-w-[80px]">
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-800 tabular-nums">
            {time.hours}
          </span>
          <span className="text-xs sm:text-sm text-stone-500 font-medium uppercase tracking-wider mt-2">
            {`Godzin${addY(time.hours)}`}
          </span>
        </div>
        
        <div className="flex flex-col items-center min-w-[80px]">
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-800 tabular-nums">
            {time.minutes}
          </span>
          <span className="text-xs sm:text-sm text-stone-500 font-medium uppercase tracking-wider mt-2">
            {`Minut${addY(time.minutes)}`}
          </span>
        </div>
        
        <div className="flex flex-col items-center min-w-[80px]">
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#85cdd1] tabular-nums">
            {time.seconds}
          </span>
          <span className="text-xs sm:text-sm text-stone-500 font-medium uppercase tracking-wider mt-2">
            {`Sekund${addY(time.seconds)}`}
          </span>
        </div>
      </div>
    </div>
  );
}
