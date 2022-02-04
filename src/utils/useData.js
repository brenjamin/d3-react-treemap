import { useEffect, useState } from "react"
import { json } from "d3"

export const useData = () => {
  const url = "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json"
  const [data, setData] = useState()
  useEffect(() => {
    json(url).then(data => {
      setData(data)
      console.log(data)
    })
  }, [])
  return data
}
