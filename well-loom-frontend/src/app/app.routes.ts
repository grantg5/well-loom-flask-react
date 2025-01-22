import { Routes } from '@angular/router';
import { AboutComponent } from 'core/components/about/about.component';
import { PracticeSearchComponent } from 'features/practice-library/pages/practice-search/practice-search.component';

export const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'practice-search',
        component: PracticeSearchComponent
    }
];