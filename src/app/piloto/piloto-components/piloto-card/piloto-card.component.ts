import { Component, Input } from '@angular/core';
import { Piloto } from '../../piloto-interface/piloto.interface';

@Component({
  selector: 'app-piloto-card',
  standalone: true,
  imports: [],
  templateUrl: './piloto-card.component.html',
  styleUrl: './piloto-card.component.css'
})
export class PilotoCardComponent {

  @Input()
  piloto!: Piloto

}
