import React,{ createContext, useState } from "react";
export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
    const [sideBar, setSidebar] = useState(false);
    const value = {
        sideBar,
        setSidebar
    }
    return <SidebarContext.Provider value={value}>
        {children}
    </SidebarContext.Provider>
}
