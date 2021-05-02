import { TransportDB, CommandDB } from '../DB/db_drone_service';
import { TransportModel } from '../model/transport.model';

export class TransportLib{

    async createOrUpadateTransport(req,res) {
        let data = <TransportModel>req.body;
        await TransportDB().update(
            {
                'command._id': data.command._id,
                'drone._id': data.drone._id
            },
            {
                $set: data
            },
            {upsert: true}
            );
        res.json({"status": "ok"})
    }

    getTransportById(transportId) {

    }

    getCommandById(commandId) {
        return CommandDB().findOne({id: commandId})
    }

   async checkExistingTransport(commandId, transportId) {
        let transport = await TransportDB().findOne({
            'command._id': commandId,
            _id: transportId
        });

        console.log('transport ===========> ', transport)
   }
}