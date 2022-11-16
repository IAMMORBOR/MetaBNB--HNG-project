import { createContext, useState} from "react";

export const PopUpToggle=createContext({
    isopenCommunity:false,
    setisOpen:()=>{}

})
export const PopUpProvider=({children})=>{
    const [isopenCommunity, setIsOpenCommunity]=useState(false);
    const value = {isopenCommunity, setIsOpenCommunity};
    return <PopUpProvider.Provider value={value}>{children}</PopUpProvider.Provider>
};

  

