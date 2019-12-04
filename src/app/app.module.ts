import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormUploadComponent } from './components/upload/form-upload/form-upload.component';
import { DataTablesModule } from 'angular-datatables';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddPmoComponent } from './components/add-pmo/add-pmo.component';
import { DatatablesLibraryComponent } from './components/datatables-library/datatables-library.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NeedAuthGuard } from './auth.guard';
import { NeedAdminGuard } from './admin.guard';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageModule } from './login-page/login-page.module';
import { XhrInterceptor } from './interceptor/interceptor';
import { LogoutComponent } from './logout/logout.component';
import { FeedbackStatusComponent } from './components/feedback-status/feedback-status.component';
import { VolunteerUnregComponent } from './components/volunteer-unreg/volunteer-unreg.component';
import { VolunteerNonpartComponent } from './components/volunteer-nonpart/volunteer-nonpart.component';
import { SendMailComponent } from './components/send-mail/send-mail.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts'
import { FeedbackReportComponent } from './components/feedback-report/feedback-report.component';
const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: 'login',          component: LoginPageComponent       },
  { path: 'logout',         component: LogoutComponent          },
  { path: 'feedback',       component: FeedbackComponent        },
  { path: 'unregfeedback',  component: VolunteerUnregComponent  },
  { path: 'nopartfeedback', component: VolunteerNonpartComponent},
  { path: 'dashboard',      component: DashboardPageComponent   },
  { path: 'uploadpmo',      component: FormUploadComponent      },
  { path: 'addadmin',       component: AddAdminComponent        },
  { path: 'addpmo',         component: AddPmoComponent          },
  { path: 'feedbackStatus', component: FeedbackStatusComponent  },
  { path: 'datatable',      component: DatatablesLibraryComponent},
  { path: 'sendmail',       component: SendMailComponent        },
  { path: 'feedbackreport', component: FeedbackReportComponent  },
  //{ path: 'sendmail',       component: SendMailComponent,           canActivate: [NeedAuthGuard]  },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    HeaderComponent,
    FooterComponent,
    FormUploadComponent,
    AddAdminComponent,
    AddPmoComponent,
    DatatablesLibraryComponent,
    FeedbackComponent,
    LogoutComponent,
    FeedbackStatusComponent,
    VolunteerUnregComponent,
    VolunteerNonpartComponent,
    SendMailComponent,
    FeedbackReportComponent,
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginPageModule,
    RouterModule.forRoot(routes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    ChartsModule 
  ],
  providers: [NeedAdminGuard, NeedAuthGuard,HeaderComponent, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    //localStorage.clear();
  }
}
