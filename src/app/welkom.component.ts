import {Component} from "@angular/core";
import {Persoon} from "./persoon";

@Component({
  selector: 'klasje-welkom',
  templateUrl: './welkom.component.html'
})
export class WelkomComponent {

  persoon: Persoon = {
    id: 1,
    naam: 'Bas',
    hobby: 'Op rotsen klimmen'
  }
}
