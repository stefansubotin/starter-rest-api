class SimpleQuestionDb extends Function {
    async getFullList() {
        const db = require('./database');
        const items = await db.getFullList('simpleQuestion');
        return items;
    }

    async getWwmList(){
        let full = await this.getFullList();
        console.log('fullList');
        console.log(full);
        let results = [];
        for (let i = 0; i < full.results.length; i++){
            let item = await this.getItem(full.results[i].key);
            console.log(item);
            if (item.props.answerCount == 4) {
                console.log('added item')
                results.push(full.results[i]);
            }
        }
        console.log(results);
        return results;
    }

    async getItem(key) {
        const db = require('./database');
        const item = await db.getItem('simpleQuestion', key);
        return item;
    }
}

module.exports = new SimpleQuestionDb;