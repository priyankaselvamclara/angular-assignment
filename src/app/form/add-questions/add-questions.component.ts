import { Component, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import { AddQuestionService } from "../../services/add-question.service";
import * as jquery from 'jquery';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent {
    constructor(public dialog: MatDialog) {}
    openAddQuestionDialog(): void {
      const questionDialogRef = this.dialog.open(AddNewQuestionsComponent);
      questionDialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
      });
    }
  }
  
  // add a new question modal component 
  interface questionType {
    value: string;
    viewValue: string;
  }
  @Component({
    selector: 'app-add-new-questions',
    templateUrl: 'dialog-to-add-question.html',
    styleUrls: ['./add-questions.component.css']
  })
  export class AddNewQuestionsComponent {
    questionTypes: questionType[] = [
      {value: 'checkbox-list', viewValue: 'CheckboxList'},
      {value: 'paragraph', viewValue: 'Paragraph'}
    ];
    questionType: string = '';
    //flagShow = false;
    question: string = '';
    answer1: string = '';
    answer2: string = '';
    //Desc: string = '';
    passData: any;
    constructor(public questionDialogRef: MatDialogRef<AddNewQuestionsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

      openAnswerDialog(): void {
        this.questionDialogRef.close();
        if(this.questionType == 'paragraph') {
            this.passData = {questionType: this. questionType, question: this.question};
        } else if(this.questionType == 'checkbox-list') {
          this.passData = {questionType: this. questionType, question: this.question, answer1: this.answer1, answer2: this.answer2};
        }
        const answerDialogRef = this.dialog.open(DialogAddAnswer, {
            data: this.passData
        });
        //this.flagShow = true;
        answerDialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
          //console.log('this.questionType', questionType);
        });
      }

      selectQuestionType(event: any): void {
        this.questionType = event.value;
      }
  }


  // answer the questions
  @Component({
    selector: 'app-dialog-add-answer',
    templateUrl: 'dialog-to-add-answer.html',
    styleUrls: ['./add-questions.component.css']
  })
  export class DialogAddAnswer {
    checkbox: FormGroup;
    descAboutYourself: string = "";
    otherOption: boolean = false;
    otherOptionInput: string = '';
    counter : number = 0;
    questionType: string = '';
    question: string = '';
    answer1: string = '';
    answer2: string = '';
    checkBoxSelectedOption: any = [];
    showQuestion: boolean = false;
    questionTypes: questionType[] = [
      {value: 'checkbox-list', viewValue: 'CheckboxList'},
      {value: 'paragraph', viewValue: 'Paragraph'}
    ];
    additionalQuestionDet: any = {
      question: '',
      answer1: '',
      answer2: ''

    };
    //keyArray: { this: any; false: any; answer2: boolean; Other: boolean; };
    //desc: string = '';
    constructor(
      public dialogRef: MatDialogRef<DialogAddAnswer>,
      @Inject(MAT_DIALOG_DATA) public data: any,fb: FormBuilder, private dataService: AddQuestionService, public dialog: MatDialog) {
      this.checkbox = fb.group({
        answer1: false,
        answer2: false,
        Other: false
      });
      this.questionType = this.data.questionType;
      if(this.questionType == 'paragraph') {
        this.question= this.data.question;
        //this.desc = this.data.desc;
      } else if(this.questionType == 'checkbox-list') {
        this.question= this.data.question;
        this.answer1 = this.data.answer1;
        this.answer2 = this.data.answer2;
      }
    }
    closeDialog(): void {
      this.dialogRef.close();
      const answerDialogRef = this.dialog.open(AddNewQuestionsComponent, {
        data: ''
    });
    }
    showHideInput(): void {
      if(this.counter == 0) {
         this.otherOption = true;
         this.counter = 1;
      }
      console.log('this.otherOption1',this.otherOption);
      if(this.otherOption == true) {
        jquery(".otherOptionInput").css("display","block");
        this.otherOption = false;
        console.log('this.otherOption if',this.otherOption);
      } else {
        this.otherOption = true;
        jquery(".otherOptionInput").css("display","none");
       }
    }
    passDataToService(descAboutYourself: string, checkboxData: any, otherOptionInput: string, question: string, questionType: string) {
      this.dialogRef.close();
      for (var property in checkboxData) {
         if(checkboxData[property] == true) {
            if(property == 'Other'){
              this.checkBoxSelectedOption.push(otherOptionInput);
            } else if(property == 'answer1') {
              this.checkBoxSelectedOption.push(this.answer1);
            } else if(property == 'answer2') {
              this.checkBoxSelectedOption.push(this.answer1);
            }
          }
      this.dataService.setData(descAboutYourself, JSON.stringify(this.checkBoxSelectedOption), otherOptionInput, question, questionType);
    }
  }
  addAdditionQuestion(): void {
    this.showQuestion = true;
  }
  selectQuestionType(event: any): void {
    this.questionType = event.value;
  }
}