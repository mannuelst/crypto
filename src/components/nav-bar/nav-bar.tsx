import Logo from "../../assets/logo.png"
import "./nav-bar.css"
export function NavBar() {
    return (
        <nav>
            <div className="nav-bar">
                <div >
                    <a href="/" className="crypto">

                        <img src={Logo} alt="crypto" />
                        <h1>Crypto</h1>
                    </a>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Home</li>
                </ul>
                <div className="nav-right">
                    <select name="" id="">
                        <option value="usd">USD</option>
                        <option value="usd">EUR</option>
                        <option value="aoa">AOA</option>
                    </select>
                </div>
            </div>

        </nav>

    )
}