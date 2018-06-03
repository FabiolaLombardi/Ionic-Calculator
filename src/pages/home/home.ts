import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  val: any;
  num1: number;
  num2: number;
  result: any;
  regExp: any;
  sign: string;
  

  constructor(public navCtrl: NavController) {
    this.val = "";
    this.result = "";
    this.regExp = /([0-9]+(\+|\-|\*|\/|\%)?)+$/;
  }
  getRoot(){
    this.val= Math.sqrt(this.val);
  }

  getInverse(){
    this.val = 1/this.val;
  }

  getPow(){
    this.val= Math.pow(this.val,2);
  }

  clear() {
    this.val = "";
  }

  getPercent() {
    this.val = this.val / 100;
  }

  changeS(){
    this.val= this.val * -1;
  }

  undo() {
    if (this.val != '') {
      this.val = this.val.slice(0, -1)
    }

  }
  addN(num: string) {
    this.val += num;
  }

  addS(ope: string) {
    this.val += ope;
    this.sign = ope;
  }

  operate() {
    try {
      if (this.regExp.test(this.val)) {
        this.result = eval(this.val);
        if (this.result % 1 == 0) {
        this.val = this.result;
        }
        else{
          this.val = this.result.toFixed(5);
        }
      } else {
        this.val = "Math Error";
      }
    } catch (error) {
      this.val = "Syntax Error"
    }
  }
}
