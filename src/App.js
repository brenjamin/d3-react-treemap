import "./App.css"
import { useData } from "./utils/useData"
import { Treemap } from "./components/Treemap"

const width = 960
const height = 600

const App = () => {
  const data = useData()

  return !data ? (
    <pre>Loading...</pre>
  ) : (
    <main>
      <div className="svg-wrapper">
        <h1 id="title">Video Game Sales</h1>
        <p id="description">Top 100 Most Sold Video Games Grouped by Platform</p>
        <Treemap width={width} height={height} data={data} />
      </div>
    </main>
  )
}

export default App
