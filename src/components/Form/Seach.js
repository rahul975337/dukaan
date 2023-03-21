import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
export default function Search() {
  const inputElt = useRef(null);
  const [value, setValue] = useState("");

  return (
    <div className="search">
      <input
        ref={inputElt}
        type="text"
        value={value}
        placeholder="Enter a word"
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <AiOutlineClose className="close" onClick={() => setValue("")} />
      )}
    </div>
  );
}
