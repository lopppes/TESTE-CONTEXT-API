import React,{ useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import './button.css'

export const Button = (props) => {
    const {theme} = useContext(ThemeContext)
    return(
        <div className="button-div button-10">
        <button {...props} style={{color: theme.color, backgroundColor: theme.background}}>
        </button>
        </div>
    )
}