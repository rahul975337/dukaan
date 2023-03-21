import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
export default function Search() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`search ${isFocused ? "focused" : ""}`}>
      <input
        type="text"
        value={value}
        placeholder="Enter a word"
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {value && (
        <AiOutlineClose className="close" onClick={() => setValue("")} />
      )}
    </div>
  );
}
