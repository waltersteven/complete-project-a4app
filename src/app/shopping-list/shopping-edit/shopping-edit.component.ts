import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

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

  constructor(private slService: ShoppingListService) { }

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
    //this.newElement.emit( new Ingredient(name,amount));
    this.slService.addIngredient(new Ingredient(name, amount));
  }
}
