import React,{useState} from "react";

const Parent = ()=>{
    const [showModal,setShowModal] = useState(false);
    function modalChange(){
        document.getElementById('box').style.display = 'block';
        setShowModal(true)
    }
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <div className="child">
                <h2>Child Component</h2>
                <button onClick={modalChange}>Show Modal</button>
                <div id="box">
                    <h3>Modal Content</h3>
                    <p>This is the modal content.</p>
                </div>
            </div>
        </div>
    );
}

export default Parent;