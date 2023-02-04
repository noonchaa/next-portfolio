import Link from "next/link";
import { motion } from "framer-motion"
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <motion.nav className="bg-slate-100 fixed top-0 left-0 right-0 shadow sm:sticky" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }}>
                <div className="container mx-auto px-3 py-2 flex justify-between items-center">
                    <Link href='/' className="font-bold text-2xl text-slate-900">
                        Suyono
                    </Link>
                    <button className="sm:hidden" onClick={() => setOpen(!open)}>
                        <motion.div className="w-6 h-1 bg-slate-900" animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}></motion.div>
                        <motion.div className="w-6 h-1 bg-slate-900 my-1" animate={open ? { scale: 0 } : { scale: 1 }}></motion.div>
                        <motion.div className="w-6 h-1 bg-slate-900" animate={open ? { rotate: 315, y: -8 } : { rotate: 0, y: 0 }}></motion.div>
                    </button>
                    <div className="hidden sm:flex justify-end items-center gap-4 text-slate-900">
                        <Link href='#project' className={router.asPath == '/#project' ? 'font-semibold text-red-600' : ''}>Project</Link>
                        <Link href='#contact' className={router.asPath == '/#contact' ? 'font-semibold text-red-600' : ''}>Contact</Link>
                        <Link href='/blog'>Blog</Link>
                    </div>
                </div>
            </motion.nav>
            <motion.div className="w-full fixed top-12 bg-slate-100 px-3 py-2 sm:hidden flex flex-col gap-2 text-slate-900" animate={open ? { x: '0px', opacity: 1 } : { x: '-100%' }} initial={{ opacity: 0 }}>
                <Link href='#project' className={router.asPath == '/#project' ? 'font-semibold text-red-600' : ''} onClick={() => setOpen(!open)}>Project</Link>
                <Link href='#contact' className={router.asPath == '/#contact' ? 'font-semibold text-red-600' : ''} onClick={() => setOpen(!open)}>Contact</Link>
                <Link href='/blog'>Blog</Link>
            </motion.div>
        </>
    )
}

export default Navbar;