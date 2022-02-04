import { useMemo } from "react"

const LegendMarks = ({ colorScale, legendWidth, legendMarkHeight, root }) => {
  let consoles = root.leaves().map(leaf => leaf.data.category)
  // remove duplicates
  consoles = Array.from(new Set([...consoles]))
  return (
    <g>
      {consoles.map((console, index) => {
        const x = (Math.floor(index / (consoles.length / 3)) * (legendWidth + 15)) / 3
        const y = (index % (consoles.length / 3)) * (legendMarkHeight + 20)
        return (
          <g key={index} transform={`translate(${x}, ${y})`}>
            <rect className="legend-item" fill={colorScale(console)} width={legendMarkHeight} height={legendMarkHeight} />
            <text y={legendMarkHeight - 2} x={legendMarkHeight + 8} className="legend-name">
              {console}
            </text>
          </g>
        )
      })}
    </g>
  )
}

export const Legend = ({ colorScale, legendWidth, legendHeight, root }) => {
  const legendMarkHeight = 15
  return (
    <svg id="legend" width={legendWidth} height={legendHeight} transform={` translate(${legendWidth}, 45)`}>
      {useMemo(() => {
        return <LegendMarks root={root} colorScale={colorScale} legendWidth={legendWidth} legendMarkHeight={legendMarkHeight} />
      }, [root, legendWidth, legendMarkHeight, colorScale])}
    </svg>
  )
}
