import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PilotoServiceService } from '../../piloto-service.service';
import { Piloto } from '../../piloto-interface/piloto.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { ValorInvalidoComponent } from '../../../errors/valor-invalido/valor-invalido.component';
import { CampoRequeridoComponent } from '../../../errors/campo-requerido/campo-requerido.component';

@Component({
  selector: 'app-piloto-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ValorInvalidoComponent, CampoRequeridoComponent, RouterModule],
  templateUrl: './piloto-edit.component.html',
  styleUrl: './piloto-edit.component.css'
})
export class PilotoEditComponent implements OnInit {
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => this.getPiloto(param.get('id'))
      ,
      error: (e: Error) => console.log(e.message)

    })
  }


  getPiloto(id: string | null | undefined) {
    this.service.getPilotoById(id).subscribe({
      next: (piloto) => this.piloto = piloto
      ,
      error: (e: Error) => console.log(e.message)

    })
  }

  piloto!: Piloto

  service = inject(PilotoServiceService)

  activatedRoute = inject(ActivatedRoute)

  updatePiloto() {
    if (this.form.invalid) return
    this.piloto = this.form.getRawValue()
  }

  updatePilotoDb(piloto: Piloto) {
    this.service.putPiloto(piloto.id, piloto).subscribe({
      next: (piloto) => console.log(`${piloto.nombre} actualizado`)
      ,
      error: (e: Error) => console.log(e.message)

    })
  }

  minDebut = environment.minDebut
  maxDebut = environment.maxDebut

  fb = inject(FormBuilder)
  form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    escuderiaDebut: ['', [Validators.required]],
    escuderiaActual: [''],
    debut: [0, [Validators.required, Validators.min(this.minDebut), Validators.max(this.maxDebut)]],
    cantPremios: [0, [Validators.required, Validators.min(0)]],
    cantPodios: [0, [Validators.required, Validators.min(0)]],
    activo: [false, [Validators.required]]
  })

}
