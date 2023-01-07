import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginnerComponent } from './beginner/beginner.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  
  {
    path : 'returns',
    component : BeginnerComponent
  },
  {
  path : 'about',
  component : AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [HomeComponent,BeginnerComponent,AboutComponent]
