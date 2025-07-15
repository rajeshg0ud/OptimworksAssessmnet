/**import { useContext, useState } from "react";


export const DataContext=useContext(null);

function ContextProvider(props){
    const [searchData, setSearchData]= useState("hwllo");

    const searchDataa=(value)=>{
        setSearchData(value);
    }

    return(
        <DataContext.Provider value={searchDataa}> 
            {props.children}
        </DataContext.Provider>
    );
}

export default ContextProvider; */