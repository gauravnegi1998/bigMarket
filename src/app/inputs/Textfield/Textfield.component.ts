import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  standalone: false,
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextFieldComponent), multi: true }
  ]
})
export class TextFieldComponent {

}
