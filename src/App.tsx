import Header from "./components/Header"
import GameButton from "./components/GameButton"

function App() {

  return (
    <>
    <Header/>
    <main className='bg-slate-600 h-screen block font-sans'>
      <GameButton/>
    </main>
    </>
  )
}

export default App
