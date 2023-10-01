import {Component, Input} from "@angular/core";
import {Persoon} from "../persoon";

@Component({
  selector: 'klasje-welkom-view',
  templateUrl: 'welkom-view.component.html'
})
export class WelkomViewComponent {

  @Input() personen!: Persoon[];

}
