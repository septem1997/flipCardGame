class CardManager{

    static setRandomPosition(cardList,item) {
        const cardListLength =  cardList.length
        let position = Math.floor(Math.random() * cardListLength)
        while (cardList[position % cardListLength]) {
            position++
        }
        cardList[position % cardListLength] = item
    }

    static createCardList(row,column){
        const cardListLength = row*column
        const cardList = new Array(cardListLength)
        for (let i = 0; i < cardListLength / 2; i++) {
            let newCard = {
                status: 'hidden'
            }
            newCard = Object.assign(newCard, this.cardGroup[i%this.cardGroup.length])
            this.setRandomPosition(cardList,newCard)
            this.setRandomPosition(cardList,JSON.parse(JSON.stringify(newCard)))
        }
        return cardList
    }

    static cardGroup = [
        {
            name: '鼠'
        }, {
            name: '牛'
        }, {
            name: '虎'
        }, {
            name: '兔'
        }, {
            name: '龙'
        }, {
            name: '蛇'
        }, {
            name: '马'
        }, {
            name: '羊'
        }, {
            name: '猴'
        }, {
            name: '鸡'
        }, {
            name: '狗'
        }, {
            name: '猪'
        },]

}