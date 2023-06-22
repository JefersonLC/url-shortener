import { DotSpinner } from '@uiball/loaders'
import { useEffect } from 'react'
import { useRoute } from 'wouter'
import { navigate } from 'wouter/use-location'
import { UrlData } from '../context/UrlContext.d'
import { useUrl } from '../hooks/useUrl'

export default function About() {
  const [, params] = useRoute('/:id')
  const { getUrl } = useUrl()

  useEffect(() => {
    if (!params) return navigate('/')
    ;(async () => {
      const { data } = await getUrl<UrlData>(params.id)

      if (!data) return navigate('/')

      return (location.href = data.url)
    })()
  }, [])

  return (
    <main className='min-h-screen bg-slate-800 flex items-center justify-center'>
      <div className='text-center flex flex-col items-center justify-center'>
        <p className='text-lg text-slate-50'>Redirecting...</p>
        <DotSpinner size={60} color='#F8FAFC' />
      </div>
    </main>
  )
}
