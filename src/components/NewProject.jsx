import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";
import ErrorModal from "./ErrorModal";

export default function NewProject({ handleadd, handlecancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const duedateRef = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredtitle = titleRef.current.value;
    const entereddescription = descriptionRef.current.value;
    const enteredduedate = duedateRef.current.value;

    if (enteredtitle.trim() === '' || entereddescription.trim() === '' || enteredduedate.trim() === '') {
      modal.current.open();
      return;
    }

    handleadd({ title: enteredtitle, entereddescription, enteredduedate });
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    duedateRef.current.value = "";
  }

  return (
    <>
      <ErrorModal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-900 my-4">Invalid Input</h2>
        <p className="text-stone-850 text-md mb-4">Oops..looks like you forgot to enter a value</p>
        <p className="text-stone-850 text-md mb-4">Please provide a valid value for every input field.</p>
      </ErrorModal>
      <div className="w-full md:w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={handlecancel}>
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={handleSave}>Save</Button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" />
          <Input type="date" ref={duedateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}
