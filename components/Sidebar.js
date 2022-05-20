import useCoffe from '../hooks/useCoffe'
import Category from './Category'
import Image from 'next/image'

export default function Sidebar() {
    const { categories } = useCoffe()

    return (
        <>
            <div className='p-5 flex items-center justify-center pt-10'>
                <Image width={300} height={100} src='/assets/img/logo.svg' />
            </div>

            <nav className='mt-5'>
                {categories.map(category => (
                    <Category key={category.id} category={category} />
                ))}
            </nav>

            <div className='w-full flex justify-center flex-1 items-end py-8'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </div>
        </>
    )
}