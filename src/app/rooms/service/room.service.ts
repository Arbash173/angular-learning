import { Injectable } from '@angular/core';
import { RoomList } from 'src/app/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }
  roomList:RoomList[] = [
    {
      roomType:'Delux room',
      roomnum:1,
      amenities:'Ac, tv, fridge',
      price:500,
      image:'sadad',
      checkinTime:new Date('11-nov-2024'),
      checkoyTime:new Date('13-nov-2024'),
    },
    {
      roomType:'Delux room',
      roomnum:2,
      amenities:'Ac, tv, fridge',
      price:500,
      image:'sadad',
      checkinTime:new Date('11-nov-2024'),
      checkoyTime:new Date('13-nov-2024'),
    },
    {
      roomType:'Delux room',
      roomnum:3,
      amenities:'Ac, tv, fridge',
      price:500,
      image:'sadad',
      checkinTime:new Date('11-nov-2024'),
      checkoyTime:new Date('13-nov-2024'),
    },
  ]

  getRooms(){
    return this.roomList
  }
}
