import React, { useState } from 'react';
import Bar from './atoms/Bar';
import Cursor from './atoms/Cursor';



const ScrollingBar = () => {
  const [axisX, setAxisX] = useState(0);
  const [hoveredSection, setHoveredSection] = useState('');
  const handleAxisX = (value) => {
    setAxisX(value)
  }
  const handleSectionSelection = (section) => {
    setHoveredSection(section)
  }

  return (
    <>
      <p>{axisX}{hoveredSection}</p>
      <h1>Hello world</h1>
      <Cursor axisX={axisX} hoveredSection={hoveredSection}>
        <Bar emitAxisX={handleAxisX} emitHoveredSection={handleSectionSelection} />
      </Cursor>
    </>
  )
}

export default ScrollingBar