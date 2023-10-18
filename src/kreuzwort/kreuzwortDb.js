const db = require('@cyclic.sh/dynamodb');

class KreuzwortDb extends Function {
    constructor(props) {
        super(props);
    }

    async getList() {
        const items = await db.collection('kreuzwort').list()
        console.log(items);
        return items;
    }

    async getFilteredList(userCount){
        let fullList = await this.getList();
        let filteredList = [];
        for (let i = 0; i < fullList.length; i++) {
            if (fullList[i].props.userCount == userCount){
                filteredList.push(fullList[i]);
            }
        }

        return filteredList;
    }

    async getItem(key) {
        const item = await db.collection('kreuzwort').get(key)
        return item;
    }

    async getNextKey(){
        let items = await this.getList();
        return items.length;
    }

}

module.exports = new KreuzwortDb;