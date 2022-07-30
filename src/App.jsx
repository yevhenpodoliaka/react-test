import { useState } from 'react';
import Header from './components/Header/Header';
import TodoApp from './pages/TodoApp/TodoApp';
import NewsApp from './pages/NewsApp/NewsApp';
import ImagesApp from './pages/ImagesApp/ImagesApp';

export default function App () {
  const [currentPage, setCurrentPage] = useState('Todos')
  const handelCangePage = (e) => {
console.log(e.target.textContent);
    setCurrentPage(e.target.textContent)
  }
    return (
      <>
        <Header onClick={handelCangePage} />
      { currentPage==='Todos' &&<TodoApp/>}
      { currentPage==='News' &&<NewsApp/>}
      { currentPage==='Images' &&<ImagesApp/>}
      </>
    );
  }


