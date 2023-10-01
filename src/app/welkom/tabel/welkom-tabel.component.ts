import {Component, Input} from "@angular/core";
import {Persoon} from "../../persoon";

@Component({
  selector: 'klasje-welkom-tabel',
  templateUrl: 'welkom-tabel.component.html'
})
export class WelkomTabelComponent {

  @Input() personen!: Persoon[];

}
