import { Route } from '@angular/router';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Route[] = [
    {
        title: 'register',
        path: 'register',
        component: RegisterComponent
    }
];
