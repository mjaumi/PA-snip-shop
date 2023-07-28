import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PopularBrands from './components/PopularBrands/PopularBrands';
import SellOnSocialMedia from './components/SellOnSocialMedia/SellOnSocialMedia';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <PopularBrands />
      <SellOnSocialMedia />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
