import Head from "next/head";

const Seo = ({title,desc}:seo) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Head>
    )
}

type seo = {
    title: string;
    desc: string;
}

export default Seo;