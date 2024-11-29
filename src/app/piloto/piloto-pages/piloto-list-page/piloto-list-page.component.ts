import { Component } from '@angular/core';
import { PilotoListComponent } from '../../piloto-components/piloto-list/piloto-list.component';

@Component({
  selector: 'app-piloto-list-page',
  standalone: true,
  imports: [PilotoListComponent],
  templateUrl: './piloto-list-page.component.html',
  styleUrl: './piloto-list-page.component.css'
})
export class PilotoListPageComponent {

}
