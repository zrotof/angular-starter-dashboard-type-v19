import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"tableau-de-bord",
        loadComponent: () => import('./features/feature-dashboard/pages/page-dashboard-container/page-dashboard-container.component').then(m => m.PageDashboardContainerComponent)
    },
    {
        path: '',
        redirectTo: 'tableau-de-bord',
        pathMatch: "full"
    }
];
