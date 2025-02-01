import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'auth',
        loadComponent: () => loadRemoteModule('auth', './Component').then(a => a.AppComponent)
    }
];
