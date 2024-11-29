import { Component } from '@angular/core';
import { PilotoDetailsComponent } from '../../piloto-components/piloto-details/piloto-details.component';

@Component({
  selector: 'app-piloto-details-page',
  standalone: true,
  imports: [PilotoDetailsComponent],
  templateUrl: './piloto-details-page.component.html',
  styleUrl: './piloto-details-page.component.css'
})
export class PilotoDetailsPageComponent {

}
