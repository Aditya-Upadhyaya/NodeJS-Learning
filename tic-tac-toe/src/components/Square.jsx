import { useState } from 'react'
export default function Square({ currentUser, changeUser , arrValue}) {
    const [value, setValue] = useState(null);
    function handleClick() {
        console.log("arr val in handle click: ", arrValue);
  
        setValue(currentUser);
        changeUser(arrValue);
    }

    return <button onClick={handleClick}>{value}</button>
}