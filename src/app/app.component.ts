import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'my-app',
  template: `
    <h1>trueFalseValue Directive</h1>
    <form [formGroup]="form">
      <input type="checkbox" formControlName="lovingAngular" trueFalseValue trueValue="yes" falseValue="nope"> loving
      Angular?

      <input type="checkbox" formControlName="lovingTamil" trueFalseValue trueValue="Amma" falseValue="Illa"> loving
      tamil ?
    </form>
    <pre>{{form.value | json }}</pre>
  `
})
export class AppComponent implements OnInit {
  form;

  ngOnInit() {
    this.form = new FormGroup({
      lovingAngular: new FormControl('yes'),
      lovingTamil: new FormControl('Amma')
    })
  }

}
