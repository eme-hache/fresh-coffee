import ProductModal from '../components/ProductModal'
import Sidebar from '../components/Sidebar'
import useCoffe from '../hooks/useCoffe'
import Modal from 'react-modal'
import Head from 'next/head'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#__next')

export default function Layout({ children, page }) {
    const { modal } = useCoffe()

    return (
        <>
            <Head>
                <title>Café - {page}</title>
                <meta name='description' content='Fresh Coffe' />
            </Head>

            <div className='md:flex'>
                <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                    <Sidebar />
                </aside>

                <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                    <div className='p-10'>
                        {children}
                    </div>
                </main>
            </div>

            <Modal isOpen={modal} style={customStyles}>
                <ProductModal />
            </Modal>
        </>
    )
}