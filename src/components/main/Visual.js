export default function Visual() {
    const path = process.env.PUBLIC_URL;
    return (
        <section className="visual">
            <div className="inner">
                <div className="visual_content">
                    <img src={`${path}/img/pngegg.png`} alt="" />
                    <div className="visual_txt">
                        <p className="visual_desc">
                            helping you <span>hoomans</span>
                        </p>
                        <h1 className="visual_title">
                            create curiosity
                        </h1>
                        <p className="visual_desc">
                            with our <span>bear</span> hands
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