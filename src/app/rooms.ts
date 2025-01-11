export interface Room{
    totalRooms:number;
    availableRooms:number;
    bookedRooms:number;

}



export interface RoomList{
    roomType:string;
    roomnum:number
    amenities:string;
    price:number;
    image:string;
    checkinTime:Date;
    checkoyTime:Date;

}