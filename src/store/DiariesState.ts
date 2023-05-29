import { Diary } from "../components/Diary";
import { DiaryModel } from "../model/DiaryModel";

export class DiariesState {
  private diaries: DiaryModel[] = [];
  private static _instance: DiariesState;

  private constructor() {}

  static get instance(): DiariesState {
    if (!this._instance) {
      this._instance = new DiariesState();
    }

    return this._instance;
  }

  addDiary(newDiary: DiaryModel) {
    this.diaries.push(newDiary);
    new Diary(newDiary);
  }
}
