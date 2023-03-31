export default class snack {
    head: HTMLElement;
    bodys: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snack')!
        this.head = document.querySelector('#snack > div')!
        this.bodys = this.element.getElementsByTagName('div')!
    }

    get x() {
        return this.head.offsetLeft
    }

    get y() {
        return this.head.offsetTop
    }

    set x(value: number) {
        this.commonFun(value, 'x')
        // if (this.x === value) {
        //     return
        // }
        // // x 0-290
        // if (value < 0 || value > 290) {
        //     throw new Error('撞墙')
        // }
        // this.movebody()
        
        // this.head.style.left = value + 'px'
    }

    set y(value: number) {
        this.commonFun(value, 'y')
        // if (this.y === value) {
        //     return
        // }
        // // x 0-290
        // if (value < 0 || value > 290) {
        //     throw new Error('撞墙')
        // }
        // this.movebody()
        
        // this.head.style.top = value + 'px'
    }

    addbody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    movebody() {
        // 将后边身体位置变为前边身体位置 先改最后一结
        for (let i = this.bodys.length - 1; i > 0; i--) {
            let X = (this.bodys[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodys[i - 1] as HTMLElement).offsetTop;
            (this.bodys[i] as HTMLElement).style.left = X + 'px';
            (this.bodys[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    commonFun(value: number, type: string) {
        const t:number = type === 'x' ? this.x : this.y
        if (t === value) {
            return
        }
        // x 0-290
        if (value < 0 || value > 290) {
            throw new Error('撞墙')
        }
         
        if(type === 'x') {
            if(this.bodys[1] && (this.bodys[1] as HTMLElement).offsetLeft === value) {
                // 水平掉头
                if(value > this.x) {
                    value = this.x - 10
                } else {
                    value = this.x + 10
                }
            }
        } else {
            if(this.bodys[1] && (this.bodys[1] as HTMLElement).offsetTop === value) {
                if(value > this.y) {
                    value = this.y - 10
                } else {
                    value = this.y + 10
                }
            }
        }
        
        this.movebody()
        if (type === 'x') {
            this.head.style.left = value + 'px'
        } else {
            this.head.style.top = value + 'px'
        }
        this.checkbody()
    }

    checkbody() {
        for(let i = 1; i< this.bodys.length; i++) {
            let bd = this.bodys[i] as HTMLElement
            if(this.x === bd.offsetLeft && this.y === bd.offsetTop) {
                throw new Error('撞击')
            }
        }
    }

}