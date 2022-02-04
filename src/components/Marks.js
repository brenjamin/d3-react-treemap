import { useMemo } from "react"

export const Marks = ({ width, height, data, onMouseMove, onMouseOut, root, colorScale }) => {
  return (
    <svg width={width} height={height}>
      {useMemo(() => {
        return (
          <>
            {root.leaves().map(leaf => {
              return (
                <g key={leaf.value} transform={`translate(${leaf.x0}, ${leaf.y0})`}>
                  <rect width={leaf.x1 - leaf.x0} height={leaf.y1 - leaf.y0} data-name={leaf.data.name} data-category={leaf.data.category} data-value={leaf.value} className="tile" fill={colorScale(leaf.data.category)} onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
                  <text className="leaf-text" x={2} y={13}>
                    {leaf.data.name.split(/[ /]/).map((text, index) => (
                      <tspan key={index} x={2} dy={`${0.71 * index > 0 ? 1 : index}em`}>
                        {text}
                      </tspan>
                    ))}
                  </text>
                </g>
              )
            })}
          </>
        )
      }, [root, colorScale, onMouseOut, onMouseMove])}
    </svg>
  )
}
