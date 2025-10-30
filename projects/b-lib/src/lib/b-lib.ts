import { Component } from '@angular/core';
import { ALib } from 'projects/a-lib/src/lib/a-lib';

@Component({
  selector: 'lib-b-lib',
  imports: [ALib],
  template: `
    <p>
      b-lib works!
    </p>
  `,
  styles: ``,
})
export class BLib {

}
