import React, { useState } from 'react';
import ArrowDown from "../../assets/down-arrow.svg"

interface CursorProps {
  axisX: number,
  hoveredSection: string,
  children: ReactElement
}

const Cursor: React.FC<CursorProps> = ({ axisX, hoveredSection, children }) => {

  return (
    <>
      <div className='bg-blue-300 w-full h-6 relative '>
        <div className="flex flex-col justify-center items-center  absolute" style={{

          transform: `translateX(${axisX}px)`
        }}>

          <img src={ArrowDown} alt="arrow down" className='w-2 h-2' />
          <div className='w-6 h-6 bg-yellow-saffran opacity-40 flex-row flex justify-between  '>
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