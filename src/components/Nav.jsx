export default function Nav()
{
    return(
        <div className="Nav container">
            <nav>
                <div>
                    <img src="/images/brand_logo.png" alt="" />
                </div>
                <ul className="menu">
                    <li href = "#">Menu</li>
                    <li href = "#">Location</li>
                    <li href = "#">About</li>
                    <li href = "#">Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    )
}