import { useRouter } from "next/router";

const Back = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.asPath == '/work' ? router.push('/') : router.back()} className='cursor-pointer absolute top-0 right-2 bg-slate-900 text-white rounded-b-xl p-2 font-mono shadow'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
        </div>
    )
}

export default Back;