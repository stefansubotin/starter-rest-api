class KreuzwortNew extends Function {
    constructor(props) {
        super(props)
    }

    async createNewKreuzwort(body) {
        // const db = require("./kreuzwortDb")
        // const split = require("./kreuzwortNewSplitter")
        // let quiz = await db.getRandomQuiz(body.userCount)
        // let res = await split(quiz, body.users, body.room)
        // return res
        return {
            "answer": body.type
        }
    }
}

module.exports = new KreuzwortNew;