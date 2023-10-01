import {Component} from "@angular/core";
import {Persoon} from "../persoon";

@Component({
  selector: 'klasje-welkom',
  templateUrl: './welkom.component.html',
  styleUrls: ['./welkom.css']
})
export class WelkomComponent {

  personen: Persoon[] = [
    {
      id: 1,
      naam: 'Bas',
      hobby: 'Op rotsen klimmen'
    },
    {
      id: 2,
      naam: 'Daan',
      hobby: 'Lekker op de grond blijven'
    }
  ]

  onVoegToe(persoon: Persoon) {
    console.log(persoon);
  }
}
