import { Routes } from '@angular/router';
import { AboutComponent } from 'core/components/about/about.component';
import { HomeComponent } from 'core/components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];