//Creating an estructural directive
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false; //class property, attaching open class

    @HostListener('click') toggleOpen() { //click event
        this.isOpen = !this.isOpen;
    }
}