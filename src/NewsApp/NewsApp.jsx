import  { useState,useEffect} from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import newsApiservice from '../service/newsApiService'
export default function NewsApp() {
    const[query,setQuery]=useState('')
    const[page,setPage]=useState(1)
    const [items, setItems] = useState([])
    useEffect(() => {
        if (query === '') {
            return
        }
         newsApiservice().then(console.log)
    },[query])

    const handelSubmit = (data) => {
      setQuery(data) 
    }
    return <>
        <Searchbar placeholder={'search news'} onSubmit={ handelSubmit} />
    </>
}