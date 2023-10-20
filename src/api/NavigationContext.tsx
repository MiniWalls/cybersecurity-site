import { createContext, useContext, useState, ReactNode } from "react";

interface MyContextType {
  isButtonEnabled: boolean;
  toggleButton: () => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
}

interface MyContextProviderProps {
  children: ReactNode;
}

export function NavigationContextProvider({ children }: MyContextProviderProps) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const toggleButton = () => {
    setIsButtonEnabled((prev) => !prev);
  };

  const contextValue: MyContextType = {
    isButtonEnabled,
    toggleButton,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}
