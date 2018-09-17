import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {

    transform(value: number): any {
        const moeda = value.toFixed(2);
        return 'R$ ' + moeda.toString().replace('.', ',');
    }

}
