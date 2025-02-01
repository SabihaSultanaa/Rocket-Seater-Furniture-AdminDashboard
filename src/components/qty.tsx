"use client";
import { useEffect } from "react";

export default function Counter() {
  useEffect(() => {
    // Select elements
    const decrementButton = document.getElementById("decrement");
    const incrementButton = document.getElementById("increment");
    const counterValue = document.getElementById("counter-value");

    const decrementHandler = () => {
      if (counterValue) {
        let currentValue = parseInt(counterValue.textContent || "1", 10);
        if (currentValue > 1) {
          counterValue.textContent = (currentValue - 1).toString();
        }
      }
    };

    const incrementHandler = () => {
      if (counterValue) {
        let currentValue = parseInt(counterValue.textContent || "1", 10);
        counterValue.textContent = (currentValue + 1).toString();
      }
    };

    // Attach event listeners
    if (decrementButton && incrementButton) {
      decrementButton.addEventListener("click", decrementHandler);
      incrementButton.addEventListener("click", incrementHandler);
    }

    // Cleanup the event listeners when component unmounts or rerenders
    return () => {
      if (decrementButton && incrementButton) {
        decrementButton.removeEventListener("click", decrementHandler);
        incrementButton.removeEventListener("click", incrementHandler);
      }
    };
  }, []);

  return (
    <div className="rounded-[10px] flex border-2 border-gray-400 w-fit h-[65px]">
      {/* Decrement Button */}
      <div
        className="w-[40px] h-[44px] text-[30px] flex items-center justify-center font-bold 
        pb-2 cursor-pointer hover:text-gray-700"
        id="decrement"
      >
        _
      </div>

      {/* Counter Display */}
      <div
        className="w-[80px] h-[44px] flex items-center justify-center text-[20px] font-semibold pt-4"
        id="counter-value"
      >
        1
      </div>

      {/* Increment Button */}
      <div
        className="w-[41px] h-[44px] text-[30px] flex items-center justify-center font-bold cursor-pointer
        pt-4 hover:text-gray-700"
        id="increment"
      >
        +
      </div>
    </div>
  );
}
