import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="about">
            <div className="inner">
                <h1 className="about_title">
                    곰이 당신을 도와줄겁니다
                </h1>
            </div>
            <div className="about_content">
                <div className="about_content_top">
                    <h2 className="about_content_row">밑으로 내리면 Porfolio가 나옴</h2>
                    <h2 className="about_content_row">밑으로 내리면 Porfolio가 나옴</h2>
                </div>

                <div className="about_content_bottom">
                    <h2 className="about_content_row">
                        <Link to="/">portfolio</Link>
                        <Link to="/">portfolio</Link>
                        <Link to="/">portfolio</Link>
                        <Link to="/">portfolio</Link>
                        <Link to="/">portfolio</Link>
                    </h2>
                    <h2 className="about_content_row">
                        <Link to="/">portfolio</Link>
                        <Link to="/">portfolio</Link>
                        <Link to="/">portfolio</Link>
                        <Link to="/">portfolio</Link>
                        <Link to="/">portfolio</Link>
                    </h2>
                </div>
            </div>
        </section>
    )
}