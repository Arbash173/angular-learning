import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // const comRef = this.vcr.createComponent(RoomsComponent)
    // comRef.instance.hotelName = "component"
  }
  ngOnInit(): void {
    this.name.nativeElement.innerText = "hiomont hotel"
  }
  title = 'angular-learning';

  role = 'Admin'; // Make sure this matches 'user' exactly (case-sensitive)

  @ViewChild('user', {read:ViewContainerRef}) vcr!:ViewContainerRef

  @ViewChild('name', {static:true})name!:ElementRef


}
