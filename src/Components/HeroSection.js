import React,{useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = ()=> {
const  [newTheme, setNewTheme] = useContext(ThemeContext)

const theme = useContext(ThemeContext)[0];

const currentTheme = AppTheme[theme];



return(
    <div style={{
        padding:"1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color:`${currentTheme.textColor}`,
        textAlign:"center"
        
    }} >
        <h1>Context API theme toggler</h1>
        <p>This is a paragraph</p>
        <button 
        onClick={()=>{
            setNewTheme(newTheme === "light"? "dark":"light" ) 
        }}
        
        style={{backgroundColor:"#e84118",
                        padding:"10px 150px",
                        fontSize:"20px",
                        color:"#ffffff",
                        border:`${currentTheme.border}`}}>Change theme</button>
    </div>
)


}
export default HeroSection;