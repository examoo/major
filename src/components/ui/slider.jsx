import { forwardRef, useState } from "react";

const Slider = forwardRef(
  (
    {
      min = 0,
      max = 600,
      step = 1,
      defaultValue = [50, 200],
      onChange,
      className = "",
    },
    ref
  ) => {
    const [values, setValues] = useState([
      defaultValue[0] ?? min,
      defaultValue[1] ?? max,
    ]);

    const handleMinChange = (e) => {
      const newMin = Math.min(Number(e.target.value), values[1] - step);
      const newValues = [newMin, values[1]];
      setValues(newValues);
      if (onChange) onChange(newValues);
    };

    const handleMaxChange = (e) => {
      const newMax = Math.max(Number(e.target.value), values[0] + step);
      const newValues = [values[0], newMax];
      setValues(newValues);
      if (onChange) onChange(newValues);
    };

    return (
      <div className={`w-full flex items-center ${className}`}>
        <div className="relative w-full">
          <input
            ref={ref}
            type="range"
            min={min}
            max={max}
            step={step}
            value={values[0]}
            onChange={handleMinChange}
            className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto z-10"
            style={{ pointerEvents: "auto" }}
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={values[1]}
            onChange={handleMaxChange}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none pointer-events-auto"
            style={{ pointerEvents: "auto" }}
          />
        </div>
        <span className="ml-3 text-sm text-gray-700">
          {values[0]} - {values[1]}
        </span>
      </div>
    );
  }
);

Slider.displayName = "Slider";

export { Slider };
