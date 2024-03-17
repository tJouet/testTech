import React from 'react';
import ArrowDown from "../../assets/down-arrow.svg"

interface BeaconProps {
  axisX: number,
  beaconAxis?: boolean,
}



const Beacon: React.FC<BeaconProps> = ({ axisX, beaconAxis }) => {

  const squareSize = 24
  const arrowSize = 8
  const topPos = squareSize - arrowSize
  const centeredCursorValue = `calc(${axisX}px - ${squareSize / 2}px)`

  return (
    <>
      <div className='w-full h-6'>
        <div className="flex flex-col justify-center items-center absolute pointer-events-none" style={{
          top: `${topPos}px`,
          transform: `translateX(${centeredCursorValue} )`
        }}>
          <div className="flex flex-col justify-center items-center  pointer-events-none">
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
      </div>
    </>
  )
}

export default Beacon