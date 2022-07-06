import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Diory from './containers/Diory/Diory';
import Layout from './components/Layout/Layout';
import Admin from './containers/Admin/Admin';
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout></Layout>}>
              <Route path='/' element={<Diory></Diory>}/>
              <Route path='/pages/diory' element={<Diory></Diory>}/>
              <Route path='/pages/adminpanel' element={<Admin></Admin>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
