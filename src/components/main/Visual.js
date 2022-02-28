export default function Visual() {
    const path = process.env.PUBLIC_URL;
    return (
        <section className="visual">
            <div className="inner">
                <div className="visual_content">
                    <img src={`${path}/img/pngegg.png`} alt="" />
                    <div className="visual_txt">
                        <p className="visual_desc">
                            심재륜의 <span>Portfolio</span>
                        </p>
                        <h1 className="visual_title">
                            시작합니다!
                        </h1>
                        <p className="visual_desc">
                            곰과 함께 <span>Portfolio</span> 시작하기
                        </p>
                    </div>
                    <div className="visual_btn">
                        <button>
                            don't <br />Click
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}