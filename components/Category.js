import useCoffe from '../hooks/useCoffe'
import Image from 'next/image'

export default function Category({ category }) {
    const { currentCategory, handleClickCategory } = useCoffe()
    const { id, name, icon } = category

    return (
        <button
            type='button'
            onClick={() => handleClickCategory(category)}
            className={`${currentCategory?.id === id ? 'bg-amber-400' : ''}  w-full border-y p-5 hover:bg-amber-400 text-2xl font-bold hover:cursor-pointer flex gap-4 items-center`}
        >
                <Image
                    width={70}
                    height={70}
                    src={`/assets/img/icono_${icon}.svg`}
                    alt='Icon image'
                />

                {name}
        </button>
    )
}