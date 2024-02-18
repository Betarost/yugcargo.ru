import { Cemjsx, Fn, front, Func } from "cemjs-all"

export default function () {
    return (
        <div
            class="sale_content"
            onclick={() => {
                Func.close()
                window.scrollTo({
                    top: document.querySelector("#application").offsetTop - 75,
                    behavior: "smooth"
                })
                try {
                    ym(96504719, 'reachGoal', 'clk_sale')
                } catch (error) {
                    console.error("ym=>", error)
                }
            }}
        >
            <p class="sale_text">Успей заказать консультацию и получи <span class="sale_text__accent">бесплатный</span> расчет стоимости услуги!</p>
            <button class="btn btn__white">
                Подать заявку!
            </button>
        </div>
    )
}