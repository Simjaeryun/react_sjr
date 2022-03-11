import { useState } from "react"

export default function Aside() {
    const [sideBtnClick, setSideBtnClick] = useState(false);

    return (
        <>
            <aside className={sideBtnClick ? "side on" : "side"}>
                <div
                    className="side_btn"
                    onClick={() => {
                        sideBtnClick ? setSideBtnClick(false) : setSideBtnClick(true);

                    }}
                >
                    <div className="side_btn_top"></div>
                    <div className="side_btn_mid"></div>
                    <div className="side_btn_bottom"></div>
                </div>
                <div className="side_column_txt">
                    speak to a bear
                </div>
            </aside>
            {sideBtnClick ? <SideContent /> : null}
        </>
    )
    function SideContent() {
        return (
            <section className="side_content">
                <div className="inner">
                    <ul className="side_content_list">
                        <li><span>Visual</span></li>
                        <li><span>Email</span></li>
                        <li><span>About</span></li>
                        <li><span>Portfolio</span></li>
                    </ul>
                    <div className="side_content_contact">
                        <h1 className="side_content_contact_title">contact sjr</h1>
                        <ul>
                            <li>010 5785 9879</li>
                            <li>https://github.com/Simjaeryun</li>
                            <li>tlawofbs123@naver.com</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}