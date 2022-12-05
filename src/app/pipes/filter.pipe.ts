import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restuarantList: any[], filterString:String,propName:any): any[] {
    const result:any=[]
    if(! restuarantList || filterString=='' || propName=='') {
      return restuarantList
    }
    
  restuarantList.forEach((resturant:any)=>{
  if (resturant[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
    result.push[resturant]
  }
  })
  return result
  }
}
