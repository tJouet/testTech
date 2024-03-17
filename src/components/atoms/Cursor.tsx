import React, { useState } from 'react';
import ArrowDown from "../../assets/down-arrow.svg"

interface CursorProps {
  axisX: number,
  hoveredSection: string,
  children: ReactElement
}

const Cursor: React.FC<CursorProps> = ({ axisX, hoveredSection, children }) => {
  const squareSize = 24
  const arrowSize = 8
  const topPos = squareSize - arrowSize

  return (
    <>
      <div className='bg-blue-300 w-full h-6 relative '>
        <div className="flex flex-col justify-center items-center  absolute pointer-events-none" style={{
          top: `${topPos}px`,
          transform: `translateX(${axisX}px )`
        }}>

          <img src={ArrowDown} alt="arrow down" style={{
            width: `${arrowSize}px`, height: `${arrowSize}px`
          }} />
          <div className=' bg-yellow-saffran opacity-40 flex-row flex justify-between'
            style={{ width: `${squareSize}px`, height: `${squareSize}px` }}
          >
            <div className='w-[1px] h-full bg-yellow-bright'></div>
            <div className='w-[1px] h-full bg-yellow-bright'></div>
            <div className='w-[1px] h-full bg-yellow-bright'></div>
          </div>
        </div>
      </div>

      {children}
      <div className='bg-blue-200 w-full h-6 relative '>
        <div
          className='bg-red-200 absolute  '
          style={{

            transform: `translateX(${axisX}px)`
          }}>
          <span >|{hoveredSection}|</span>
        </div>
      </div>
    </>
  )
}

export default Cursor