// Step 0 : create file for writing your own pipe 
// Step 1 : import interface to write your interface
import {Pipe , PipeTransform} from '@angular/core';
// Step 2 : define name of your pipe
@Pipe({
    name:'custome'
})
// Step 3 :implement pipetransform interface and  export as class
export class CutomePipe implements PipeTransform {
 
    //implentation 
    // this function must take a vlue as input and must return something
      transform(value:any , parameter:any)
      {
          // here we are going to suppose the parameter is limit, so we can use as limit
          return value.substr(0,parameter)
      }
}