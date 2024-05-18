import { Children } from "react";
export default function Statt({children}:{children:React.ReactNode}){
    return(
           <div className="p-1 bg-green-200 rounded-lg">
                {children}
           </div>
                
            
    )
};