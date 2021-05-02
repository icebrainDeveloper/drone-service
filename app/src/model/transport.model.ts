export interface TransportModel {
    command: any,
    date: Date,
    starting: boolean,
    arriving: boolean,
    starting_date:Date,
    arriving_date: Date,
    //autonomy: number,
    actual_position: number
    drone: any,
    transportId?: string
}
