import {Link} from 'react-router-dom'
export default function Header(){
  return(
  <header className="w-full bg-slate-800 py-4 flex items-center justify-center">
    <>
    <Link to="/" className="text-slate-200 text-2xl font-bold">Arcade Portal</Link>
    </>
  </header>
  )
}
