import Layout from "@/components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import { client } from "utils/client"

export const getStaticProps = async () => {
    const blogHome = await client.getEntries({ content_type: 'blogHome', 'fields.seoTitle': 'Coding Mandiri' })
    const posts = await client.getEntries({ content_type: 'blog', 'order': '-sys.createdAt', 'limit': 10 })
    const ads = await client.getEntries({ content_type: 'ads', 'fields.ads': 'list ads' })
    return {
        props: {
            posts: posts.items,
            blogHome: blogHome.items[0],
            ads: ads.items[0]
        },
        revalidate: 60
    }
}

const Blog = ({ posts, blogHome, ads }: any) => {
    const { seoTitle, seoDesc, bgHero, title, heroDesc } = blogHome.fields;
    const { adsLinkTop, adsImgTop, adsLinkMobile, adsImgMobile, adsLinkWeb, adsImgWeb } = ads.fields;

    return (
        <Layout title={seoTitle} desc={seoDesc}>
            <div className="container mx-auto">
                <a href={adsLinkTop} target='_blank' rel="noreferrer">
                    <img src={'https:' + adsImgTop.fields.file.url} alt={adsLinkTop} width='100%' height='auto' />
                </a>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-4 lg:mt-8 px-2 lg:px-0">
                    <div className="relative h-96 lg:h-auto flex justify-center items-center col-span-2">
                        <Image src={'https:' + bgHero.fields.file.url} alt='Coding Mandiri' fill className="object-cover rounded-md" priority />
                        <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 p-3 text-center">
                            <p className=" font-semibold text-4xl text-white mb-6">{title}</p>
                            <p className=" font-semibold text-2xl text-white">{heroDesc}</p>
                        </div>
                    </div>
                    <div className="hidden lg:grid grid-cols-1 grid-rows-2 gap-2">
                        {posts.slice(0, 2).map((item: any, index: number) => (
                            <div key={index} className='h-64 bg-slate-200 rounded-md p-3 relative'>
                                <p className=" text-2xl font-semibold mb-3">{item.fields.title}</p>
                                <p>{item.fields.post.content[0].content[0].value.slice(0, 200)}</p>
                                <p className="absolute bottom-3 right-3 font-medium italic">Selengkapnya...</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-2 grid grid-cols-1 lg:grid-cols-3 gap-2 mt-4 lg:mt-12">
                <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className='h-64 bg-slate-200 rounded-md p-3 relative'>
                        <p className=" text-2xl font-semibold mb-3">Post 1</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at enim fermentum lacinia. Vivamus non tortor eget nibh ornare feugiat ut lobortis nisl. Mauris gravida tellus enim, eu</p>
                        <p className="absolute bottom-3 right-3 font-medium italic">Selengkapnya...</p>
                    </div>
                    <div className='h-64 bg-slate-200 rounded-md p-3 relative'>
                        <p className=" text-2xl font-semibold mb-3">Post 2</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at enim fermentum lacinia. Vivamus non tortor eget nibh ornare feugiat ut lobortis nisl. Mauris gravida tellus enim, eu</p>
                        <p className="absolute bottom-3 right-3 font-medium italic">Selengkapnya...</p>
                    </div>
                    <div className='h-64 bg-slate-200 rounded-md p-3 relative'>
                        <p className=" text-2xl font-semibold mb-3">Post 3</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at enim fermentum lacinia. Vivamus non tortor eget nibh ornare feugiat ut lobortis nisl. Mauris gravida tellus enim, eu</p>
                        <p className="absolute bottom-3 right-3 font-medium italic">Selengkapnya...</p>
                    </div>
                    <div className='h-64 bg-slate-200 rounded-md p-3 relative'>
                        <p className=" text-2xl font-semibold mb-3">Post 1</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at enim fermentum lacinia. Vivamus non tortor eget nibh ornare feugiat ut lobortis nisl. Mauris gravida tellus enim, eu</p>
                        <p className="absolute bottom-3 right-3 font-medium italic">Selengkapnya...</p>
                    </div>
                    <div className='h-64 bg-slate-200 rounded-md p-3 relative'>
                        <p className=" text-2xl font-semibold mb-3">Post 2</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at enim fermentum lacinia. Vivamus non tortor eget nibh ornare feugiat ut lobortis nisl. Mauris gravida tellus enim, eu</p>
                        <p className="absolute bottom-3 right-3 font-medium italic">Selengkapnya...</p>
                    </div>
                    <div className='h-64 bg-slate-200 rounded-md p-3 relative'>
                        <p className=" text-2xl font-semibold mb-3">Post 3</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at enim fermentum lacinia. Vivamus non tortor eget nibh ornare feugiat ut lobortis nisl. Mauris gravida tellus enim, eu</p>
                        <p className="absolute bottom-3 right-3 font-medium italic">Selengkapnya...</p>
                    </div>
                    <div className='h-64 bg-slate-200 rounded-md p-3 relative'>
                        <p className=" text-2xl font-semibold mb-3">Post 1</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at enim fermentum lacinia. Vivamus non tortor eget nibh ornare feugiat ut lobortis nisl. Mauris gravida tellus enim, eu</p>
                        <p className="absolute bottom-3 right-3 font-medium italic">Selengkapnya...</p>
                    </div>
                    <div className='h-64 bg-slate-200 rounded-md p-3 relative'>
                        <p className=" text-2xl font-semibold mb-3">Post 2</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at enim fermentum lacinia. Vivamus non tortor eget nibh ornare feugiat ut lobortis nisl. Mauris gravida tellus enim, eu</p>
                        <p className="absolute bottom-3 right-3 font-medium italic">Selengkapnya...</p>
                    </div>
                    <div className='h-64 bg-slate-200 rounded-md p-3 relative'>
                        <p className=" text-2xl font-semibold mb-3">Post 3</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet dui at enim fermentum lacinia. Vivamus non tortor eget nibh ornare feugiat ut lobortis nisl. Mauris gravida tellus enim, eu</p>
                        <p className="absolute bottom-3 right-3 font-medium italic">Selengkapnya...</p>
                    </div>
                    <a href={adsLinkMobile} target='_blank' rel="noreferrer" className="lg:hidden">
                        <img src={'https:' + adsImgMobile.fields.file.url} alt={adsLinkMobile} width='100%' height='auto' />
                    </a>
                </div>
                <div className="hidden lg:block p-3 border-l-2">
                    <p className="mb-2 underline font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                        HTML
                    </p>
                    <p className="mb-2 underline font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                        CSS
                    </p>
                    <p className="mb-2 underline font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                        JavaScript
                    </p>
                    <p className="mb-2 underline font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                        React
                    </p>
                    <p className="mb-2 underline font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                        Angular
                    </p>
                    <div className="flex justify-center items-start mt-6">
                    <a href={adsLinkWeb} target='_blank' rel="noreferrer">
                        <img src={'https:' + adsImgWeb.fields.file.url} alt={adsLinkWeb} width='100%' height='auto' />
                    </a>
                    </div>
                </div>
            </div>
            <footer className="container mx-auto border-t-2 text-center p-2">
                Copyright Noonchaa @{new Date().getFullYear()}
            </footer>
        </Layout>
    )
}

export default Blog;