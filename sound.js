class Sound {

    audio = null

    constructor() {
        this.audio= new Audio("./music/welcome.ogg");
        this.audio.loop = true
        this.audio.play();
    }

    switchBgTo(musicName){
        this.audio.loop = !(musicName === 'win' || musicName === 'lose');
        this.audio.pause()
        this.audio.src = `./music/${musicName}.ogg`
        this.audio.play();
    }

    playFlip() {
        const audio = new Audio("./music/flip.ogg")
        audio.play();
    }
    playMatched() {
        const audio = new Audio("./music/matched.ogg")
        audio.play()
    }

}