import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router'
import Feed from './pages/Feed'
import AuthForm from './pages/AuthForm'
import Book from './pages/Book'
import Main from './componentes/main'
import Favorites from './pages/Favorites'
import NotFound from './componentes/404'

function Routes() {

  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Feed />} >
          <Route path="" element={< Main/>} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={< AuthForm type='Login'/>} />
          <Route path="cadastro" element={<AuthForm type='Cadastro' />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </RouterRoutes>
    </BrowserRouter>
  )
}

export default Routes
