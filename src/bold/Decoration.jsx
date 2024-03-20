
import { Style } from "@mui/icons-material";
import "./text.css"
import { useState } from 'react'


function Decoration(){
   
    
    const [isBold, setIsBold] = useState(false);
    const [input, setInputText] = useState("");
    const [FontStyle, setFontStyle] = useState(false);
    const [lowerStyle, setlowerStyle] = useState(false);
    const [upperStyle,setupperStyle ] = useState(false);



    const ChangeFont = () => {
        setIsBold(!isBold);
    };
     const changestyle = () => {
        setFontStyle(!FontStyle );
    };
    const lower = () => {  
        setlowerStyle(!lowerStyle);
    };
    const upper = () => {  
        setupperStyle(!upperStyle);
    };
    return (
        <div>
            <div className='parent'>
                <input type="text"  className={isBold ? "bold" :lowerStyle? "lower": "normal"} id={FontStyle ? "italic" :upperStyle ? "upper": "normal"}
                  value={input} 
                  onChange={(e) => setInputText(e.target.value)}/>
                <button onClick={ChangeFont}  className={isBold ? "normal" : "Bold"}>{isBold ? "normal" : "Bold"} </button>
                <button onClick={changestyle}  >{FontStyle ? "normal" : "italic"}</button>
                <button onClick={lower}  >{lowerStyle ? "normal" : "lower"}</button>
                <button onClick={upper}  >{upperStyle ? "normal" : "upper"}</button>


            </div>
        </div>
    );
    
}
    export default Decoration;

