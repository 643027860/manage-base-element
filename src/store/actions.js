import {HANDLESLIDESTATUS, CHOICEMENUID} from './mutation_types'

export default {
  // 是否打开侧边导航导航条
  handleSlideStatus ({commit}, status) {
    commit(HANDLESLIDESTATUS, status)
  },
  // 选择侧边导航条选中菜单项ID
  choiceMenuId ({commit}, id) {
    commit(CHOICEMENUID, id)
  }
}
