import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText= text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase",'success');
    }
    const handleLoClick = () => {
        let newText= text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase",'success');
    }
    const handleClear = () => {
        let newText= '';
        setText(newText);
        props.showAlert("All text cleared",'success');
    }
    
    const handleOnChnage = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
     <>
        <h1 className={`text-${props.mode==='light'?'dark': 'light'}`}>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChnage} rows="8"></textarea>
        </div>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>ConvertToUpperCase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>ConvertToLowerCase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>ClearAll</button>
         <div className={`text-${props.mode==='light'?'dark': 'light'} container my-3`}>
             <h1 >Text Summary</h1>
             <p><b>{text.length}</b> characters <b>{text.split(" ").length-1}</b> words</p>
             <p> TimeToRead: <b>{0.008 * text.split(" ").length} min</b></p>
             <h2>Preview</h2>
             <p>{text}</p>
         </div>
     </>
    )
}
