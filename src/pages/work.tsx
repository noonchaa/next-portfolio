import Back from "@/components/back";
import Layout from "@/components/layout";
import Loading from "@/components/loading/loading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { client } from "utils/client";

export const getStaticProps = async () => {
    const about = await client.getEntries({ content_type: 'about', 'fields.seoTitle': 'Suyono' })
    return {
        props: {
            data: about.items[0]
        },
        revalidate: 60
    }
}

const Work = ({ data }: props) => {
    const [loading, setLoading] = useState(true);
    const { seoTitle, seoDesc, work } = data.fields;
    const router = useRouter();

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

    if (!data) router.back();
    return (
        <Layout title={seoTitle} desc={seoDesc}>
            <Loading loading={loading} />
            <section className='container mx-auto relative px-2 py-12 lg:py-16'>
                <Back />
                <div className="grid grid-cols-1 gap-6 lg:gap-8 relative">
                    {work.map((item, index) => (
                        <div key={index} className='shadow-xl overflow-hidden border border-slate-200 rounded-md lg:rounded-xl'>
                            <iframe src={item.fields.link} width='104%' height='500px' sandbox="" loading="lazy"></iframe>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

type props = {
    data: {
        fields: {
            seoTitle: string;
            seoDesc: string;
            work: any[]
        }
    }
}

export default Work;