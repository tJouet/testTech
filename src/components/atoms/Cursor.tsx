import React, { useState, useRef, useEffect } from 'react';
import Beacon from './Beacon'

interface CursorProps {
  axisX: number,
  hoveredSection: string,
  children: ReactElement,
  hexAxis: string,
}

const Cursor: React.FC<CursorProps> = ({ axisX, hoveredSection, children, hexAxis }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const textRef = useRef(0)

  const centeredTextValue = `calc(${axisX}px - ${textRef.current.offsetWidth / 2}px)`

  console.log(textRef.current.offsetWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxTextPosition = screenWidth - (textRef.current ? textRef.current.offsetWidth : 0);

  const boundedTextPosition = Math.min(Math.max(0, centeredTextValue), maxTextPosition);

  return (
    <>
      <div className="relative">
        <Beacon axisX={axisX} />
        {children}
        <div className='bg-blue-200 h-6' style={{ width: `${screenWidth}-${textRef.current.offsetWidth}px`, }}>
          <div
            className=' absolute bg-red-200'
            style={{

              transform: `translateX(${centeredTextValue})`
            }}>
            <span ref={textRef}>{hoveredSection}:{hexAxis}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cursor