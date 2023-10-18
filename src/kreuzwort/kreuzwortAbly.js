class KreuzwortAbly extends Function{
    
    constructor(props){
        super(props);
    }

    async getAbly() {
        const Ably = require('ably');
        const ably = new Ably.Realtime.Promise('0sa0Qw.VDigAw:OeO1LYUxxUM7VIF4bSsqpHMSZlqMYBxN-cxS0fKeWDE');
        await ably.connection.once('connected');
        return ably;
    }

    async getStarterChannel(ably1, room){
        const Ably = require('ably');
        const ably = new Ably.Realtime.Promise('0sa0Qw.VDigAw:OeO1LYUxxUM7VIF4bSsqpHMSZlqMYBxN-cxS0fKeWDE');
        await ably.connection.once('connected');
        let channelId = 'room' + room;
        const channel = ably.channels.get(channelId);
        return channel;
    }

    async getCorrectionChannel(ably, room){
        let channelId = 'kreuzwort' + room;
        const channel = ably.channels.get(channelId);
        return channel;
    }
}

module.exports = new KreuzwortAbly;