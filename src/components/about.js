import Layout from "../pages/layout";

const contents = () => {
  return (
        <section className="about">
            <div className="about_container">
                <div className="mini">
                    <div className="content_1">
                        <div className="photo">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="abstract">
                            <h2 className="abstract_name">west__cold</h2>
                            <div className="line"></div>
                            <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                        </div>
                    </div>
                    <div className="content_2">
                        <p className="introduce">안녕하세요, 저는 서찬이라고 합니다. 나날이 성장하고 발전하는 것을 즐기는 사람입니다. 언제나 새로운 도전을 즐기며 적극적으로 나아가는 성격을 가지고 있습니다. 주변 사람들과 소통을 중요시하며 친절하고 협력적인 성향을 가지고 있습니다. 항상 포기하지 않고 열정적으로 목표를 향해 나아가는 것을 좋아합니다. 함께 즐거움과 성취를 공유할 수 있는 좋은 동료가 되고 싶습니다.</p>
                        <div className="more">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
      </section>
  )
}

export default contents
