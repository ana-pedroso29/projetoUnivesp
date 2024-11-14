// pages/index.tsx


import Slider from '../components/Slider';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className='bg-custom-fundo'>
      
      <main >
        <div >
          <Slider />
        </div>

        <div >
          <ContentSection />
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;
