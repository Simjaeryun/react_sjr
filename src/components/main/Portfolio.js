import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Portfolio() {
    const path = process.env.PUBLIC_URL;
    const [portfolio, setPortfolio] = useState([])
    const [isOn, setIsOn] = useState(true);
    useEffect(() => {
        axios.get(`${path}/data/portfolio.json`)
            .then((data) => {
                setPortfolio(data.data.data)
            })
    }, [])

    return (
        <section className="portfolio">
            <div
                className={isOn ? "portfolio_content on" : "portfolio_content"}
            >
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
            <div className={!isOn ? "portfolio_content on" : "portfolio_content"} >
                <div className="inner">
                    <h1 onClick={() => {
                        setIsOn(true);
                    }}>
                        PORTFOLIO
                    </h1>
                    {portfolio.map((data, index) => {
                        return (
                            <div className="portfolio_card" key={index}>
                                <div className="portfolio_card_pic">
                                    <img src={`${path}/${data.pic}`} alt="portfolio page 사진" />
                                </div>
                                <div className="portfolio_card_txt">
                                    <h2 className="portfolio_card_title">
                                        {data.name}
                                    </h2>
                                    <p className="portfolio_card_desc">
                                        {data.info}
                                    </p>
                                    <ul className="portfolio_card_link">
                                        <li><a href={data.github_url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                                        <li><a href={data.insta_url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        <li>tlawofbs123@naver.com</li>



                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )

}