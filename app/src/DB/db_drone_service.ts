import {MongoClient,Db,MongoClientOptions,Collection} from 'mongodb';

let db:Db;

export async function connect(url,options?: MongoClientOptions) {
    db = await MongoClient.connect(url,options);
    console.log("connect to mongodb success")
    db = db.db('drone_service');
}

export function TransportDB(): Collection {
    let collection = db.collection('transport');
    const stream = collection.watch();
    let response = {}
    stream.on('change',(change)=>{
        console.log("change ", change)
        // switch(change.opterionType) {
        //     case 'insert' : 
        //         response = {
        //             _id: change.fullDocument._id,
        //             command: change.fullDocument.command
        //         };
        //         console.log("stream insert ",response);
        //         break;
        //     case 'update' :
        //         response = {
        //             _id: change.fullDocument._id,
        //             command: change.fullDocument.command
        //         };
        //         console.log("stream update ",response);
        //         break;
        // }

    });

    return collection;
}

export function CommandDB(): Collection {
    return db.collection('command');
}