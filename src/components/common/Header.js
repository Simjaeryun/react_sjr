import { Link } from "react-router-dom";

export default function Header() {
    const path = process.env.PUBLIC_URL;
    return (
        <header className="header">
            <Link
                to={"/"}
                className="header_logo">
                <img src={`${path}/img/bear_logo.gif`} alt="" />
            </Link>
        </header>
    )
}