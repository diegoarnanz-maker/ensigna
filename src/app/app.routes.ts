import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent   
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'work',
        component: WorkComponent
    }
];
