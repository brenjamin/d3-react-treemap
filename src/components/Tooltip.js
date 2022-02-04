export const Tooltip = ({ activeGame, data }) => {
  return activeGame ? (
    <div id="tooltip" data-value={activeGame.value} style={{ left: activeGame.x + 20, top: activeGame.y - 10 }}>
      <p>Name: {activeGame.name}</p>
      <p>Console: {activeGame.console}</p>
      <p>Total Sales: {activeGame.value}M</p>
    </div>
  ) : (
    <></>
  )
}
