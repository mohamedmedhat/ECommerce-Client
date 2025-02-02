import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'auth',
        loadComponent: () => loadRemoteModule({
            remoteName: 'auth',
            exposedModule: './Component'
        }).then(a => a.AppComponent)
    },
    {
        path: 'register',
        loadComponent: () => loadRemoteModule({
            remoteName: 'auth',
            exposedModule: './RegisterComponent'
        }).then(a => a.RegisterComponent)
    }
];
