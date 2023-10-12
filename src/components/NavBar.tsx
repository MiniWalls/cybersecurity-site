import { BsFillBasketFill } from 'react-icons/bs';

const NavBar = (): JSX.Element => {
  
  function handleClick() {
    window.location.href = "/login";
  }

  return(
    <div className="fixed top-0 w-screen h-16 m-0
    flex flex-row
    text-3xl bg-white text-white shadow-lg">
      <h1 className="font-bold text-gray-800 mr-5 ml-4 
      relative flex items-center hover:cursor-pointer" onClick={() => window.location.href="/"}>
          Shop</h1>
        <div className="ml-auto mr-4">
          <NavBarIcon icon={<BsFillBasketFill />} url="/basket" />
        </div>
        <button className="mr-4 text-gray-900 font-semibold" onClick={() => handleClick()}>
          Sign in
        </button>
    </div>
  );
};


const NavBarIcon = ({ icon, url }: { icon: JSX.Element, url: string }): JSX.Element => {
  const handleClick = () => {
      window.location.href = url;
  };

  return(
      <div className="navbar-icon group" data-testid="navbar-icon" id={url} onClick={handleClick}>
          {icon}
      </div>
  );
};

export default NavBar;