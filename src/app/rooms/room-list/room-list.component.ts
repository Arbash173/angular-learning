import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from 'src/app/rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log(changes)
  }

  @Input() rooms: RoomList[]= []

  @Input() title : string = ''

  @Output() roomSeleted = new EventEmitter<RoomList>();

  ngOnInit(): void {
  }



  selectRoom(room:RoomList){
    this.roomSeleted.emit(room)
  }

}
