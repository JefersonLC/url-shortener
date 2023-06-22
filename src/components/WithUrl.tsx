export default function WithUrl({ children }: { children: string }) {
  return (
    <>
      <p className='text-center text-slate-400 text-lg 2xl:text-2xl mb-4'>
        Your new url has been generated
      </p>
      <p className='text-center text-lg 2xl:text-2xl text-emerald-400'>{children}</p>
      <span className='[&>svg]:fill-slate-400 flex justify-center'>
        {/* TODO: Add smiley face icon*/}
      </span>
    </>
  )
}
