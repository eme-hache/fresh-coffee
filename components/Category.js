import useCoffe from '../hooks/useCoffe'
import Image from 'next/image'

export default function Category({ category }) {
    const { currentCategory, handleClickCategory } = useCoffe()
    const { id, name, icon } = category

    return (
        <div className={`${currentCategory?.id === id ? 'bg-amber-400' : ''} flex gap-4 items-center w-full border p-5 hover:bg-amber-400`}>
            <Image
                width={70}
                height={70}
                src={`/assets/img/icono_${icon}.svg`}
                alt='Icon image'
            />

            <button
                type='button'
                className='text-2xl font-bold hover:cursor-pointer'
                onClick={() => handleClickCategory(category)}
            >
                {name}
            </button>
        </div>
    )
}