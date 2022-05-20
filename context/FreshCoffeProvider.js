import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const FreshCoffeContext = createContext()

export default function FreshCoffeProvider({ children }) {
    const [currentCategory, setCurrentCategory] = useState({})
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])

    const getCategories = async () => {
        try {
            const res = await axios.get('/api/categories')
            setCategories(res.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleClickCategory = category => {
        setCurrentCategory(category)
    }

    const handleClickProduct = product => {
        setProduct(product)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleOrder = ({ categoryId, imageUrl, ...product }) => {
        if (order.some(item => item.id === product.id)) {
            const updatedOrder = order.map(item => item.id === product.id ? product : item)
            setOrder(updatedOrder)
        }
        else {
            setOrder([ ...order, product])
        }

        setModal(false)
    }

    useEffect(() => { getCategories() }, [])

    useEffect(() => { setCurrentCategory(categories[0]) }, [categories])
    
    return (
        <FreshCoffeContext.Provider
            value={{
                order,
                modal,
                product,
                categories,
                currentCategory,
                handleOrder,
                handleClickModal,
                handleClickProduct,
                handleClickCategory,
            }}
        >
            {children}
        </FreshCoffeContext.Provider>
    )
}