import { useState } from "react";
import './accordion.css';

function Accordion({data }){
const [expandedIndex, setExpandable] = useState(-2);

    const items= data.map((item, index)=>{
        
        const isExpanded= index=== expandedIndex; /*decides true or false based on 
        present index, along with expandedIndex(clicked index)
        if isExpanded true then only this item.content will be shown on screen*/

        const handleClick=(index)=>{
            if(index==expandedIndex){
                setExpandable(-2);}
            else{
            setExpandable(index);}
         } 

        return(
        <div key={item.key} >
            <div  className="label" onClick={()=>{handleClick(index)}}>{item.label}</div>    
             { isExpanded && <div className="content">{item.content}</div>} 
        </div>
        )
    });

    return(
        <div> {items}</div>
    )
};

export default Accordion;