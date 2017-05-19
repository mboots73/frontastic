import {Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ProgressComponent } from './progress/progress.component';
import { CoursesComponent } from './courses/courses.component';
import { HtmlComponent} from './courses/html/html.component';
import { CssComponent } from './courses/css/css.component';
import { JqueryComponent } from './courses/jquery/jquery.component';
import { JavascriptComponent } from './courses/javascript/javascript.component';
import { ThreejsComponent } from './courses/threejs/threejs.component';
import { AngularjsComponent } from './courses/angularjs/angularjs.component';
import { EmberjsComponent } from './courses/emberjs/emberjs.component';
import { BootstrapComponent } from './courses/bootstrap/bootstrap.component';
import { UsersComponent } from './users/users.component';
import { Lesson1Component } from './courses/template/lesson1/lesson1.component';
import { NewcourseComponent } from './courses/newcourse/newcourse.component';

const APP_ROUTES: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent },
  { path: 'profile/settings', component: SettingsComponent },
  { path: 'profile/progress', component: ProgressComponent },
  { path: 'courses/html', component: HtmlComponent },
  { path: 'courses/css', component: CssComponent },
  { path: 'courses/jquery', component: JqueryComponent },
  { path: 'courses/javascript', component: JavascriptComponent },
  { path: 'courses/threejs', component: ThreejsComponent },
  { path: 'courses/angularjs', component: AngularjsComponent },
  { path: 'courses/emberjs', component: EmberjsComponent },
  { path: 'courses/bootstrap', component: BootstrapComponent },
    { path: 'profile/users', component: UsersComponent },
        { path: 'courses/html/lesson1', component: Lesson1Component },
        {path: 'courses/newcourse', component: NewcourseComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);