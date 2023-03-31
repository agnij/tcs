import './style.less'
// import food from './module/food'
// import score from './module/score'
// const test = new food()
// test.seat()
import gameControl from './module/gamecontrol'
const control = new gameControl()
control.init()
setInterval(() => {
    console.log(control.dirction)
}, 1000)
