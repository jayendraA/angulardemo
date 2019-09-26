import { Component, OnInit,Inject } from '@angular/core';
import { APP_NAME } from 'src/app/app.module';

@Component({
  selector: 'app-ive',
  templateUrl: './ive.component.html',
  styleUrls: ['./ive.component.css']
})
export class IveComponent implements OnInit {

  constructor(@Inject(APP_NAME) public appName:string) { }

  ngOnInit() {
  }

}
