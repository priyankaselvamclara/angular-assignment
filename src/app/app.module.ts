import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionsComponent } from './form/add-questions/add-questions.component';
import { ReviewMyAnswersComponent } from './form/review-my-answers/review-my-answers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAddAnswer } from './form/add-questions/add-questions.component';
import { FormsModule } from '@angular/forms';
import { AddNewQuestionsComponent } from './form/add-questions/add-questions.component';
import { AddQuestionService } from './services/add-question.service';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionsComponent,
    ReviewMyAnswersComponent,
    DialogAddAnswer,
    AddNewQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    {provide: MatDialogRef,useValue: {}}, {
      provide: MAT_DIALOG_DATA,
      useValue: {}
   },
    AddQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
