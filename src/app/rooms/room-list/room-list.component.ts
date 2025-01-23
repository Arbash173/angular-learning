import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
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

  stream = new Observable(observer => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.complete();

  })

  ngOnInit(): void {
    this.stream.subscribe({
      next:(value) => console.log(value),
      complete:() => console.log("complete"),
      error:(err) => console.log(err)
    })

  }



  selectRoom(room:RoomList){
    this.roomSeleted.emit(room)
  }

}
