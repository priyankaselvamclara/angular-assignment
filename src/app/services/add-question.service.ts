import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,  of,  Subject } from 'rxjs';

export interface Person {
  descAboutYourself  : string;
  checkboxData : string;
  otherOptionInput: string;
  question: string;
  questionType: string;
}
@Injectable({
  providedIn: 'root'
})

export class AddQuestionService {
  person: Person = {
    descAboutYourself  : '',
    checkboxData : '',
    otherOptionInput: '',
    question: '',
    questionType: ''
  };

  /*public get Data(): Observable<userDetails>{
    console.log('get data', this.userDetail);
    //this.userDetail.descAboutYourself
    return this.Data;
  }*/
  constructor() { 
  }

  /*setData(descAboutYourself: string, checkboxData: string): Observable<userDetails>{
    this.userDetail.descAboutYourself = descAboutYourself;
    this.userDetail.checkboxData = checkboxData;
    console.log('setdata', this.userDetail);
    return this.userDetail;
  }*/
  /*setData(descAboutYourself: string, checkboxData: string): Observable<any> {
    console.log('********8888descAboutYourself', descAboutYourself, checkboxData);
    //.userDetail.descAboutYourself = descAboutYourself;
    //console.log("**********************",this.userDetail.descAboutYourself)
    //this.userDetail.checkboxData = checkboxData;
    //console.log('setdata', this.userDetail);
    this.subject.next({ descAboutYourself: descAboutYourself, checkboxData: checkboxData });
    console.log('this.subject', this.subject);
    return this.subject;
}*/
  getData(): Observable<Person> {
      console.log('person get data',this.person); 
      return of(this.person);
  }
  setData(descAboutYourself: string, checkboxData: string, otherOptionInput: string, question: string, questionType: string): Observable<Person> {
    this.person.descAboutYourself = descAboutYourself;
    this.person.checkboxData = checkboxData;
    this.person.otherOptionInput = otherOptionInput;
    this.person.question = question;
    this.person.questionType = questionType;
    console.log('this.person set data', this.person);
    return of(this.person);
  }
}
