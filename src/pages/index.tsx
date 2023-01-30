import Layout from '@/components/layout';
import Loading from '@/components/loading/loading'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [clock, setClock] = useState('');
  const time = new Date().getHours();
  const curentDay = (time >= 0 && time <= 3) ? 'night' : (time >= 4 && time <= 10) ? 'morning' : (time >= 11 && time <= 16) ? 'day' : (time >= 17 && time <= 21) ? 'evening' : 'night';

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
      <section className='container mx-auto relative z-10'>
        <motion.div whileHover={{scale:1.2}} className='absolute top-0 right-2 bg-slate-900 text-white rounded-b-xl p-2 font-mono shadow'>
          <p>{clock}</p>
        </motion.div>
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
      <div className='absolute top-0 left-0 right-0 bottom-0 z-0 bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${curentDay}.jpg)`}}></div>
    </Layout>
  )
}
