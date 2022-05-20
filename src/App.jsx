import { useContext, useReducer } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import AppReducer from './reducers/AppReducer';
import { Context, ContextWrapper } from './context/AppContext';

import Index from './pages/Index';
import Product from './pages/Product';

const App = () => {

  const ctx = useContext(Context);
  const reducer = useReducer(AppReducer, ctx);

  return (
    <ContextWrapper value={ reducer }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ContextWrapper>
  )

}

export default App;