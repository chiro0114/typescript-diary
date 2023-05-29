import { Component } from "./Components";

export class Galleries extends Component<HTMLDivElement,HTMLFormElement> {
    private static _instance: Galleries;
  
    private constructor() {
        super('galleries-template','app',false);
    }
  
    static get instance():Galleries {
      if(!this._instance) {
        this._instance = new Galleries();
      }
  
      return this._instance;
    }
}