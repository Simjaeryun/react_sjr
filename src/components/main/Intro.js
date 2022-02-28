export default function Intro() {
    const path = process.env.PUBLIC_URL;
    return (
        <section className="intro">
            <div className="inner">
                <div className="intro_content">
                    <div className="intro_img">
                        <img src={`${path}/img/intro_bear.png`} alt="" />
                    </div>
                    <div className="intro_txt">
                        <h1 className="intro_title">
                            개발자를 왜 하고싶을까?
                        </h1>
                        <p>
                            게임, 웹서핑, 영화 등 내가 좋아하는 취미들이 다 컴퓨터와 관련됐습니다.
                            그래서 컴퓨터로 할 수 있는 일을 하고싶었다고 생각했고 어떤일이 있을지 생각했습니다.
                            <br />
                            <br />
                            일시대의 흐름이 보다 개인에게 전문성을 필수적으로 요구하는 시대가 됐다고 생각합니다.
                            그 전문성을 대표하는 것 중 하나는 IT 기술이라고 생각합니다.
                            <br />
                            <br />
                            IT기술이 발전 할 수록 점점 일자리가 줄어들고 미래에는 단순노동을 하는 직종보다는
                            전문성을 가진 직업이 비전이 있다고 생각했습니다
                            그래서 내가 좋아하는 일을 할 수 있는 개발자를 택하게 됐습니다.
                        </p>
                    </div>
                </div>
                <div className="intro_content">
                    <div className="intro_txt">
                        <h1 className="intro_title">
                            입사 후 목표
                        </h1>
                        <p>
                            가장 눈앞에있는 첫번째 목표로는 회사에 입사하여 주어지는 업무에 최대한 빨리
                            적응하고 한명의 구성원으로서 몫을 하는것이 첫번째 목표입니다.
                            <br />
                            <br />
                            첫번째 목표를 달성하게 된다면 개발자로서 성장을 위해 회사에서 사용하는 기술들을
                            개인공부하고 최신 트렌드에 맞는 기술들을 계속해서 습득하는것이 제 목표입니다.
                            단 회사에도 도움이 될 수 있도록 회사와 관련된 개인공부를 할 것입니다. 회사와 관련된게
                            실제로도 저한테 도움이 될 것이라고 생각합니다.


                        </p>
                    </div>
                    <div className="intro_img">
                        <img src={`${path}/img/intro_bear2.png`} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}