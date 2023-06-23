import { useUrl } from '../hooks/useUrl'

export default function ErrorMessage() {
  const { error } = useUrl()

  const position = !error ? '-top-10' : 'top-40'

  return (
    <div
      className={`absolute right-4 ${position} transition-all bg-slate-50 
      p-2 overflow-hidden rounded-md border-rose-500 border-2`}
    >
      <p className='text-sm'>The specified URL doesn't exist</p>
    </div>
  )
}
