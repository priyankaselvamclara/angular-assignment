import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddQuestionService, Person } from 'src/app/services/add-question.service';

@Component({
  selector: 'app-review-my-answers',
  templateUrl: './review-my-answers.component.html',
  styleUrls: ['./review-my-answers.component.css']
})
export class ReviewMyAnswersComponent implements OnInit {
  subscription: Subscription;
  details: Person = {
    descAboutYourself  : '',
    checkboxData : '',
    otherOptionInput: '',
    question: '',
    questionType: ''
  };
  checkboxData: any = '';
  question: string = '';
  //languagesKnown: any = [];



  constructor(private dataService: AddQuestionService) { 
    this.subscription = this.dataService.getData().subscribe((message) => {
      if (message) {
        console.log('message', message);
        this.details = message;
        console.log("This.detail****************88888",this.details);
        this.checkboxData = JSON.parse(this.details.checkboxData);
        console.log('this.checkboxData', this.checkboxData);
        this.question = this.details.question;
       /* for (var property in this.checkboxData) {
          console.log(`${property}: ${this.checkboxData[property]}`);
          if(this.checkboxData[property] == true) {
            if(property == 'Other'){
              this.languagesKnown.push(this.details.otherOptionInput);
            } else {
              this.languagesKnown.push(property);
            }
          }

          }*/
         // console.log('this.languagesKnown', this.languagesKnown);
        }
      
    });
  }

  ngOnInit(): void {
  }

}