import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Layout/layout.component').then((m) => m.LayoutComponent),
        children: [
            {
                path: '',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'products',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'collections',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'about',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'contactus',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            }
        ]
    },
];
