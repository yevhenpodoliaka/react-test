import { useDispatch, useSelector } from 'react-redux';
import { getImagesItems, setQuery,getImg } from '../redux/imagesSlice';
import Searchbar from '../components/Searchbar/Searchbar';
import { Grid } from '../components/Grid/Grid';


export default function SearchImgApp() {

    const dispatch = useDispatch()

    const items = useSelector(getImagesItems);
    console.log(items);
    
    const onSubmit = (value) => {
        dispatch(setQuery(value))
       dispatch(getImg())
    }
    return <>
        <Searchbar placeholder='search images...' onSubmit={onSubmit}/>
        <Grid>
            
        </Grid>
    </>
    
    
}