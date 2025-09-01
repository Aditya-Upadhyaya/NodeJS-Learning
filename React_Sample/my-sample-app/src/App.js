import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from 'react'

function App() {
  const [isDisable, setDisable] = useState(true);
  const scroolRef = useRef(null);
  const str = "ver 3900 questions for you to practice. Come and join one of the largest tech communities with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.Not only does LeetCode prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses."
  
  useEffect(()=>{
    console.log("ref value", scroolRef);
      const div = scroolRef.current;
      const handleScrollFunction = ()=>{
        if (div.scrollTop==div.scrollTopMax) {
          console.log("Condition met");
          setDisable(false);
        }
      }
      div.addEventListener('scroll', handleScrollFunction)
      return ()=>{
        div.removeEventListener('scroll', handleScrollFunction);
      }
  },[])
  
  return (
    <div className="App">
      <div className="mytest" ref={scroolRef}> 
        <p>{str}</p>
        <p>{str}</p>
        <p>{str}</p>
        <p>{str}</p>
        <p>{str}</p>
        <p>{str}</p>
      </div>
      <button onClick={()=> console.log('Clicked')} disabled={isDisable}
      >Click me</button>
    </div>
  );
}

export default App;
