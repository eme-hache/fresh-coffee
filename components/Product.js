import { moneyFormat } from '../helpers'
import useCoffe from '../hooks/useCoffe'
import Image from 'next/image'

export default function Product({ product }) {
    const { handleClickProduct, handleClickModal } = useCoffe()
    const { name, imageUrl, price } = product

    return (
        <div className='border p-3 flex flex-col'>
            <Image
                src={`/assets/img/${imageUrl}.jpg`}
                alt={`Imagen platillo ${name}`}
                width={400}
                height={500}
            />

            <div className='p-5 flex-1 flex flex-col'>
                <h3 className='text-2xl font-bold'>
                    {name}
                </h3>

                <p className='mt-5 font-black text-4xl text-amber-500'>
                    {moneyFormat(price)}
                </p>

                <div className='flex flex-1 items-end justify-end'>
                    <button
                        type='button'
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
                        onClick={() => {
                            handleClickProduct(product)
                            handleClickModal()
                        }}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}