import { useEffect, useState } from "react"
import { useRef } from "react"


export default function Portfolio() {
    const path = process.env.PUBLIC_URL;
    const por = useRef(null);
    const porCtt = useRef(null);
    const [isOn, setIsOn] = useState(true);
    useEffect(() => {

    })


    return (
        <section className="portfolio" ref={por}>
            <div
                className={isOn ? "portfolio_content on" : "portfolio_content"}
                ref={porCtt}>
                <div className="inner">
                    <h1
                        className="animate__animated animate__bounce"
                        onClick={() => {
                            setIsOn(false);

                        }}>
                        PORTFOLIO
                    </h1>
                    <p>제목을 클릭하시면 포트폴리오가 보입니다.</p>
                </div>
            </div>
            <div className={!isOn ? "portfolio_content on" : "portfolio_content"} ref={porCtt}>
                <div className="inner">
                    <h1 onClick={() => {
                        setIsOn(true);
                    }}>
                        PORTFOLIO
                    </h1>
                    <div className="portfolio_card">
                        <div className="portfolio_card_pic">
                            <img src={`${path}/img/portfolio1.png`} alt="" />
                        </div>
                        <div className="portfolio_card_txt">
                            <h2 className="portfolio_card_title">
                                포트폴리오
                            </h2>
                            <p className="portfolio_card_desc">
                                이건포트폴리오
                            </p>
                        </div>
                    </div>
                    <div className="portfolio_card">
                        <div className="portfolio_card_pic">
                            <img src={`${path}/img/portfolio1.png`} alt="" />
                        </div>
                        <div className="portfolio_card_txt">
                            <h2 className="portfolio_card_title">
                                포트폴리오
                            </h2>
                            <p className="portfolio_card_desc">
                                이건포트폴리오
                            </p>
                        </div>
                    </div>
                    <div className="portfolio_card">
                        <div className="portfolio_card_pic">
                            <img src={`${path}/img/portfolio1.png`} alt="" />
                        </div>
                        <div className="portfolio_card_txt">
                            <h2 className="portfolio_card_title">
                                포트폴리오
                            </h2>
                            <p className="portfolio_card_desc">
                                이건포트폴리오
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}