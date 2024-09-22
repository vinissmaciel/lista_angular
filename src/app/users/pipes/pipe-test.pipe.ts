import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class PipeTestPipe implements PipeTransform {


  transform(query: string, list: {name: string, age: number}[]): {name: string, age: number}[] {
    if(query == ""){
      return list;
    }
    return list.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
  }

}
