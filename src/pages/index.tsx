import CTA from '@/components/CTA';
import Hero from '@/components/hero';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';

export default function Home() {

  return (
    <Layout title='Suyono' desc='Saya seorang front-end developer. Jika anda tertarik membuat website seperti ini bisa langsung anda beli disini, atau anda menginginkan website sesuai keinginan anda bisa langsung hubungi saya'>
      <Hero />
      <CTA />
      <Navbar />
    </Layout>
  )
}
