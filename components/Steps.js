import { useRouter } from 'next/router'

const steps = [
    { step: 1, name: 'Menú', url: '/' },
    { step: 2, name: 'Resumen', url: '/summary' },
    { step: 3, name: 'Datos y Total', url: '/total' },
]

export default function Step() {
    const router = useRouter()
    const path = router.pathname

    const calculateProgress = () => {
        switch (path) {
            case '/':
                return 2
            case '/summary':
                return 50
            case '/total':
                return 100
        }
    }

    return (
        <>
            <div className='flex justify-between mb-5'>
                {steps.map(step => (
                    <button
                        key={step.step}
                        className='text-2xl font-bold'
                        onClick={() => router.push(step.url)}
                    >
                        {step.name}
                    </button>
                ))}
            </div>

            <div className='bg-gray-100 mb-10'>
                <div className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white' style={{ width: `${calculateProgress()}%` }}>

                </div>
            </div>
        </>
    )
}