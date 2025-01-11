import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit , DoCheck, AfterViewInit{

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.headerComponent)
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent
  ngDoCheck(): void {
    console.log("do called")
  }

  hotelName:string = 'arbash hotel'
  numbersofroom:number=12
  hideRoom:boolean = false
  room: Room = {
    totalRooms:10,
    availableRooms:5,
    bookedRooms:2
  }


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



  ngOnInit(): void {
  console.log(this.headerComponent)
  }

  toggle(){
    this.hideRoom = ! this.hideRoom
  }

  selectRoom(room:RoomList){
    console.log(room)
  }

  addRoom(){
    const room:RoomList = {
      
        roomType:'Delux room',
        roomnum:4,
        amenities:'Ac, tvss, fridge',
        price:5030,
        image:'sadad',
        checkinTime:new Date('11-nov-2024'),
        checkoyTime:new Date('13-nov-2024'),
      
    }

    // this.roomList.push(room)

    this.roomList = [...this.roomList, room]
  }

}
