import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchCities'
})
export class SearchCitiesPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    console.log(pipeData)
    return pipeData.filter(eachItem => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['country'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }
}