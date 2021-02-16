import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import RecetaList from './components/RecetaList'

import CategoriaProvider from './context/CategoriaContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'

function App() {

  return (
    <CategoriaProvider>
       <RecetasProvider>
         <ModalProvider>

            <Header />
            <div className="container mt-5">
               <div className="row">
                  <Form />
               </div>

               <RecetaList />
            </div>

       </ModalProvider>
       </RecetasProvider>
    </CategoriaProvider>
   
  );
}

export default App;
