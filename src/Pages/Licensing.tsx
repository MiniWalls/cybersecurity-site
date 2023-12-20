import NavigationHint from "../components/NavigationHint";

const Licensing = (): JSX.Element => {

  return(
    <div className="justify-center mx-auto max-w-2xl bg-gray-100 my-8 p-4 rounded-xl">
      <h1 className="text-3xl">Licensing</h1>
      <div className="flex my-2">
        <p className="text-gray-700">License &nbsp;</p>
        <p className="text-blue-600">Creative Commons Attribution license</p>
      </div>
      <NavigationHint title="About licensing" text="Please read about the licensing used on this site" action="Aknowledged" showModal={true}/>
    </div>
  );
};

export default Licensing;