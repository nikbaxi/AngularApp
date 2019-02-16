import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from 'src/courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { RatingComponent } from './rating/rating.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipeComponent } from './title-case-pipe/title-case-pipe.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseDetailFormComponent } from './course-detail-form/course-detail-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostComponent } from './post/post.component';
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { FollowersDetailsComponent } from './followers-details/followers-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    FavoriteComponent,
    TitleCasePipeComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseDetailFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PasswordFormComponent,
    PostComponent,
    FollowersDetailsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:username', component: GithubProfileComponent },
      { path: 'followers', component: FollowersDetailsComponent },
      { path: 'posts', component: PostComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
