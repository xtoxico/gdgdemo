import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';


export const appRoutes: Route[] = [
    {
        path: 'ponentes',
        loadComponent: () =>
          import('@gdgdemo/ponentes').then((m) => m.PonentesComponent),
      },

];


