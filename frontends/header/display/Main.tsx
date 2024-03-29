import { Cemjsx, Func, Static, Fn } from "cemjs-all"
import logo from '@images/logo5.png'

import menu from '@json/menu'

const RenderMenu = function ({ items }) {
  return (
    <ul class="header-list">
      {
        items.map(item => {
          return (
            <li>
              <a
                href={item.link}
                class="header-list_item"
                onclick={(e) => {
                  e.preventDefault()
                  window.scrollTo({
                    top: document.querySelector(item.link).offsetTop - 75,
                    behavior: "smooth"
                  })
                }}
              >
                {item.name}
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
    <div class="header-inner">
      <a href="/" class="header-logo">
        <img src={logo} alt="Экспедиторская компания «ЮГ КАРГО СЕРВИС»" />
      </a>
      <nav class="header-nav">
        <RenderMenu items={menu} />
      </nav>
    </div>
  )
}