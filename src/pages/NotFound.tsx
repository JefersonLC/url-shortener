import { Link } from 'wouter'
import useLocation from 'wouter/use-location'
import SadFace from '../icons/SadFace'

export default function NotFound() {
  const [location] = useLocation()

  return (
    <main className='min-h-screen bg-slate-800 flex justify-center items-center'>
      <div className='flex flex-col gap-2 justify-center items-center [&>svg]:fill-slate-50'>
        <p className='text-center text-xl text-slate-50'>
          Path <span className='text-emerald-400 font-mono'>"{location}"</span>{' '}
          doesn't exist
        </p>
        <SadFace />
        <Link
          to='/'
          className='py-2 px-4 bg-emerald-400 mt-4 cursor-pointer hover:text-emerald-400 hover:bg-slate-900'
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
