import React, { useRef, ReactNode } from "react";
import Beacon from "./Beacon";

interface CursorProps {
  axisX: number;
  hoveredSection: string;
  children: ReactNode;
  hexAxis: string;
}

const Cursor: React.FC<CursorProps> = ({
  axisX,
  hoveredSection,
  children,
  hexAxis,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const offsetWidth = textRef.current?.offsetWidth ?? 0
  const centeredTextValue = `calc(${axisX}px - ${offsetWidth / 2}px)`;

  return (
    <>
      <div className="relative">
        {axisX !== 0 &&
          <Beacon axisX={axisX} className={"h-6"} />}
        {children}
        <div className="h-6">
          <div
            className=" absolute"
            style={{
              transform: `translateX(${centeredTextValue})`,
            }}
          >
            {hexAxis !== "0" &&
              <span ref={textRef} className='tracking-tight'>
                <span className='text-slate-600'>{hoveredSection}</span>: 0x{hexAxis}
              </span>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Cursor;
