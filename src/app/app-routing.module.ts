import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './component/search/search.component';
import { HistoryComponent } from './component/history/history.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {path:'', component:SearchComponent},
  {path:'history', component:HistoryComponent},
  {path:'profile', component: ProfileComponent},
  {path:'profile/:id', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
