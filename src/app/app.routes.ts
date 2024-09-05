import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { BlogComponent } from './blog/blog.component';
import { ResumeComponent } from './resume/resume.component';
import { NoPageComponent } from './no-page/no-page.component';

export const routes: Routes = [
        { path: '', component: InfoComponent, title: 'info' },
        { path: 'blog', component: BlogComponent, title: 'blog' },
        { path: 'resume', component: ResumeComponent, title: 'resume' },
        { path: '**', pathMatch: 'full',  component: NoPageComponent },
];
