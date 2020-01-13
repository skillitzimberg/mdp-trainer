import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  alertMessage: string = '';
  alertClass: string;
  alertToggle: boolean = false;

  isDisplayed: boolean = false;
  clickLog: Date[] = [];

  toggleDisplayed() {
    this.isDisplayed = !this.isDisplayed;
    this.clickLog.push(new Date());
  }

  selectBgColor(log: Date) {
    return this.clickLog.indexOf(log) < 4 ? '#fff' : 'blue';
  }

  constructor() { }

  ngOnInit() {
  }
  
  onToggleAlertClass() {
    this.alertToggle = !this.alertToggle;
    if(this.alertToggle) {
      this.alertClass = `success`;
    } else {
      this.alertClass = `fail`;
    }
    this.alertMessage = '';
  }
  
  toggleAlertClass() {
    this.alertToggle = !this.alertToggle;
  }

  isDisabled() {
    return this.alertMessage.length > 0 ? false : true;
  }

}
