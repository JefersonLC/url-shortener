interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 bg-slate-800 px-5 py-2 text-center sm:text-start'>
        <h1 className='text-lg sm:text-2xl text-slate-50'>
          URL{' '}
          <span className='bg-amber-500 p-1 inline-block rounded-md text-black'>
            Shortener
          </span>
        </h1>
      </nav>
      <main className='min-h-screen'>{children}</main>
      <footer className='fixed bottom-0 left-0 right-0'>
        <p>Powered by JefersonLC</p>
      </footer>
    </>
  );
}
