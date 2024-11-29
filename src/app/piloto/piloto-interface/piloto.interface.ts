export interface Piloto {
    id?: string,
    nombre: string,
    escuderiaDebut: string,
    escuderiaActual?: string,
    debut: number,
    cantPremios: number,
    cantPodios: number,
    activo: boolean
}