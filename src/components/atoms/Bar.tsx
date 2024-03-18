import React, { useState } from 'react';
import sections from '../../sections.json'

const getSectionsVMA = () => {
  return sections.sort((a, b) => a.vma - b.vma)
}
const sortedSections = getSectionsVMA()

const getSectionsWidth = () => {
  let totalSize = 0
  for (let i = 0; i < sortedSections.length; i++) {
    totalSize += sortedSections[i].size
  }
  return sortedSections.map(section => ({ ...section, percentage: (section.size / totalSize) * 100 }))
}

const sectionsWithPercent = getSectionsWidth()

interface BarProps {
  emitAxisX: (value: number) => void
  emitHoveredSection: (value: string) => void
  emitVma: (value: number) => void
}

const Bar: React.FC<BarProps> = ({ emitAxisX, emitHoveredSection, emitVma }) => {
  const [hoveredSection, setHoveredSection] = useState('');
  const [vma, setVma] = useState(0)
  const [axisX, setAxisX] = useState(0);

  const handleMouseMove = (e) => {
    e.preventDefault()
    setAxisX(e.clientX);
    emitAxisX(axisX)
    emitHoveredSection(hoveredSection)
    emitVma(vma)
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
            onMouseEnter={() => { setHoveredSection(section.name); setVma(section.vma) }}
            onMouseLeave={() => setHoveredSection('')}
          >
          </div>
        ))
        }</div>

    </>
  )
}

export default Bar