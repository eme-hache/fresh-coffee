import useCoffe from '../hooks/useCoffe'
import Category from './Category'
import Image from 'next/image'

export default function Sidebar() {
    const { categories } = useCoffe()

    return (
        <>
            <Image width={300} height={100} src='/assets/img/logo.svg' />

            <nav className='mt-10'>
                {categories.map(category => (
                    <Category key={category.id} category={category} />
                ))}
            </nav>
        </>
    )
}