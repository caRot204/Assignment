
import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import LayoutAdmin from './components/pages/LayoutAdmin'
import ProductAdd from './components/products/ProductAdd'
import ProductEdit from './components/products/ProductEdit'
import Products from './components/products/Products'
import Categories from './components/categories/Categories'
import CategoryAdd from './components/categories/CategoryAdd'
import CategoryEdit from './components/categories/CategoryEdit'
import LayoutWebsite from './components/pages/LayoutWebsite'
import HomePage from './components/page/HomePage'
import AboutPage from './components/page/AboutPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<h1>Thống kê</h1>} />
          <Route path='products' element={<Products />} />
          <Route path='product-add' element={<ProductAdd />} />
          <Route path='product/:id/edit' element={<ProductEdit />} />
          <Route path='categories' element={<Categories />} />
          <Route path='category-add' element={<CategoryAdd />} />
          <Route path='category/:id/edit' element={<CategoryEdit />} />
        </Route>
        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path='aboutPage' element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
