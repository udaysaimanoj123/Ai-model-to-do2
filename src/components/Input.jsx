import { forwardRef } from "react";
const Input=forwardRef(function Input({label,textarea,...props},ref){
    const classes='bg-stone-200  w-full p-1 rounded-sm border-b-2 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600';
    
    return(
        <p className="flex flex-col my-1">
            <label className="text-sm font-bold uppercase text-stone-500 ">{label}</label>
            {textarea ?<textarea  ref={ref} className={classes} {...props}/> :<input  ref={ref} className={classes} {...props}/>}
        </p>
    );
})
export default Input;