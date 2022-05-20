import { moneyFormat } from '../helpers'
import useCoffe from '../hooks/useCoffe'
import Layout from '../layout/Layout'
import { useEffect } from 'react'

export default function Total() {
    const { order, userName, setUserName, placeOrder, total } = useCoffe()

    const checkOrder = () => {
        return order.length === 0 || userName === ''
    }
    
    useEffect(() => { checkOrder() }, [order, checkOrder])

    return (
        <Layout page='Total'>
            <h1 className='text-4xl font-black'>Total y Confirmar Pedido</h1>
            <p className='text-xl md:text-2xl my-10'>Confirma tu Pedido a Continuación</p>

            <form onSubmit={placeOrder}>
                <div>
                    <label
                        htmlFor='name'
                        className='block uppercase text-slate-800 font-bold text-xl'
                    >
                        Nombre:
                    </label>

                    <input
                        type='text'
                        id='name'
                        className='bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md'
                        value={userName}
                        onChange={evt => setUserName(evt.target.value)}
                    />

                    <div className='mt-10'>
                        <p className='text-2xl'>
                            Total a Pagar: {''}
                            <span className='font-bold'>
                                {moneyFormat(total)}
                            </span>
                        </p>
                    </div>

                    <div className='mt-5'>
                        <input
                            type='submit'
                            className={`${checkOrder() ? 'bg-indigo-100' : 'bg-indigo-500 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center cursor-pointer transition`}
                            value='Confirmar Pedido'
                            disabled={checkOrder()}
                        />
                    </div>
                </div>
            </form>
        </Layout>
    )
}