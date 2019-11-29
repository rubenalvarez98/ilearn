export interface Pregunta {
  titulo: string;
  opciones: Opcion[];
  correcta: number;
}
export interface Opcion {
  id: number;
  titulo: string;
  color: string;
}
export interface Nivel {
  id: number;
  name: string;
}
export interface Niveles {
  nivel: number;
  preguntas: Pregunta[];
}
