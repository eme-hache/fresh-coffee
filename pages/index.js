import Product from '../components/Product'
import useCoffe from '../hooks/useCoffe'
import Layout from '../layout/Layout'

export default function Home() {
  const { currentCategory } = useCoffe()

  return (
    <Layout page={`Menú ${currentCategory?.name || ''}`}>
      <h1 className='text-4xl font-black'>{currentCategory?.name}</h1>

      <p className='text-xl md:text-2xl mt-10 mb-5'>Elige y personaliza tu pedido a continuación</p>

      <div className='grid gap-4 grid-cols-[minmax(auto,_450px)] md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center'>
      {currentCategory?.products?.map(product => (
        <Product key={product.id} product={product} />
      ))}
      </div>
    </Layout>
  )
}
