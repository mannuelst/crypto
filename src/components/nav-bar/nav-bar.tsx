import { useContext } from "react"
import Logo from "../../assets/logo.png"
import { CoinContext } from "../../context/coin-context"
import "./nav-bar.css"
import { Currency } from "../../types"
export function NavBar() {
    const { } = useContext(CoinContext)
    const currencyHandler = (e) => {
        switch (e.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" } as Currency)
                break
            }
        }

    }


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
                    <select name="" id="" onChange={currencyHandler}>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>
                </div>
            </div>

        </nav>

    )
}