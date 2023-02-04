import { motion } from "framer-motion"
import Link from "next/link";

const CTA = () => {
    return (
        <div id="project" className="container grid grid-cols-1 gap-8 px-3 py-12 mx-auto lg:grid-cols-2 text-slate-900 w-full overflow-hidden">
            <div className="text-center">
                <motion.p whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.5 }} initial={{ y: '-100%', opacity: 0 }} className="text-3xl font-semibold tracking-tight">Web Development</motion.p>
                <motion.p initial={{ opacity: 0, x: '-100%' }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 0.5 }} className="mt-3">Pembuatan website adalah keahlian kami. Sebagai expert dalam bidang ini kami tidak &quot;asal bikin website&ldquo;, tetapi kami juga peduli dengan cara memajukan usaha Anda</motion.p>
                <Link href='#project'>
                    <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.5 }} className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-white transition-colors duration-300 bg-red-600 rounded-lg sm:w-auto">
                        Start now
                    </motion.p>
                </Link>
            </div>
            <div className="text-center">
                <motion.p whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.5 }} initial={{ y: '-100%', opacity: 0 }} className="text-3xl font-semibold tracking-tight">App Development</motion.p>
                <motion.p initial={{ opacity: 0, x: '100%' }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 0.5 }} className="mt-3">Indonesia kini memasuki era aplikasi mobile. Tim pengembang kami bisa membuat ide milik Anda menjadi aplikasi yang dimuat di Apple Store ataupun Google Play.</motion.p>
                <Link href='#project'>
                    <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.5 }} className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 transition-colors duration-300 transform bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 sm:w-auto">
                        Start now
                    </motion.p>
                </Link>
            </div>
        </div>
    )
}

export default CTA;