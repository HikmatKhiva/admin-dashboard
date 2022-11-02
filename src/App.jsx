import { Header, Sidebar } from './components/export';
import { Home } from './Pages/exportPages';
function App() {
  return (
    <div className='app'>
      <Sidebar />
      <main >
        <Header />
        <Home />
      </main>
    </div>
  )
}
export default App
