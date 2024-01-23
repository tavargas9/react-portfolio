import Nav from './components/Navbar'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App;
