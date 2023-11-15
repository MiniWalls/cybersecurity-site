interface ComponentProps {
 text: string,
 action: string
}

const NavigationHint = (props: ComponentProps): JSX.Element => {
  return(
    <div className="bg-white border-red-600 border-2">
      <div>
        <h1 className="text-4xl font-bold text-center mt-20 mb-10">{props.text}</h1>
        <h2 className="text-2xl font-semibold text-center mb-10">{props.action}</h2>
      </div>
      <div className="fixed inset-0 bg-black bg-opacity-25 z-10" />
    </div>
  );
};

export default NavigationHint;