import React, { useState } from 'react';
import Beacon from './Beacon'

interface CursorProps {
  axisX: number,
  hoveredSection: string,
  children: ReactElement
}

const Cursor: React.FC<CursorProps> = ({ axisX, hoveredSection, children }) => {

  // TO DO Remove this when text has own center value 24 here is square size

  const centeredCursorValue = `calc(${axisX}px - ${24 / 2}px)`
  return (
    <>
      <div className="relative">
        <Beacon axisX={axisX} />
        {children}
        <div className='w-full h-6'>
          <div
            className=' absolute'
            style={{
              transform: `translateX(${centeredCursorValue})`
            }}>
            <span>{hoveredSection}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cursor