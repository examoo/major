import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import CollectionDetail from './pages/CollectionDetail';
import Shop from './pages/Shop';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />
            }
          />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/collection/:slug" element={<CollectionDetail />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
