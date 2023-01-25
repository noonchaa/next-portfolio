import styles from './loading.module.css'

const Loading = ({ loading }: load) => {
    return (
        <>
            {loading && <div className='flex w-screen h-screen justify-center items-center fixed top-0 z-50 bg-slate-50'><div className={styles.spinner}></div></div>}
        </>
    )
}

type load = {
    loading: boolean;
}

export default Loading;