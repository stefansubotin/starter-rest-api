export default async function(body){
    const db = require("./kreuzwortDb")
    const split = require("./kreuzwortNewMessager")
    let quiz = await db.getRandomQuiz(body.userCount)
    let res = await split(quiz, body.users, body.room)
    return res
}