import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  constructor(public el:ElementRef ,public renderer:Renderer2) { 
    // this.el.nativeElement.style.color ='red';
  }
  ngOnInit(): void {
    
      // this.renderer.addClass(this.el.nativeElement,'addingClass');
     
      
  }
  @HostListener('mouseover')onMouseover(){
    //This is hostlisener COMMIT
    // this.rendere.setStyle(this.element.nativeElement,"background-color",'blue')
    // this.rendere.setStyle(this.element.nativeElement, 'color','white')
    // this.rendere.setStyle(this.element.nativeElement,"font-size",'60px')
    this.renderer.addClass(this.el.nativeElement,'addingClass');

  }
  @HostListener('mouseleave')onMouseOUT(){
    // this.rendere.setStyle(this.element.nativeElement,"background-color",'transparent')
    // this.rendere.setStyle(this.element.nativeElement,"color",'black')
    // this.rendere.setStyle(this.element.nativeElement,"font-size",'20px')
    this.renderer.removeClass(this.el.nativeElement,'addingClass');
  }
 
  
}
