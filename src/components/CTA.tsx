const CTA = () => {
    return (
        <div className="container grid grid-cols-1 gap-8 px-3 py-12 mx-auto lg:grid-cols-2 text-slate-900">
            <div className="text-center">
                <p className="text-3xl font-semibold tracking-tight">Web Development</p>
                <p className="mt-3">Pembuatan website adalah keahlian kami. Sebagai expert dalam bidang ini kami tidak "asal bikin website", tetapi kami juga peduli dengan cara memajukan usaha Anda</p>
                <a href="#" className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-white transition-colors duration-300 bg-red-600 rounded-lg sm:w-auto">
                    Start now
                </a>
            </div>
            <div className="text-center">
                <p className="text-3xl font-semibold tracking-tight">App Development</p>
                <p className="mt-3">Indonesia kini memasuki era aplikasi mobile. Tim pengembang kami bisa membuat ide milik Anda menjadi aplikasi yang dimuat di Apple Store ataupun Google Play.</p>
                <a href="#" className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 transition-colors duration-300 transform bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 sm:w-auto">
                    Start now
                </a>
            </div>
        </div>
    )
}

export default CTA;