import Layout from '@/components/layout';
import Loading from '@/components/loading/loading'
import Link from 'next/link';
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [clock, setClock] = useState('');

  useEffect(() => {
    const timedLoad = setTimeout(() => {
      if (document.readyState == 'complete') {
        setLoading(false);
      }
    }, 1500)

    return () => {
      clearTimeout(timedLoad);
    }
  }, [])

  useEffect(() => {
    const clockInterval = setInterval(() => { setClock(new Date().toLocaleTimeString('id')) }, 1000);
    return () => {
      clearInterval(clockInterval)
    }
  })

  return (
    <Layout title='Suyono' desc='Saya seorang front-end developer. Jika anda tertarik membuat website seperti ini bisa langsung anda beli disini, atau anda menginginkan website sesuai keinginan anda bisa langsung hubungi saya'>
      <Loading loading={loading} />
      <section className='container mx-auto relative'>
        <div className='absolute top-0 right-2 bg-slate-900 text-white rounded-b-xl p-2 font-mono shadow'>
          <p>{clock}</p>
        </div>
        <div className='flex justify-center items-center flex-col gap-8 h-screen custom-font text-5xl xl:text-7xl'>
          <Link href={'/work'}>
            <p className='-skew-y-12 hover:skew-y-0 hover:bg-black/5 hover:backdrop-filter hover:backdrop-blur-md hover:p-2 hover:scale-150 rounded'>Work</p>
          </Link>
          <Link href={'/about'}>
            <p className='skew-y-12 hover:skew-y-0 hover:bg-black/5 hover:backdrop-filter hover:backdrop-blur-md hover:p-2 hover:scale-150 rounded'>About</p>
          </Link>
          <Link href={'/contact'}>
            <p className='-skew-y-12 hover:skew-y-0 hover:bg-black/5 hover:backdrop-filter hover:backdrop-blur-md hover:p-2 hover:scale-150 rounded'>Contact</p>
          </Link>
          <Link href={'/blog'}>
            <p className='skew-y-12 hover:skew-y-0 hover:bg-black/5 hover:backdrop-filter hover:backdrop-blur-md hover:p-2 hover:scale-150 rounded'>Blog</p>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
