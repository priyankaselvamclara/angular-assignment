import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './form/add-questions/add-questions.component';
import { ReviewMyAnswersComponent } from './form/review-my-answers/review-my-answers.component';
import { AddNewQuestionsComponent } from './form/add-questions/add-questions.component';


const routes: Routes = [
  { path: '', redirectTo: '/form/builder', pathMatch: 'full' },
  { path: 'form/builder', component: AddQuestionsComponent },
  { path: 'form/answers', component: ReviewMyAnswersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
