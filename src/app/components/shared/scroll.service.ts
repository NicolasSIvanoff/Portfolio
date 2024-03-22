import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private sectionIdSource = new BehaviorSubject<string>('');
  public currentSectionId: Observable<string> = this.sectionIdSource.asObservable();

  public changeSectionId(sectionId: string) {
    this.sectionIdSource.next(sectionId);
  }
}
