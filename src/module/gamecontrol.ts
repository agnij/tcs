import snack  from "./snack";
import food from "./food";
import score from "./score";
export default class gameControl {
    snack: snack;
    food: food;
    score: score;
    dirction: string = 'ArrowRight'
    // 记录是否结束
    islive = true
    constructor() {
        this.snack = new snack()
        this.food = new food()
        this.score = new score()
    }

    init() {
        document.addEventListener('keydown', this.keydown.bind(this)) 
        this.run()
    }
    keydown(event: KeyboardEvent) {
        this.dirction = event.key
    }
    run() {
        // 向上top减少 向下top增加 向左left减小 。。
        let x = this.snack.x
        let y = this.snack.y
        // 根据按键方向，修改x和y值
        switch(this.dirction) {
            case 'ArrowUp': 
            y-=10;
            break;
            case 'ArrowDown':
            y+=10;
            break;
            case 'ArrowLeft':
            x-=10;
            break;
            case 'ArrowRight':
            x+=10;
            break
        }
        // 吃
        this.checkeat(x, y)
        // 修改蛇的x和y
        try {
            this.snack.x = x
            this.snack.y = y 
        } catch (error) {
            alert('游戏结束')
            this.islive = false
        }
        this.islive &&  setTimeout(this.run.bind(this), 300 - (this.score.level-1)*30)
    }
    checkeat(x: number, y:number) {
        if(x === this.food.x && y === this.food.y) {
            this.food.seat()
            this.score.addScore() 
            this.snack.addbody()
        }
    }
}