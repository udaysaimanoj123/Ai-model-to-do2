export default function Button(props) {
  return (
    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-850" {...props}>
      {props.children}
    </button>
  );
}
