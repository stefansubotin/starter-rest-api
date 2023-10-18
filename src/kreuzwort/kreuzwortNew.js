class KreuzwortNew extends Function {
    constructor(props) {
        super(props)
    }

    async createNewKreuzwort(body) {
        const messager = require("./kreuzwortNewMessager")
        let quiz = await this.getRandomQuiz(body.userCount);
        return quiz;
        // let res = await messager(quiz, body.users, body.room)
        // return res;
    }

    async getRandomQuiz(userCount) {
        const db = require('./kreuzwortDb')
        let allQuizes = await db.getFilteredList(userCount);
        return allQuizes;
        // let index = this.getRandomInt(0, allQuizes.length - 1);
        // let key = allQuizes[index].key;
        // return await db.getItem(key);
    }

    //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}

module.exports = new KreuzwortNew;