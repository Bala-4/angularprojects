import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[MyLoop]',
  standalone:true
})
export class MyLoop {
  constructor(private templateRef:TemplateRef<any>,private container:ViewContainerRef ) {}
  @Input("MyLoop")set myCustomLoop(num:number){
    for(var i=0;i<num;i++){
      this.container.createEmbeddedView(this.templateRef);
    }
  }
}
