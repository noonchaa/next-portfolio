import Back from "@/components/back"
import Layout from "@/components/layout"
import Loading from "@/components/loading/loading"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { client } from "utils/client"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from '@contentful/rich-text-types'

export const getStaticProps = async () => {
    const about = await client.getEntries({ content_type: 'about', 'fields.seoTitle': 'Suyono' })
    return {
        props: {
            data: about.items[0]
        },
        revalidate: 60
    }
}

const Contact = ({ data }: props) => {
    const [loading, setLoading] = useState(true);
    const { seoTitle, seoDesc, contact } = data.fields;
    const router = useRouter();
    
    const options = {
        renderNode: {
          [INLINES.HYPERLINK]: (node:any) => {
            return <a href={node.data.uri} target='_blank' rel="noreferrer">{node.content[0].value}</a>;
          }
        }
      }

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
                    {documentToReactComponents(contact,options)}
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
            contact: any
        }
    }
}

export default Contact;