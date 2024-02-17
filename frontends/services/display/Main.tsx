import { Cemjsx } from "cemjs-all"
import services from '@json/service'

const RenderSkills = function ({ items }) {
    return (
        <div class="services-skills">
            {
                items.map(item => {
                    return (
                        <div class="services-skills_item">
                            <div class="services-skills_item-circle">
                                <img src={item.icon} alt={item.desc} />
                            </div>
                            {/* <h5 class="services-skills_item-title">{item.category}</h5> */}
                            <div class="services-skills_item-line"></div>
                            <p class="services-skills_item-desc">{item.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default function () {
    return (
        <div class="services-inner">
            <div class="title">
                <div>
                    <h2 class="title-main">Услуги</h2>
                    <div class="title-desc_wrap">
                        <span class="title-desc">Что мы предлагаем?</span>
                        <div class="arrow">
                            <div class="arrow-line"></div>
                            <div class="arrow-rect">

                            </div>
                        </div>
                    </div>

                </div>
                <p class="title-text">
                    Географическое расположение нашей компании, в городе <span class="text__fiolet">Новороссийске</span>, позволяет быстро и качественно предоставлять профильные услуги своим клиентам. </p>
            </div>


            <RenderSkills items={services} />

        </div>
    )
}