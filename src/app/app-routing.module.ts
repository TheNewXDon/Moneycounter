import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './component/add-new/add-new.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "add", component: AddNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
