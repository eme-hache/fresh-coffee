import useCoffe from '../hooks/useCoffe'
import Category from './Category'
import Image from 'next/image'

export default function Sidebar() {
    const { categories, handleMenuToggle, isMenuOpen } = useCoffe()

    return (
        <>
            <div className='p-8 md:py-12 flex items-center justify-between md:justify-center border-b md:border-0'>
                <div className='w-32 h-20'>
                    <Image width={300} height={180} src='/assets/img/logo.svg' />
                </div>


                <div className='md:hidden flex'>
                    <button
                        type='button'
                        onClick={handleMenuToggle}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <nav className={`${!isMenuOpen ? 'h-0 overflow-hidden' : 'mt-5'} md:h-auto`}>
                {categories.map(category => (
                    <Category key={category.id} category={category} />
                ))}
            </nav>
        </>
    )
}