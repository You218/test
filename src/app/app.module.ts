import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guard/auth.guard';
import { Step1Component } from './Form/ReportScheduler/step1/step1.component';
import { AuthService } from './Services/auth.service';
import { VehicleDataService } from './Services/vehicle-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Step1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatCardModule,
    RouterModule
    ],
  providers: [AuthService, VehicleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
