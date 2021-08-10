import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AddTestComponent } from 'src/app/modules/add-test/add-test.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list"
import {MatDividerModule} from "@angular/material/divider"
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, AddTestComponent],
  imports: [CommonModule,  HttpClientModule,   FormsModule,    ReactiveFormsModule, RouterModule, SharedModule,MatSidenavModule,MatTableModule,MatGridListModule,MatDividerModule,MatRadioModule,MatInputModule,MatButtonModule],
})
export class DefaultModule {}
