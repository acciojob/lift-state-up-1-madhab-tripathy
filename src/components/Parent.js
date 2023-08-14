import React,{useState} from "react";

const Parent = ()=>{
    const [showModal,setShowModal] = useState(false);
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <div className="child">
                <h2>Child Component</h2>
                <button onClick={()=>{setShowModal(true)}}>Show Modal</button>
            </div>
        </div>
    );
}

export default Parent;