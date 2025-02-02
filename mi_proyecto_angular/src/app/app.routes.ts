import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { PostViewComponent } from './pages/post-view/post-view.component';


export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo :'home'},
    {path:'home', component: HomeComponent},
    {path:'new', component: NewComponent},
    {path:'post/:idpost', component: PostViewComponent }

];
