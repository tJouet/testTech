import React, { useState } from 'react';
import sections from '../../sections.json'

const getSectionsVMA = () => {
  return sections.sort((a, b) => a.vma - b.vma)
}

const getSectionsWidth = () => {
  let totalSize = 0
  for (let i = 0; i < sections.length; i++) {
    totalSize += sections[i].size
  }
  return sections.map(section => ({ ...section, percentage: (section.size / totalSize) * 100 }))
}

const sectionsWithPercent = getSectionsWidth()

interface BarProps {
  emitAxisX: (value: number) => void
  emitHoveredSection: (value: string) => void
}

const Bar: React.FC<BarProps> = ({ emitAxisX, emitHoveredSection }) => {
  const [hoveredSection, setHoveredSection] = useState('');
  const [axisX, setAxisX] = useState(null);

  const handleMouseMove = (e) => {
    e.preventDefault()
    setAxisX(e.clientX);
    emitAxisX(axisX)
    emitHoveredSection(hoveredSection)
  };

  return (
    <>
      <div className=" flex-row flex items-center justify-center "
        onMouseMove={handleMouseMove}

      >
        {sectionsWithPercent.map((section, index) => (
          <div key={index}

            className=" flex items-center justify-center border-r border-white h-6  "
            style={{ width: section.percentage < 0.2 ? "0.3%" : `${section.percentage}%`, backgroundColor: section.type == "code" ? "#1E90FF" : "#FF4500" }}
            onMouseEnter={() => setHoveredSection(section.name)}
            onMouseLeave={() => setHoveredSection('')}
          >
          </div>
        ))
        }</div>

    </>
  )
}

export default Bar