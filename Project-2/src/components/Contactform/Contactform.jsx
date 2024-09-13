import Button from "../Button/Button"
import styles from "./Contactform.module.css"
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { useState } from "react";




export default function Contactform()
{
    const [name , setName]=useState("tanjiro");
    const [email,setEmail]=useState("tanjiro@gmail.com");
    const [text,setText]=useState("all is not well");
    
    const onSubmit=(event)=>{
        event.preventDefault();
        
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

        

    }
    


    return(
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                <Button text ="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
                <Button text ="VIA CALL" icon={<IoCall fontSize="24px"/>}/>
                </div>
                <Button 
                isoutline={true}
                text ="VIA EMAIL FORM" icon={<IoMail fontSize="24px"/>}/>

                <form  onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                    </div>
                    <div className={styles.form_control}>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" />
                    </div>
                    <div className={styles.form_control}>
                    <label htmlFor="name">Text</label>
                    <textarea name="text" rows={8} />
                    </div>
                    <div 
                style=
                {{
                    display: "flex",
                    justifyContent:"end"
                }}>
                <Button text ="SUBMIT BUTTON" />
                </div>
                <div> {name+" "+email+" "+text}</div>
                

                </form>
                
               
                
                
                


                
            </div>
            <img src="./images/freepik--Character--inject-44.jpg" alt="" />
        </section>
        
    )
}