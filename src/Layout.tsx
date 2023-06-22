interface LayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 bg-slate-800 px-5 py-2 text-center sm:text-start'>
        <h1 className='text-lg sm:text-2xl text-slate-50'>
          URL{' '}
          <span className='bg-amber-500 px-1 py-[2px] inline-block rounded-md text-black'>
            Shortener
          </span>
        </h1>
      </nav>
      {children}
      <footer className='fixed bottom-0 left-0 right-0 py-2'>
        <p className='text-center text-sm sm:text-base text-slate-50'>
          Powered by{' '}
          <a
            href='https://github.com/JefersonLC'
            target='_blank'
            className={`relative hover:text-amber-500 pr-6 pl-4 mx-1 hover:after:text-rose-500
            hover:before:text-rose-500  [&>span]:w-0 [&>span]:hover:w-full after:absolute
            after:content-["<"] after:left-0 after:text-slate-500 before:absolute
            before:content-["/>"] before:right-0 before:text-slate-500`}
          >
            @JefersonLC
            <span className='absolute bottom-0 left-0 h-[1px] bg-amber-500 transition-all' />
          </a>
        </p>
      </footer>
    </>
  )
}
