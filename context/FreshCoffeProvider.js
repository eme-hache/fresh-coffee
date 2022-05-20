import { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import axios from 'axios'

export const FreshCoffeContext = createContext()

export default function FreshCoffeProvider({ children }) {
    const [currentCategory, setCurrentCategory] = useState({})
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [categories, setCategories] = useState([])
    const [userName, setUserName] = useState('')
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)
    const router = useRouter()

    const getCategories = async () => {
        try {
            const res = await axios.get('/api/categories')
            setCategories(res.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleClickCategory = category => {
        setCurrentCategory(category)
        setIsMenuOpen(false)
        router.push('/')
    }

    const handleClickProduct = product => {
        setProduct(product)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleEditProductQuantity = id => {
        setProduct(order.filter(product => product.id === id)[0])
        setModal(true)
    }

    const handleDeleteProduct = id => {
        setOrder(order.filter(product => product.id !== id))
        toast.success('Producto eliminado')
    }

    const handleOrder = ({ categoryId, ...product }) => {
        if (order.some(item => item.id === product.id)) {
            const updatedOrder = order.map(item => item.id === product.id ? product : item)
            setOrder(updatedOrder)

            toast.success('Guardado Correactamente')
        }
        else {
            setOrder([ ...order, product])

            toast.success('Agregado al Carrito')
        }

        setModal(false)
    }

    const placeOrder = async evt => {
        evt.preventDefault()

        try {
            await axios.post('/api/orders', { userName, total, order, date: Date.now().toString() })

            toast.success('Pedido Realizado Correctamente')
            
            setCurrentCategory(categories[0])
            setUserName('')
            setOrder([])
            setTotal(0)

            setTimeout(() => {
                router.push('/')
            }, 3000);
        }
        catch {
            toast.error('Error al guardar la orden')
        }
    }

    useEffect(() => { getCategories() }, [])

    useEffect(() => { setCurrentCategory(categories[0]) }, [categories])

    useEffect(() => {
        setTotal(order.reduce((total, product) => (product.price * product.quantity) + total, 0))
    }, [order])
    
    return (
        <FreshCoffeContext.Provider
            value={{
                total,
                order,
                modal,
                product,
                userName,
                isMenuOpen,
                categories,
                currentCategory,
                placeOrder,
                setUserName,
                handleOrder,
                handleMenuToggle,
                handleClickModal,
                handleClickProduct,
                handleClickCategory,
                handleDeleteProduct,
                handleEditProductQuantity,
            }}
        >
            {children}
        </FreshCoffeContext.Provider>
    )
}