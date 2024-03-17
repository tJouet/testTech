import React, { useState } from 'react';
import Bar from './atoms/Bar';
import Cursor from './atoms/Cursor';
import Beacon from './atoms/Beacon';



const ScrollingBar = () => {
  const [beaconAxis, setBeaconAxis] = useState(null);
  const [axisX, setAxisX] = useState(0);
  const [hoveredSection, setHoveredSection] = useState('');
  const handleAxisX = (value) => {
    setAxisX(value)
  }
  const handleSectionSelection = (section) => {
    setHoveredSection(section)
  }
  const handleMouseClick = (e) => {
    e.preventDefault()
    setBeaconAxis(axisX)
  }

  return (
    <>
      {/* TO DO Remove this when done with all dev  */}
      <p>{axisX}{hoveredSection}</p>
      <div className='relative'>
        <Beacon axisX={beaconAxis} />
        <Cursor axisX={axisX} hoveredSection={hoveredSection} >
          <div onClick={handleMouseClick}>
            <Bar emitAxisX={handleAxisX} emitHoveredSection={handleSectionSelection} /></div>
        </Cursor>
      </div>
    </>
  )
}

export default ScrollingBar