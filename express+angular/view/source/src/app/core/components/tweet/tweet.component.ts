import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})


export class TweetComponent implements OnInit {
  @Input() type: string = 'single'; // single - multi
  @Input() title: string = 'Title';
  @Input() data: any;
  constructor() { }

  ngOnInit() {

  }

}
