import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

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
  point: any;
  
  constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation) {
    this.val = "";
    this.result = "";
    this.regExp = /([0-9]+(\+|\-|\*|\/|\.)?)+$/;
    this.point=/(\.)$/;
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

getSin(){
  this.val=Math.sin(this.val);
  if(isNaN(this.val)){
    this.val= "Math Error"
  }
}

getCos(){
  this.val=Math.cos(this.val);
  if(isNaN(this.val)){
    this.val= "Math Error"
  }
}

getTan(){
  this.val=Math.tan(this.val);
  if(isNaN(this.val)){
    this.val= "Math Error"
  }
}

getLog(){
  this.val=Math.log(this.val);
  if(isNaN(this.val)){
    this.val= "Math Error"
  }
}

  getRoot(){
    this.val= Math.sqrt(this.val);
    if(isNaN(this.val)){
      this.val= "Math Error"
    }
  }

  getInverse(){
    this.val = 1/this.val;
    if(isNaN(this.val)){
      this.val= "Math Error"
    }
  }

  getPow(){
    this.val= Math.pow(this.val,2);
    if(isNaN(this.val)){
      this.val= "Math Error"
    }
  }

  clear() {
    this.val = "";
  }

  getPercent() {
    this.val = this.val / 100;
    if(isNaN(this.val)){
      this.val= "Math Error"
    }
  }

  changeS(){
    this.val= this.val * -1;
    if(isNaN(this.val)){
      this.val= "Math Error"
    }
  }

  undo() {
    if (this.regExp.test(this.val)){
    if (this.val != '') {
      this.val= this.val.toString().substr(0, this.val.length - 1);
    }
      //this.val = this.val.slice(0, -1)
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
        this.val=this.result;
      } else {
        this.val = "Math Error";
      }
    } catch (error) {
      this.val = "Syntax Error"
    }
  }
}

