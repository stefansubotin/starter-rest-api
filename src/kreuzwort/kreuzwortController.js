class KreuzwortController extends Function {
    constructor(props){
        super(props);
    }

    async parseCall(body){
        return {
            "Test": "controller"
        }
        // if (body.type == 1) {
    //     const kwNew = require('./kreuzwortNew')
    //     let res = await kwNew(body)
    //     return res;
    //     return {
    //         Test: 'hat geklappt'
    //     }
    // }
    // if (body.type == 0) {
    //     const kwUpdate = require('./kreuzwortUpdate')
    //     let res = await kwUpdate(body)
    //     return res
    // }
    }
    
}

module.exports = new KreuzwortController;
        