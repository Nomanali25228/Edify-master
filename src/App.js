import './App.css';
import Featured from './component/featuredcourses/Featured';
import LongCard from './component/longcard/LongCard';
import Navbar from './component/navbar/Navbar';
import Browser from './component/browserFuture/Browser';
import Header from './component/header/Header';
import Learning from './component/learingfuture/Learning';
import Footer from './component/footer/Footer';
import EdifyCollege from './component/edifycollege/EdifyCollege';

function App() {
  return (
    <>
      <div className='appmain'>
        <Navbar />
        <Header />
        <Browser />
        <Featured />
        <LongCard />
        <Learning />
        <EdifyCollege />
        <Footer />
      </div>
    </>
  );
}

export default App;
