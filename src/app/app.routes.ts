import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./core/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/pages/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/layout.component').then(
        (c) => c.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/pages/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
      {
        path: 'all-category',
        loadComponent: () =>
          import('./features/pages/all-category/all-category.component').then(
            (c) => c.AllCategoryComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/pages/about/about.component').then(
            (c) => c.AboutComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/pages/contact/contact.component').then(
            (c) => c.ContactComponent
          ),
      },
      {
        path: 'favorite',
        loadComponent: () =>
          import('./features/pages/favorite/favorite.component').then(
            (c) => c.FavoriteComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./features/pages/cart/cart.component').then(
            (c) => c.CartComponent
          ),
      },
    ],
  },
];
