import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./core/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/layout.component').then((m) => m.LayoutComponent),
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
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'all-category',
        loadComponent: () =>
          import('./features/pages/all-category/all-category.component').then(
            (m) => m.AllCategoryComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/pages/about/about.component').then(
            (m) => m.AboutComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
      {
        path: 'favorite',
        loadComponent: () =>
          import('./features/pages/favorite/favorite.component').then(
            (m) => m.FavoriteComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./features/pages/cart/cart.component').then(
            (m) => m.CartComponent
          ),
      },
    ],
  },
];
