import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PackageComponent } from './package/package.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'package-list', component: PackageComponent }
];

export const routing = RouterModule.forRoot(routes);
