import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PackageComponent } from './package/package.component';
import { PageNotFoundComponent } from './common/404error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'package-list', component: PackageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'error', component: PageNotFoundComponent },

];

export const routing = RouterModule.forRoot(routes);
