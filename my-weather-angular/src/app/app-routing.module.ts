import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowWeatherComponent } from './show-weather/show-weather.component';

const routes: Routes = [
  { path: '', component: ShowWeatherComponent }
  // { path: 'cityForm', component: CityFormComponent },
  // { path: 'tempForm', component: TempFormComponent },
  // { path: 'detail/:name', component: VilleDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
