import ProductSummary from '../components/ProductSummary'
import useCoffe from '../hooks/useCoffe'
import Layout from '../layout/Layout'

export default function Summary() {
    const { order } = useCoffe()

    return (
        <Layout page='Resumen'>
            <h1 className='text-4xl font-black'>Resumen</h1>
            <p className='text-xl md:text-2xl mt-10 mb-5'>Revisa tu Pedido</p>

            {order.length === 0 ? (
                <p className='text-center text-xl md:text-2xl'>No hay elementos en tu pedido</p>
            ) : (
                order.map(product => (
                    <ProductSummary key={product.id} product={product} />
                ))
            )}
        </Layout>
    )
}