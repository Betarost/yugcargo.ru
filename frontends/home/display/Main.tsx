import { Cemjsx, Ref, Fn } from "cemjs-all"
import home from '@images/home2.jpg'

export default function () {
  return (
    <div class="presa-inner">
      <div class="presa-info">
        <h1 class="title-main">
          {/* <span class="bracket">{`«`}</span> */}
          Экспедиторская компания
          {/* <span class="bracket">{`»`}</span> */}
        </h1>
        <p class="text-main">Профессионализм нашей команды обеспечивает экономию времени в портовом экспедировании и таможенном оформлении товаров, минимизируя простои транспорта, демередж и хранение контейнеров</p>
        <button
          class="btn btn__primary"
          onclick={() => {
            window.scrollTo({
              top: document.querySelector("#application").offsetTop - 75,
              behavior: "smooth"
            })
          }}
        >
          Получить консультацию
        </button>
      </div>
      <div class="presa-image">
        <img src={home} alt="Таможенном оформлении товаров" />
      </div>
    </div>
  )
}