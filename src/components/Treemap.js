import { Marks } from "./Marks"
import { useState, useMemo } from "react"
import { Tooltip } from "./Tooltip"
import { Legend } from "./Legend"
import { treemap, hierarchy, scaleOrdinal, interpolateSinebow, interpolateRgb, range } from "d3"

export const Treemap = ({ width, height, data, legendWidth, legendHeight }) => {
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

  const vgTreemap = useMemo(() => treemap().size([width, height]).paddingInner(2), [width, height])

  const root = useMemo(
    () =>
      hierarchy(data)
        .eachBefore(d => {
          d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name
        })
        .sum(d => +d.value)
        .sort((a, b) => {
          return b.value - a.value
        }),
    [data]
  )

  useMemo(() => vgTreemap(root), [vgTreemap, root])

  // generate color scale
  const colorScale = useMemo(() => {
    const fader = color => interpolateRgb(color, "#fff")(0.45)
    const colors = range(0, 1, 1 / root.children.length).map(num => fader(interpolateSinebow(num)))
    return scaleOrdinal(colors)
  }, [root])
  return (
    <>
      <Tooltip data={data} activeGame={activeGame} />
      <svg width={width} height={height}>
        <Marks width={width} height={height} data={data} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} root={root} colorScale={colorScale} />
      </svg>
      <Legend data={data} legendWidth={legendWidth} legendHeight={legendHeight} colorScale={colorScale} root={root} />
    </>
  )
}
