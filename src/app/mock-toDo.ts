import { ToDo } from './toDo.model';

export const TODOS: ToDo[] = [
  new ToDo(
    0,
    'Terminar Tp de Arquitectura',
    'Leer a partir de la bolilla 6 del libro "Arquitectura. Forma, espacio y orden." Libro de Frank Ching',
    'Facultad',
    true,
    80
  ),
  new ToDo(
    1,
    'Comprar carne para el asado del domingo',
    'Comprar en la carneria de la esquina: 1kg de Vacio, 2kg de costilla, 0,5kg de chinculin, 1kg de chorizo criollo y 0,5kg de morcilla.',
    'Familia',
    false,
    30
  ),
  new ToDo(
    2,
    'Comprar Placa de Video',
    'Comparar los precios de Placa de video de distintos locales de computacion.',
    'Personal',
    true,
    60
  ),
];
