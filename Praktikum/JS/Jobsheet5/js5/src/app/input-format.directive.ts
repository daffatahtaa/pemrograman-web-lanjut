import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format')format;
  @Input('appInputFormat')format;

 constructor(private el:ElementRef){ }
 @HostListener('blur') onblur(){
   //console.log("onBlur");
   let value:string = this.el.nativeElement.value;
   this.el.nativeElement.value = value.toLowerCase();
 }

}
