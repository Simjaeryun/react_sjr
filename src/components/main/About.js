
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="about">
            <div className="inner">

            </div>
            <div className="about_content">
                <div
                    className="about_content_top"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.animationPlayState = "paused"
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.animationPlayState = "running"
                    }}
                >
                    <h2 className="about_content_row">tlawofbs123@naver.com로 연락 부탁드려요</h2>
                    <h2 className="about_content_row">tlawofbs123@naver.com로 연락 부탁드려요</h2>
                </div>

                <div
                    className="about_content_bottom"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.animationPlayState = "paused"
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.animationPlayState = "running"
                    }}
                >
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