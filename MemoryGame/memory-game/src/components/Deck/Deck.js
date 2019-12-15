function shuffleCards(arr) {
    const _array = arr.slice(0)
    for (let i = 0; i < arr.length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }
    return _array
}

export default function createDeck() {
    let card_num = 0;
    const cards = [
        `card1`,
        `card2`,
        `card3`,
        `card4`,
        `card5`,
        `card6`,
        `card7`,
        `card8`,
        `card9`
    ].reduce((acc, type) => {
        acc.push({
            id: card_num++,
            type
        })
        acc.push({
            id: card_num++,
            type
        })
        return acc
    }, [])
    return shuffleCards(cards)
}