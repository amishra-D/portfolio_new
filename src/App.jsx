import Sidecard from "./Components/Sidecard"
import Nav from "./Components/Nav"
function App() {
  return (
    <div className='w-full min-h-screen bg-surface flex justify-center'>
      <Sidecard/>
      <div className="fixed bottom-4">
        <Nav/>
        </div>
    </div>
  )
}

export default App