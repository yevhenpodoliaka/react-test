import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getImagesPage,
  getImagesQuery,
  getImagesItems,
  setQuery,
  getImg,
  incrementPage,
} from '../redux/imagesSlice';
import Searchbar from '../components/Searchbar/Searchbar';
import { Grid } from '../components/Grid/Grid';
import { GalleryItem, GalleryItemImg } from './SearchApp.styled';

export default function SearchImgApp() {
  const dispatch = useDispatch();
  const items = useSelector(getImagesItems);
  console.log(items);
  const query = useSelector(getImagesQuery);
  const page = useSelector(getImagesPage);

  useEffect(() => {
    dispatch(getImg());
  }, [dispatch, query, page]);

  const onSubmit = value => {
    dispatch(setQuery(value));
  };
  return (
    <>
      <Searchbar placeholder="search images..." onSubmit={onSubmit} />
      <Grid>
        {items.map(({ id, webformatURL, largeImageURL, tags, setImageURL }) => (
          <GalleryItem key={id}>
            <GalleryItemImg
              src={webformatURL}
              alt={tags}
            />
          </GalleryItem>
        ))}
      </Grid>
    </>
  );
}
