import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-top-btn',
  templateUrl: './go-top-btn.component.html',
  styleUrls: ['./go-top-btn.component.scss']
})
export class GoTopBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(): void{
    window.scroll(0,0);
  }

}
