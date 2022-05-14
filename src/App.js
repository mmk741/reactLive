import logo from './logo.svg';
import './App.scss';
import Sidebar from './template/sidebar/Sidebar';
import MainHeader from './template/header/MainHeader';
import Body from './template/body/Body';
import Header from './Component/header/Header';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <>
{/* <div className='app-container'>
  <div className='app-layout'>
    <div className='app-layout__left'>
    <Sidebar/>
    </div>
    <div className='app-layout__right'>
    <MainHeader/>
    <Body/>
    </div>
  </div>
</div> */}


<Header/>


<Footer/>






   
    </>
  );
}

export default App;
