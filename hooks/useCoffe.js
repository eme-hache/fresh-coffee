import { FreshCoffeContext } from '../context/FreshCoffeProvider'
import { useContext } from 'react' 

export default function useCoffe() {
    return useContext(FreshCoffeContext)
}