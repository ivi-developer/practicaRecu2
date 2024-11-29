import { Component, inject, Input, OnInit } from '@angular/core';
import { Piloto } from '../../piloto-interface/piloto.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PilotoServiceService } from '../../piloto-service.service';

@Component({
  selector: 'app-piloto-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './piloto-details.component.html',
  styleUrl: './piloto-details.component.css'
})
export class PilotoDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => this.getPiloto(param.get('id'))
      ,
      error: (e: Error) => console.log(e.message)

    })
  }

  activatedRoute = inject(ActivatedRoute)

  @Input()
  piloto!: Piloto

  service = inject(PilotoServiceService)

  getPiloto(id: string | null | undefined) {
    this.service.getPilotoById(id).subscribe({
      next: (piloto) => this.piloto = piloto
      ,
      error: (e: Error) => console.log(e.message)

    })
  }
}
