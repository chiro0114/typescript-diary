export abstract class Component<T extends HTMLElement,U extends HTMLElement> {
    templateEl: HTMLTemplateElement;
    hostEl: T;
    element:U;
  
     constructor(public templateId:string, public hostId:string,public afterOrBefore:boolean) {
      this.templateEl = document.getElementById(templateId)! as HTMLTemplateElement;
      this.hostEl = document.getElementById(hostId)! as T;
  
      const importeNode = document.importNode(this.templateEl.content,true);
        this.element = importeNode.firstElementChild as U;
  
      this.attach();
    }
  
  
    private attach() {
      this.hostEl.insertAdjacentElement(this.afterOrBefore ? 'afterbegin' : 'beforeend',this.element);
    }
}