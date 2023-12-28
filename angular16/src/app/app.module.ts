import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { DirectivesComponent } from './directive/directive.component';
import { LoginComponent } from './login/login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { SignUpReactiveFormComponent } from './sign-up-reactive-form/sign-up-reactive-form.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    DirectivesComponent,
    LoginComponent,
    DatabindingComponent,
    ChildComponent,
    ParentComponent,
    SubComponent,
    Sub1Component,
    Sub2Component,
    SignUpReactiveFormComponent,
    TemplatedrivenformComponent,
    LifecyclehooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
