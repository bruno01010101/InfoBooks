import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router'
import Feed from './pages/Feed'
import AuthForm from './pages/AuthForm'
import Book from './pages/Book'
import Main from './componentes/main'

function Routes() {

  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Feed />} >
          <Route path="" element={< Main/>} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/favorites" element={<Main isFavorite={true} />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={< AuthForm type='Login'/>} />
          <Route path="cadastro" element={<AuthForm type='Cadastro' />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  )
}

export default Routes
