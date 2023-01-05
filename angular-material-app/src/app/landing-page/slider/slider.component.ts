import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})

export class SliderComponent {

  slider3: number =10;

  slide6_1: number= 0;
  slide6_2: number= 300;

  sliderStart: any= 0;
  sliderEnd: any= 1000;

  getLimit(event: Event){
    let v1= this.sliderStart;
    let v2= this.sliderEnd;
    console.warn("For now getting some error with angular 15, Will solve asap");
    console.log(v1+" : "+v2);
    
  }

  formatValue(value: number){
    // return '10';
    // use Math.round(val) or add step attribute
    return (value/1000)+'k';
  }

}
