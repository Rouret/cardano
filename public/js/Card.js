class Card{
    constructor(label = "C",translate = 0, rotate = 0){
        this.id = uuidv4()
        this.label = label
        this.translate = translate
        this.rotate = rotate
    }

    getStyle(){
        return `transform :  rotate(${this.rotate}deg);`
    }

    getHtml(){
        return `<div class="card" id="${this.id}" style="${this.getStyle()}"><div class="card-back"><div class="card-label">${this.label}</div></div></div>`
    }
}