import { useState, useEffect } from 'react'
import useCoffe from '../hooks/useCoffe'
import { moneyFormat } from '../helpers'
import Image from 'next/image'

export default function ProductModal() {
    const { handleClickModal, product, handleOrder, order } = useCoffe()
    const [isProductInOrder, setIsProductInOrder] = useState(false)
    const [quantity, setQuantity] = useState(1)
    
    useEffect(() => {
        if (order.some(item => item.id === product.id)) {
            setQuantity(order.find(item => item.id === product.id).quantity)
            setIsProductInOrder(true)
        }
    }, [product, order])

    return (
        <div className='flex flex-col-reverse md:flex-row gap-10'>
            <div className='w-full md:w-1/3 mb-12 md:mb-0 flex justify-center'>
                <Image
                    width={300}
                    height={400}
                    alt={`Imagen producto ${product.name}`}
                    src={`/assets/img/${product.imageUrl}.jpg`}
                />
            </div>

            <div className='md:w-2/3'>
                <div className='flex justify-end pt-12 md:pt-0'>
                    <button onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <h1 className='text-3xl font-bold mt-5'>
                    {product.name}
                </h1>

                <p className='mt-5 font-black text-5xl text-amber-500'>
                    {moneyFormat(product.price)}
                </p>

                <div className='flex gap-4 mt-5'>
                    <button
                        type='button'
                        onClick={() => {
                            if (quantity < 1) return

                            setQuantity(quantity - 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    <p className='text-3xl'>{quantity}</p>

                    <button
                        type='button'
                        onClick={() => {
                            if (quantity > 5) return

                            setQuantity(quantity + 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white mt-5 py-2 px-5 uppercase font-bold rounded'
                    onClick={() => handleOrder({ ...product, quantity })}
                >
                    {isProductInOrder ? 'Guardar Cambios' : 'Añadir al Pedido'}
                </button>
            </div>
        </div>
    )
}