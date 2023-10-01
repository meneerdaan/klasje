import {Component, EventEmitter, Output} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {Persoon} from "../../persoon";

@Component({
  selector: 'klasje-welkom-form',
  templateUrl: './welkom-form.component.html'
})
export class WelkomFormComponent {

  @Output() voegToe = new EventEmitter<Persoon>();

  welkomForm = this.fb.group({
    id: this.fb.control<number | null>(null, [Validators.required]),
    naam: this.fb.control<string | null>(null, [Validators.required]),
    hobby: this.fb.control<string | null>(null, [Validators.required])
  })

  constructor(private fb: FormBuilder) {
  }

  submitWelkomform() {
    if (this.welkomForm.valid) {
      const persoon: Persoon = {
        id: this.welkomForm.controls.id.value!,
        naam: this.welkomForm.controls.naam.value!,
        hobby: this.welkomForm.controls.hobby.value!
      }
      this.voegToe.emit(persoon);
    }
  }
}
