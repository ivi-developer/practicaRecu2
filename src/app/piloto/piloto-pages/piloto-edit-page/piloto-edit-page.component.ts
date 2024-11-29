import { Component } from '@angular/core';
import { PilotoEditComponent } from '../../piloto-components/piloto-edit/piloto-edit.component';

@Component({
  selector: 'app-piloto-edit-page',
  standalone: true,
  imports: [PilotoEditComponent],
  templateUrl: './piloto-edit-page.component.html',
  styleUrl: './piloto-edit-page.component.css'
})
export class PilotoEditPageComponent {

}
