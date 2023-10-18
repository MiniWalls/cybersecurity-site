import { BsFillBasketFill } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { selectProducts } from '../store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  const products = useSelector(selectProducts);
  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/login');
  }

  return(
    <div className="fixed top-0 w-screen h-16 px-8
    flex flex-row
    text-3xl bg-white text-white shadow-lg">
      <button className="ml-4 my-2 px-2 hover:bg-gray-200 rounded-md">
        <RxHamburgerMenu size="48" className="text-black"/>
      </button>
      <h1 className="font-bold text-gray-800 mr-5 ml-4 
      relative flex items-center hover:cursor-pointer" onClick={() => navigate("/")}>
          Shop</h1>
        <div className="ml-auto flex flex-auto max-w-fit">
          <NavBarIcon icon={<BsFillBasketFill />} url="/basket" />
        </div>
        <span className="text2xl font-semibold text-red-600 mt-8 flex mr-4 relative left-[-10px] 
        h-10 w-10 bg-slate-100 rounded-full justify-center">{products.length}</span>
        <button className="mr-4 text-gray-900 font-semibold" onClick={() => handleClick()}>
          Sign in
        </button> 
    </div>
  );
};


const NavBarIcon = ({ icon, url }: { icon: JSX.Element, url: string }): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate(url);
  };

  return(
      <div className="navbar-icon group" data-testid="navbar-icon" id={url} onClick={handleClick}>
          {icon}
      </div>
  );
};

export default NavBar;