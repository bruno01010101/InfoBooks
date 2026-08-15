import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router'
import Feed from './pages/Feed'
import Cadastro from './pages/Cadastro'
import Book from './pages/Book'
import Main from './componentes/main'

function Routes() {

  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Feed />} >
          <Route path="" element={< Main/>} />
          <Route path="/book" element={<Book />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  )
}

export default Routes
