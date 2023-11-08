import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './Pages/Home';
import Basket from './Pages/Basket';
import Login from './Pages/Login';
import { Provider } from 'react-redux';
import store from './store/store';
import SideBar from './components/SideBar';
import { NavigationContextProvider } from './api/NavigationContext';
import Warning from './Pages/Warning';
import AppFooter from './components/AppFooter';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Licensing from './Pages/Licensing';
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {
  return (
    <div className="flex flex-col">
      <NavigationContextProvider>
        <NavBar />
        <SideBar />
      </NavigationContextProvider>
      <div className="px-2 mt-24">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/warning" element={<Warning/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/licensing" element={<Licensing/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        </Routes>
      </div>
      <AppFooter />
    </div>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
