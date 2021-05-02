import {TransportLib} from  '../lib/transport.lib';
const transportLib = new TransportLib();
export class TransportController{

    TransportController(app) {
        app.post('/new',
            transportLib.createOrUpadateTransport
        );
    }
}
