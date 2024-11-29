import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CampoRequeridoComponent } from '../../../errors/campo-requerido/campo-requerido.component';
import { environment } from '../../../../environments/environment.development';
import { ValorInvalidoComponent } from '../../../errors/valor-invalido/valor-invalido.component';
import { Piloto } from '../../piloto-interface/piloto.interface';
import { PilotoServiceService } from '../../piloto-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-piloto-form',
  standalone: true,
  imports: [ReactiveFormsModule, CampoRequeridoComponent, ValorInvalidoComponent, CommonModule, RouterModule],
  templateUrl: './piloto-form.component.html',
  styleUrl: './piloto-form.component.css'
})
export class PilotoFormComponent {

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

  piloto: Piloto | null = null
  postPiloto() {
    if (this.form.invalid) return
    this.piloto = this.form.getRawValue()
    this.postPilotoDb(this.piloto)
  }

  service = inject(PilotoServiceService)

  postPilotoDb(piloto: Piloto) {
    this.service.postPiloto(piloto).subscribe({
      next: (piloto) => console.log(`${piloto.nombre} agregado`)
      ,
      error: (e: Error) => console.log(e.message)
    })
  }

}
