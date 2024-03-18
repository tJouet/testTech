import React, { useState } from "react";
import Bar from "./atoms/Bar";
import Cursor from "./atoms/Cursor";
import Beacon from "./atoms/Beacon";

const ScrollingBar = () => {
  const [beaconAxis, setBeaconAxis] = useState(null);
  const [axisX, setAxisX] = useState(0);
  const [vma, setVma] = useState(0);
  const [hoveredSection, setHoveredSection] = useState("");

  const handleAxisX = (value: number) => {
    setAxisX(value);
  };
  const handleSectionSelection = (section: string) => {
    setHoveredSection(section);
  };
  const handleMouseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setBeaconAxis(axisX);
  };

  const handleVma = (vma: number) => {
    setVma(vma);
  };
  const hexAxis = vma.toString(16);

  return (
    <>
      <div className="relative pt-12">

        <Cursor axisX={axisX} hoveredSection={hoveredSection} hexAxis={hexAxis}>

          <div onClick={handleMouseClick}>
            <Bar
              emitAxisX={handleAxisX}
              emitHoveredSection={handleSectionSelection}
              emitVma={handleVma}
            />
          </div>
          {beaconAxis && <Beacon axisX={beaconAxis} />}
        </Cursor>
      </div>
    </>
  );
};

export default ScrollingBar;
