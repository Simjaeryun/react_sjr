export default function Header() {
    const path = process.env.PUBLIC_URL;
    return (
        <header className="header">
            <div className="header_logo">
                <img src={`${path}/img/bear_logo.gif`} alt="" />
            </div>
        </header>
    )
}