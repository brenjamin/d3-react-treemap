import { Marks } from "./Marks"
import { useState, useMemo } from "react"
import { Tooltip } from "./Tooltip"

export const Treemap = ({ width, height, data }) => {
  const [activeGame, setActiveGame] = useState(null)
  const handleMouseMove = useMemo(
    () => e => {
      setActiveGame({
        name: e.target.dataset.name,
        console: e.target.dataset.category,
        value: e.target.dataset.value,
        x: e.pageX,
        y: e.pageY
      })
    },
    []
  )

  const handleMouseOut = useMemo(
    () => e => {
      setActiveGame(null)
    },
    []
  )
  return (
    <>
      <Tooltip data={data} activeGame={activeGame} />
      <svg width={width} height={height}>
        <Marks width={width} height={height} data={data} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} />
      </svg>
    </>
  )
}
