import { motion } from "framer-motion"
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
    const [curentText, setCurentText] = useState('Business');
    const texts = ['Business', 'Project', 'Website', 'Dream', 'Blog'];

    useEffect(() => {
        let index = texts.indexOf(curentText)
        const intervalId = setInterval(() => { index < texts.length - 1 ? setCurentText(texts[index + 1]) : setCurentText(texts[0]) }, 4000);

        return () => {
            clearInterval(intervalId)
        }
    }, [curentText])

    return (
        <div className="relative w-full h-screen">
            <video autoPlay muted loop preload="auto" className="h-full w-full object-cover object-left" poster="/hero.png">
                <source src="/hero.mp4" type="video/mp4"></source>
            </video>
            <div className="absolute top-0 w-full h-full bg-gray-900/40 z-0 text-white">
                <div className="container h-full mx-auto px-3 py-2 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-semibold text-white sm:text-4xl lg:text-6xl w-[20.5rem] sm:w-[25rem] lg:w-[41rem]">
                        Build your new&nbsp;
                        <motion.span animate={{ opacity:[0,1,1,0] }} transition={{ repeat: Infinity, duration: 4 }} className="text-red-600 inline-block">{curentText}</motion.span>
                    </h1>
                    <Link href='#project'>
                        <p className="px-5 lg:px-8 py-2 lg:py-4 mt-4 lg:mt-8 text-sm sm:text-lg lg:text-3xl font-medium text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500">Start project</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;