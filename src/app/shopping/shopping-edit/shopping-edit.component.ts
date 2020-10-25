import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) inputName: ElementRef;
  @Output() ingredients = new EventEmitter  <{name: string, amount: number}>();

  constructor() { }

  ngOnInit(): void {
  }
  addItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement): void{
    //console.log(this.inputName.nativeElement.value);
    this.ingredients.emit({
      name: nameInput.value,

      amount: parseInt(amountInput.value)
    });
  }

}
