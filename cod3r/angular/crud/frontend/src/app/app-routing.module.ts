import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/product/create/create.component';
import { DeleteComponent } from './components/product/delete/delete.component';
import { UpdateComponent } from './components/product/update/update.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'products', component: ProductCrudComponent},
  {path: 'products/create', component: CreateComponent},
  {path: 'products/update/:id', component: UpdateComponent},
  {path: 'products/delete/:id', component: DeleteComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
