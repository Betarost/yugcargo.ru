import { Cemjsx, Fn } from "cemjs-all"
import logo from '@images/logo5.png'
import socials from '@json/socials'

const RenderSocials = function ({ items }) {
  return (
    <ul class="socials_list">
      {
        items.map(item => {
          return (
            <li>
              <a
                href={item.url}
                class={["socials_link", `socials_link_${item.name.toLocaleLowerCase()}`]}
                style={`background-image: url(${item.icon});`}
                aria-label={item.name}
                onclick={Fn.link}
              >
                <span>{item.name}</span>
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default function () {
  return (
    <div class="footer-inner">
      <div class="footer-top">
        <a href="/" class="footer-logo">
          <img src={logo} alt="Crypto Emergency Developers" />
        </a>
        <RenderSocials items={socials} />
      </div>

      <p class="footer-text">Транспортно экспедиционная компания</p>
      <p class="footer-text">ООО «ЮГ КАРГО СЕРВИС»</p>
      <p class="footer-text">Copyright © 2012 - 2024 </p>
    </div>
  )
}