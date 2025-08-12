import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="">
            <nav>
                <div className="">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/pricing"}>Pricing</Link>
                </div>
            </nav>

            <Outlet />

            <footer>
                footer
            </footer>
        </div>
    )
}