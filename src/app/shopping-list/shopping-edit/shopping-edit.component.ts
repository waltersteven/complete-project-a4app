import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  //Using Javascript object with two properties.
  //@Output() newElement = new EventEmitter<{name: string, amount: number}>(); 
  
  @Output() newElement = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    // this.newElement.emit({
    //   name: this.nameInputRef.nativeElement.value, //obtaining the value of the ViewChild.
    //   amount: this.amountInputRef.nativeElement.value 
    // });

    //Constant is use when you dont plan to change it.
    const name = this.nameInputRef.nativeElement.value //obtaining the value of the ViewChild.
    const amount = this.amountInputRef.nativeElement.value
    this.newElement.emit( new Ingredient(name,amount));
  }
}
