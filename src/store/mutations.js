import {HANDLESLIDESTATUS, CHOICEMENUID} from './mutation_types'

export default {
  // 主页侧边导航条是否展开
  [HANDLESLIDESTATUS] (state, status) {
    state.slideStatus = status
  },
  // 选择侧边导航条选中菜单项ID
  [CHOICEMENUID] (state, menuId) {
    state.menuId = menuId
  }
}
