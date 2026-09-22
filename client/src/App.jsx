import { Route, Routes } from 'react-router-dom';
import './App.css';
import CategoryContainer from './components/HomePage/СategoryPages/CategoryContainer';
import AuthContainer from './components/Auth/AuthContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import AdminContainer from './components/Admin/AdminContainer';
import DeviceContainer from './components/DevicePage/DeviceContainer';
import BasketContainer from './components/Basket/BasketContainer';
import HomePageContainer from './components/HomePage/HomePageContainer';
import RegContainer from './components/Auth/RegContainer';



function App() {
  return (
    <div className="App">
        <HeaderContainer />
        <div className="content">
          <Routes>
            <Route path='/admin' element={<AdminContainer/>}/>
            <Route path='/auth' element ={<AuthContainer/>}/>
            <Route path='/' element={<HomePageContainer />}/>
            <Route path='/basket' element={<BasketContainer/>}/>
            <Route path='/registration' element={<RegContainer reg = {'Регистрация'}/>} />
            <Route path='/catalog' element ={<CategoryContainer/>}/>
            <Route path='/catalog/:category' element ={<CategoryContainer/>}/>
            <Route path='/catalog/device/:id' element ={<DeviceContainer/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
