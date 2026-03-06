import React,{useState} from 'react'
export default function TextForms(props) {
  const handleUpClick=()=>{
   // console.log("UpperCase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
  }

   const handleLoClick=()=>{
   // console.log("UpperCase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleCopy=()=>{

    var newText=document.getElementById("myBox")
    newText.select();
    navigator.clipboard.writeText(newText.value)
  }
    const handlecapitalizeFirstClick=()=>{
   // console.log("UpperCase was clicked"+text);
   if(text.length===0) return;
     let newText = text.charAt(0).toUpperCase()+text.slice(1);
    setText(newText)
  }

   const handleOnChange=(event)=>{
    setText(event.target.value)
  }
   const [text, setText] = useState('');
  return (
    <>
<div className="container" style={{color:props.mode===`dark`?`white`:`black`}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`black`}} id="myBox" rows="8"></textarea>   
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handlecapitalizeFirstClick}>Convert to First Letter Capital</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

</div>
<div className="Container my-4" style={{color:props.mode===`dark`?`white`:`black`}}>
<h1>Your Text Summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
    </>
  )
}
