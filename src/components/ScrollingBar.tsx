import React, { useState } from 'react';
import Bar from './atoms/Bar';
import Cursor from './atoms/Cursor';
import Beacon from './atoms/Beacon';



const ScrollingBar = () => {
  const [beaconAxis, setBeaconAxis] = useState(null);
  const [axisX, setAxisX] = useState(1);
  const [vma, setVma] = useState(0)
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

  const handleVma = (vma) => {
    setVma(vma)
  }
  const hexAxis = vma.toString(16)

  return (
    <>
      <div className='relative'>
        <Beacon axisX={beaconAxis} />
        <Cursor axisX={axisX} hoveredSection={hoveredSection} hexAxis={hexAxis} >
          <div onClick={handleMouseClick}>
            <Bar emitAxisX={handleAxisX} emitHoveredSection={handleSectionSelection} emitVma={handleVma} /></div>
        </Cursor>
      </div>
    </>
  )
}

export default ScrollingBar