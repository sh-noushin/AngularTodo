import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert(localStorage.getItem('token'));
  }

}
