
import { useEffect, useState } from 'react'
export default function useArray(defaultValue) {

    const [array, setArray] = useState(defaultValue);

    function push(item) {
        setArray((prev) => [...prev, item]);
    }

    function remove(index) {
        /// lesson - don't update prev also dirctly in React we can only read it
        // setArray((prev)=>{
        //     prev.splice(index,1);
        //     console.log("prev val",prev);
        //     return [...prev];
        // })
        const newArr = array.filter((_, i) => i !== index);
        setArray(newArr);
    }

    function filter(predicate) {
        function mycall(val) {
            return predicate(val);
        }
        console.log("predicate", predicate);
        console.log("mycall", mycall);
        const newArr = array.filter(predicate);
        console.log("new aray in filter", newArr);
        setArray(newArr);
    }

    function update(index, item) {
        const newArr = JSON.parse(JSON.stringify(array));
        newArr[index]=item;
        setArray(newArr);
        console.log("new arr", newArr);
    }

    function clear(){
        setArray([])
    }

     function set(defaultValue) {
        setArray(defaultValue);
     }


    return {
        array, push, remove, filter, update, clear, set
    }
}