import { Link } from "react-router-dom";

export default function NotFound(){
  return(
    <main className="h-full max-w-fit block mx-auto w-full">
      <div className="flex flex-grow items-center justify-center mt-[80px] px-4">
        <div className="rounded-lg bg-slate-50 p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-bold text-slate-900">404</h1>
          <p className="text-slate-600">Oops! The page you are looking for could not be found.</p>
          <Link to="/" className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-700"> Go back to Home </Link>
        </div>
      </div>
    </main>
  )
}
