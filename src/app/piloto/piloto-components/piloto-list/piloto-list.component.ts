import { Component, inject, OnInit } from '@angular/core';
import { Piloto } from '../../piloto-interface/piloto.interface';
import { PilotoServiceService } from '../../piloto-service.service';
import { PilotoCardComponent } from '../piloto-card/piloto-card.component';
import { error } from 'console';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-piloto-list',
  standalone: true,
  imports: [PilotoCardComponent, RouterLink],
  templateUrl: './piloto-list.component.html',
  styleUrl: './piloto-list.component.css'
})
export class PilotoListComponent implements OnInit {
  ngOnInit(): void {
    this.getPilotosDb()
  }

  service = inject(PilotoServiceService)

  getPilotosDb() {
    this.service.getPilotos().subscribe({
      next: (pilotos) => this.pilotos = pilotos
      ,
      error: (e: Error) => console.log(e.message)
    })
  }

  pilotos: Piloto[] = []

  deletePiloto(id: string | null | undefined) {
    this.service.deletePiloto(id).subscribe({
      next: () => console.log('piloto eliminado')
      ,
      error: (e: Error) => console.log(e.message)
    })
  }

}
