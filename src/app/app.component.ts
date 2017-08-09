import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { createNumberMask } from 'text-mask-addons';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="myForm">
      <label for="amount">Amount:</label>
      <input type="text" [textMask]="amountMask" id="amount" formControlName="amount">
      <button type="button" (click)="setValue()">Set value to 123456</button>
      <pre>{{myForm.value | json}}</pre>
    </form>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  myForm: FormGroup;
  amountMask: any;

  ngOnInit() {
    this.myForm = new FormGroup({
      amount: new FormControl(null)
    });

    this.amountMask = {
      mask: createNumberMask({
        prefix: '',
        suffix: ' €',
        thousandsSeparatorSymbol: ' ',
        requireDecimal: true,
        allowDecimal: true,
        decimalSymbol: ','
      }),
      guide: false,
      keepCharPositions: true
    };
  }

  setValue() {
    this.myForm.get('amount').setValue('123546');
  }
}
