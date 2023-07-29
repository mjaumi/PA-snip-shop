import './App.css';
import Banner from './components/Banner/Banner';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PopularBrands from './components/PopularBrands/PopularBrands';
import ProductList from './components/ProductList/ProductList';
import SellOnSocialMedia from './components/SellOnSocialMedia/SellOnSocialMedia';
import Testimonial from './components/Testimonial/Testimonial';
import TrendingProductList from './components/TrendingProductsList/TrendingProductList';

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <Banner />
      <TrendingProductList />
      <ProductList />
      <FeaturedProducts />
      <PopularBrands />
      <SellOnSocialMedia />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
