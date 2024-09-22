import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClickButtonComponent } from './click-button/click-button.component';
import { ToggleComponent } from './toggle/toggle.component';
import { DataComponent } from './data/data.component';
import { FormComponent } from './form/form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ParentComponent } from './parent/parent.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {path: 'userlist', component : UserListComponent},
  {path: 'databinding', component : DataBindingComponent},
  {path: 'clickbutton', component : ClickButtonComponent},
  {path: 'toggle', component : ToggleComponent},
  {path: 'data', component : DataComponent},
  {path: 'form', component : FormComponent},
  {path: 'userdetail/:id', component : UserDetailComponent},
  {path: 'parent', component : ParentComponent},
  {path: 'filter', component : FilterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
