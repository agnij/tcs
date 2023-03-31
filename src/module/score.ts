export default class score{
    scorespan: HTMLElement;
    levelspan: HTMLElement;
    score = 0;
    level = 1;
    maxlevel: number;
    stepscore: number;
    constructor(maxlevel: number = 10, stepscore: number = 10) {
        this.scorespan = document.getElementById('score')!;
        this.levelspan = document.getElementById('level')!;
        this.maxlevel = maxlevel
        this.stepscore = stepscore
    }

    addScore() {
        this.score++
        this.scorespan.innerHTML = this.score + ''
        if(this.score % this.stepscore === 0) {
            this.addLevel()
        }
    }
    addLevel() {
        if(this.level < this.maxlevel) {
            this.level++
            this.levelspan.innerHTML = this.level + ''
        }
    }
}