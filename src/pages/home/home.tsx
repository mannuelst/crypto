import "./home.css"

export function Home() {
    return (
        <div className="home">
            <div className="hero">
                <h2>Largest <br /> Crypto Marketplace</h2>
                <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore mero about cryptos.</p>

                <form >
                    <input type="text" placeholder="Search crypto..." />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div >
                <table className="crypto-table">
                    <thead>
                        <tr className="table-layout">
                            <th>#</th>
                            <th>Coins</th>
                            <th>Price</th>
                            <th style={{ textAlign: "center" }}>24h Change</th>
                            <th className="market-cap">Market Cap</th>
                        </tr>
                    </thead>
                </table>
                {/* <div className="table-layout">

                </div> */}

            </div>
        </div>
    )
}