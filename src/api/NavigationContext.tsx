import { createContext, useContext, useState, ReactNode } from "react";

interface NavigationContextType {
  isButtonEnabled: boolean;
  toggleButton: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
}

interface NavigationContextProviderProps {
  children: ReactNode;
}

export function NavigationContextProvider({ children }: NavigationContextProviderProps) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const toggleButton = () => {
    setIsButtonEnabled((prev) => !prev);
  };

  const contextValue: NavigationContextType = {
    isButtonEnabled,
    toggleButton,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
}
