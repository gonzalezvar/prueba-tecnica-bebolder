import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import  Navbar  from './components/navbar/Navbar';
import  Search  from './components/search/Search';
import  Support  from './components/support/Support';


export const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>   
      <Footer/>
    </div>
  )
}

export default App