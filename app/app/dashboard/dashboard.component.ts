import { Component, OnInit } from '@angular/core';
import { faAngry, faFrown, faMeh, faSmile, faGrinAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faAngry   = faAngry;
  faFrown   = faFrown;
  faMeh     = faMeh;
  faSmile   = faSmile;
  faGrinAlt = faGrinAlt;

  constructor() { }

  ngOnInit() {
    console.log('Inside dashboard component!!!');
  }

}
