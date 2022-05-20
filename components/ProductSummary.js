import useCoffe from '../hooks/useCoffe'
import { moneyFormat } from '../helpers'
import Image from 'next/image'

export default function ProductSummary({ product }) {
    const { handleEditProductQuantity, handleDeleteProduct } = useCoffe()

    return (
        <div className='shadow p-5 mb-3 flex flex-col md:flex-row gap-10 items-center max-w-xs md:max-w-none mx-auto'>
            <div className='md:w1/6'>
                <Image
                    width={300}
                    height={400}
                    alt={`Imagen producto ${product.name}`}
                    src={`/assets/img/${product.imageUrl}.jpg`}
                />
            </div>

            <div className='md:w-4/6'>
                <p className='text-3xl font-bold'>{product.name}</p>
                <p className='text-xl font-bold mt-2'>Cantidad: {product.quantity}</p>
                <p className='text-xl font-bold text-amber-500 mt-2'>Precio: {moneyFormat(product.price)}</p>
                <p className='text-sm text-gray-700 mt-2'>Subtotal: {moneyFormat(product.price * product.quantity)}</p>
            </div>

            <div className='w-full md:w-auto'>
                <button
                    type='button'
                    className='bg-indigo-600 px-5 py-2 text-white font-bold upper-case shadow-md w-full flex justify-center'
                    onClick={() => handleEditProductQuantity(product.id)}
                >
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>

                        Editar
                    </div>
                </button>
                <button
                    type='button'
                    className='bg-red-700 flex px-5 py-2 text-white font-bold upper-case shadow-md w-full mt-3 justify-center'
                    onClick={() => handleDeleteProduct(product.id)}
                >
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>

                        Eliminar
                    </div>
                </button>
            </div>
        </div>
    )
}