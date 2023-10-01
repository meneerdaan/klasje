import {Component} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {Persoon} from "../../persoon";

@Component({
  selector: 'klasje-welkom-form',
  templateUrl: './welkom-form.component.html'
})
export class WelkomFormComponent {

  welkomForm = this.fb.group({
    id: this.fb.control<number | null>(null),
    naam: this.fb.control<string | null>(null),
    hobby: this.fb.control<string | null>(null)
  })

  constructor(private fb: FormBuilder) {
  }

  submitWelkomform() {
    console.log(this.welkomForm.value);
  }
}
