import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[MyIf]',
  standalone:true
})
export class MyIf {
  constructor(private templateRef:TemplateRef<any>,private container:ViewContainerRef) {}
  @Input() set MyIf(condition:boolean){
    if(condition){
      this.container.createEmbeddedView(this.templateRef)
    }
    else{
      this.container.clear()
    }
  }
}
