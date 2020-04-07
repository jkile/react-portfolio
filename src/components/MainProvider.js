import React, { useState, useContext } from "react";
import MainContext from "./Context";

const MainProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MainContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MainContext.Provider>
  )
}

export default MainProvider;