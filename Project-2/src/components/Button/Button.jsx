import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css"


export default function Button ({isoutline,icon,text,...rest})
{
    return(
        <button {...rest} className={isoutline?styles.outline_button:styles.primary_button} >
            
            {icon}
            {text}
        </button>
    )
}