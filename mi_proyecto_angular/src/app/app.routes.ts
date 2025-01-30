import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { CompletePostComponent } from './pages/complete-post/complete-post.component';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo :'home'},
    {path:'home', component: HomeComponent},
    {path:'new', component: NewComponent},
    {path:'post/:idpost', component: CompletePostComponent}

];
