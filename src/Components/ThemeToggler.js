import React,{useContext} from "react";
import ThemeContext from "../Context/ThemeContext";


const ThemeToggler = ()=> {

const [themeMode, setThemeMode] = useContext(ThemeContext)

    return(
        <div onClick={()=>{
            setThemeMode(themeMode === "light"? "dark":"light" ) 
        }}>
            <p>{themeMode === "light"? "dark mode":"light mode"}</p>
        </div>
    )


}

export default ThemeToggler;