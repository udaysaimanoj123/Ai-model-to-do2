import Image from "../assets/no-projects.png";
import Button from "./Button";
export default function Noproject({add}){
    return(
        <div className="text-center w-2/3 mt-24">
            <img className="w-16 h-16 object-contain mx-auto" src={Image} alt="" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-600 mb-4">Select a Project or Create new Project</p>
            <p>
                <Button onClick={add}>Create Project</Button>
            </p>
        </div>
    );
}