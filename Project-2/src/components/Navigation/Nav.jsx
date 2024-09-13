import styles from "./Navigation.module.css"

export default function Nav()
{
    return(
        <div className={`${styles.navigation} container` }>
            <div>
                <img src="./images/Frame 2 1.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
            
        </div>
    )
}