import { useState } from "react"
export default function Visual() {
    const [isPopup, setIsPopup] = useState(false)
    const path = process.env.PUBLIC_URL;

    return (
        <>
            <section className="visual">
                <div className="inner">
                    <div className="visual_content">
                        <div className="visual_pic">
                            <div className="visual_pic_sun  animate__animated animate__fadeInDown">
                                <img
                                    src={`${path}/img/bear_logo_sunglass.png`}
                                    alt="" />
                            </div>
                            <div className="visual_pic_bear">
                                <img
                                    src={`${path}/img/pngegg.png`}
                                    alt="곰사진" />
                            </div>

                        </div>
                        <div className="visual_txt">
                            <div className="visual_desc">
                                <div className="visual_desc_txt">
                                    심재륜의 <span>Portfolio</span>
                                </div>

                                <div className="visual_desc_back"></div>
                            </div>
                            <h1 className="visual_title">
                                <div className="visual_title_txt">
                                    시작합니다!
                                </div>
                                <div className="visual_title_back"></div>
                            </h1>
                            <div className="visual_desc">
                                <div className="visual_desc_txt">
                                    곰과 함께 <span>Portfolio</span> 시작하기
                                </div>
                                <div className="visual_desc_back"></div>
                            </div>
                        </div>
                        <div className="visual_btn">
                            <button onClick={() => {
                                setIsPopup(true)
                            }}>
                                don't <br />Click
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {isPopup ? <Popup /> : null}
        </>
    )

    function Popup() {
        return (
            <section className="popup">
                <div className="popup_img">
                    <button
                        className="popup_close"
                        onClick={() => {
                            setIsPopup(false)
                        }}
                    >
                        Close
                    </button>
                    <img src={`${path}/img/surprise_panda.gif`} alt="" />
                </div>
            </section>
        )
    }
}