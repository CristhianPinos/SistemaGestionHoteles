import { RouterModule, Routes } from '@angular/router';
import { ListComponent as HabitacionesList } from './habitaciones/list/list';
import { FormComponent as HabitacionesForm } from './habitaciones/form/form';
import { ListComponent as HuespedesList } from './huespedes/list/list';
import { FormComponent as HuespedesForm } from './huespedes/form/form';
import { ListComponent as ReservasList } from './reservas/list/list';
import { FormComponent as ReservasForm } from './reservas/form/form';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'habitaciones', component: HabitacionesList },
  { path: 'habitaciones/new', component: HabitacionesForm },
  { path: 'habitaciones/edit/:id', component: HabitacionesForm },
  { path: 'huespedes', component: HuespedesList },
  { path: 'huespedes/new', component: HuespedesForm },
  { path: 'huespedes/edit/:id', component: HuespedesForm },
  { path: 'reservas', component: ReservasList },
  { path: 'reservas/new', component: ReservasForm },
  { path: 'reservas/edit/:id', component: ReservasForm }
];