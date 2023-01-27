import Back from "@/components/back";
import Layout from "@/components/layout";
import Loading from "@/components/loading/loading";
import { useEffect, useState } from "react";
import { client } from "utils/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
    const about = await client.getEntries({ content_type: 'about', 'fields.seoTitle': 'Suyono' })
    return {
        props: {
            data: about.items[0]
        },
        revalidate: 60
    }
}

const About = ({ data }: props) => {
    const [loading, setLoading] = useState(true);
    const { seoTitle, seoDesc, about } = data.fields;
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
                <article className="prose">
                    {documentToReactComponents(about)}
                </article>
            </section>
        </Layout>
    )
}

type props = {
    data: {
        fields : {
            seoTitle: string;
            seoDesc: string;
            about: any
        }
    }
}

export default About;