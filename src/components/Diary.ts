import { DiaryModel } from "../model/DiaryModel";
import { Component } from "./Components";

export class Diary extends Component<HTMLTemplateElement, HTMLDivElement> {
    public title: HTMLElement;
    public date: HTMLElement;
    public text: HTMLElement;
    constructor(public diary: DiaryModel) {
        super('gallery-template','diary-galleries',true);
        this.title = this.element.querySelector('.diary-title')!;
        this.date = this.element.querySelector('.diary-date')!;
        this.text = this.element.querySelector('.diary-text')!;

        this.appendDiary();
    }

    private appendDiary() {
        this.title.innerText = this.diary.title;
        this.date.innerText = this.diary.date;
        this.text.innerText = this.diary.text;
    }
}