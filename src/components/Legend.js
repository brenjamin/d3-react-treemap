const LegendMarks = ({ colorScale, legendWidth, legendMarkHeight }) => {
  return (
    <g transform={`translate(0, -${legendMarkHeight})`}>
      {rects.map((val, index) => {
        return <rect key={index} fill={colorScale(val)} width={legendWidth / rects.length} height={legendMarkHeight} transform={`translate(${(index * legendWidth) / rects.length},0)`} />
      })}
    </g>
  )
}

export const Legend = ({ colorScale, width, legendWidth }) => {
  const legendMarkHeight = 15
  return (
    <g id="legend" transform={` translate(${width - legendWidth - 100},${legendMarkHeight + 10})`}>
      <LegendMarks colorScale={colorScale} legendWidth={legendWidth} legendMarkHeight={legendMarkHeight} />
      <LegendAxis colorScale={colorScale} legendWidth={legendWidth} legendMarkHeight={legendMarkHeight} />
    </g>
  )
}
