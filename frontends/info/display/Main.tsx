import { Cemjsx, Fn } from "cemjs-all"
import info from '@json/info'

export default function () {
  return (
    <div class="info-inner">
      {
        info.map(item => {
          return (
            <a class="info_item" href={item.link} onclick={(e) => {
              Fn.link(e)
              try {
                if (item.name == "Местонахождение") {
                  ym(96504719, 'reachGoal', 'clk_map')
                }
              } catch (error) {
                console.error("ym=>", error)
              }
            }}>
              <div class="info_item-title">
                <img src={item.icon} alt={item.name} />
                <span class="info_item-subtitle">{item.name}</span>
              </div>
              <span
                class={["info_item-desc", item.center ? "info_item-desc__center" : null]}
              >
                {item.desc}
              </span>
            </a>
          )
        })
      }
    </div>
  )
}