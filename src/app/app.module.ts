import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarButtonsComponent } from './sidebar/sidebar-buttons/sidebar-buttons.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavigationBarComponent } from './main-content/navigation-bar/navigation-bar.component';
import { PersonsComponent } from './main-content/persons/persons.component';
import { CoursesComponent } from './main-content/courses/courses.component';
import { UserInfoComponent } from './main-content/navigation-bar/user-info/user-info.component';
import { CourseRubricComponent } from './main-content/courses/course-rubric/course-rubric.component';
import { CreateNewCourseComponent } from './main-content/courses/course-rubric/create-new-course/create-new-course.component';
import { CourseRubricContentBlockComponent } from './main-content/courses/course-rubric/course-rubric-content-block/course-rubric-content-block.component';
import { AbilityComponent } from './main-content/courses/course-rubric/course-rubric-content-block/ability/ability.component';
import { RubricContentItemComponent } from './main-content/courses/course-rubric/course-rubric-content-block/rubric-content-item/rubric-content-item.component';
import { PersosContentComponent } from './main-content/persons/persos-content/persos-content.component';
import { PersonsFiltersComponent } from './main-content/persons/persons-filters/persons-filters.component';
import { PersonInfoItemComponent } from './main-content/persons/persos-content/person-info-item/person-info-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarButtonsComponent,
    MainContentComponent,
    NavigationBarComponent,
    PersonsComponent,
    CoursesComponent,
    UserInfoComponent,
    CourseRubricComponent,
    CreateNewCourseComponent,
    CourseRubricContentBlockComponent,
    AbilityComponent,
    RubricContentItemComponent,
    PersosContentComponent,
    PersonsFiltersComponent,
    PersonInfoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
