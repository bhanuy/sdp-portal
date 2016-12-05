import {Component, Pipe,PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(components: any[], args: any): any {
    var val = args;
    var lowerEnabled = args.length>1 ? args : false;

    // filter components array, components which match and return true will be kept, false will be filtered out
    return components.filter((component)=> {
      if (lowerEnabled) {
        return (component.name.toLowerCase().substr(0, args.length) === args.toLowerCase()) == true;
      } else {
        return false;
      }
    });
    //return components;
  }
}