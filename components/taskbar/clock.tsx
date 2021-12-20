import { useState, useEffect } from 'react';

export default function Clock () {
    const useDate = () => {
        const locale = 'en';
        const [today, setDate] = useState(new Date());
        useEffect(() => {
            const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
        }, []);
        const time = today.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric' });
        return (time);
    };

    return (
        <div className = "border-b-2 border-r-2 border-white">
        <div className="px-2 border-t-2 border-l-2 border-black">
          <h1 className="font-retro text-lg text-black">
                  {useDate()}
          </h1>
        </div>
      </div>
    )

}