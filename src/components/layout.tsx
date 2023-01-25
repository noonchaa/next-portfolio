import Seo from "./SEO";

const Layout = ({ title, desc, children }: layout) => {
    return (
        <main className="min-w-full min-h-screen bg-slate-50">
            <Seo title={title} desc={desc} />
            {children}
        </main>
    )
}

type layout = {
    title: string;
    desc: string;
    children: React.ReactNode;
}

export default Layout;