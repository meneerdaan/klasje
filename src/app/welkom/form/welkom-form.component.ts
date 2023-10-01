import {Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {Persoon} from "../../persoon";

@Component({
  selector: 'klasje-welkom-form',
  templateUrl: './welkom-form.component.html'
})
export class WelkomFormComponent {

  welkomForm = this.fb.group({
    id: this.fb.control<number | null>(null, [Validators.required]),
    naam: this.fb.control<string | null>(null, [Validators.required]),
    hobby: this.fb.control<string | null>(null, [Validators.required])
  })

  constructor(private fb: FormBuilder) {
  }

  submitWelkomform() {
    console.log(this.welkomForm.value);
    console.log(this.welkomForm.valid);
  }
}
