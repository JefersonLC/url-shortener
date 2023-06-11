interface LayoutProps {
  children: JSX.Element;
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
      <main className='min-h-screen bg-slate-800'>{children}</main>
      <footer className='fixed bottom-0 left-0 right-0 py-2'>
        <p className='text-center text-slate-50'>
          Powered by{' '}
          <a
            href='https://github.com/JefersonLC'
            target='_blank'
            className='relative hover:text-amber-500 [&>span]:w-0 [&>span]:hover:w-full '
          >
            @JefersonLC
            <span className='absolute bottom-0 left-0 h-[1px] bg-amber-500 transition-all' />
          </a>
        </p>
      </footer>
    </>
  );
}
