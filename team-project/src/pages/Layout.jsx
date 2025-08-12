import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="">
            <nav>
                <div className="">
                    <Link className="a7" to={"/"}>Home</Link>
                    <Link className="a5" to={"/about"}>About</Link>
                    <Link className="a6" to={"/pricing"}>Pricing</Link>
                </div>
            </nav>

            <Outlet />
            <header>
                 <div className="logo"></div>
       <a href="" className="con">Contact Us</a>
       <hr className="hr" />
       <div />
            </header>
        
          
        </div>
    )
}