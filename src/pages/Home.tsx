import { Suspense, lazy } from 'react'
import UrlForm from '../components/UrlForm'
import { useUrl } from '../hooks/useUrl'

const LoadingUrl = lazy(() => import('../components/LoadingUrl'))
const WithOutUrl = lazy(() => import('../components/WithOutUrl'))
const WithUrl = lazy(() => import('../components/WithUrl'))

export default function Home() {
  const { url, isLoading } = useUrl()

  return (
    <main
      className={`min-h-screen bg-slate-800 flex flex-col px-4 sm:px-24
      md:px-48 lg:px-60 xl:px-80 2xl:px-[30rem]`}
    >
      <section className='flex-grow basis-0 flex flex-col justify-end'>
        <p className='text-lg 2xl:text-2xl text-slate-50'>Enter your URL:</p>
        <UrlForm />
      </section>
      <section className='flex-grow basis-6'>
        <div className='p-4 mt-10 border-dashed rounded-xl border-4 border-slate-400'>
          <Suspense fallback={<LoadingUrl>Loading...</LoadingUrl>}>
          {
              isLoading
                ? <LoadingUrl>Generating Url...</LoadingUrl>
                : url
                  ? <WithUrl>{url}</WithUrl>
                  : <WithOutUrl />
            }
          </Suspense>
        </div>
      </section>
    </main>
  )
}
