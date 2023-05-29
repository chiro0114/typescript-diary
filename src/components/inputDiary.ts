import { DiariesState } from "../store/DiariesState";
import { Component } from "./Components";

export class InputDiary extends Component<HTMLDivElement,HTMLFormElement> {
    title: HTMLInputElement;
    date: HTMLInputElement;
    text: HTMLTextAreaElement;
  
    private static _instance: InputDiary;
  
    private constructor() {
      super('form-template','app',true);
  
      this.title = this.element.querySelector('#input-title')! as HTMLInputElement;
      this.date = this.element.querySelector('#input-date')! as HTMLInputElement;
      this.text = this.element.querySelector('#input-text')! as HTMLTextAreaElement;
  
      this.addDiary();
    }
  
    static get instance():InputDiary {
      if(!this._instance) {
        this._instance = new InputDiary();
      }
  
      return this._instance;
    }
  
    addDiary() {
      this.element.addEventListener('submit',this.submitHandler.bind(this)) 
    }
  
    private submitHandler(e: Event) {
      e.preventDefault();
      const galleryObj = {
        id: Math.random().toString(),
        title: this.title.value,
        date: this.date.value.replace('-','/'),
        text: this.text.value
      }
      const state = DiariesState.instance;
      state.addDiary(galleryObj);
      this.inputReset();
    }

    private inputReset() {
        this.title.value = '';
        this.date.value = '' ;
        this.text.value = '' ;
    }
}