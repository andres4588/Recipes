import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipesActivate = new EventEmitter <{message: string}>();
  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  select(featured: string): void{
      this.recipesActivate.emit({
        message: featured
      });
  }

}
