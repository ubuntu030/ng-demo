import { fromEvent, Observable } from 'rxjs';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { filter, map, switchAll, switchMap, tap } from 'rxjs/operators';
const URL =
  'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('suggestList') suggestList!: ElementRef;
  constructor() {}

  keywordInput$!: Observable<any>;
  selectItem$!: Observable<any>;

  searchInputValue = '';
  list = [];
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const self = this;
    self.keywordInput$ = fromEvent(self.searchInput.nativeElement, 'input');
    self.selectItem$ = fromEvent(self.suggestList.nativeElement, 'click');
    self.autoComplete();
  }

  getSuggestList(keyword: any): any {
    return fetch(URL + '&search=' + keyword, {
      method: 'GET',
      mode: 'cors',
    }).then((res) => res.json());
  }

  autoComplete(): void {
    const self = this;
    const keywordInput$ = self.keywordInput$;
    const selectItem$ = self.selectItem$;
    // 輸入查詢
    keywordInput$
      .pipe(
        switchMap((e) => self.getSuggestList(e.target.value)),
        map((response: any) => (self.list = response[1]))
      )
      .subscribe(console.log);
    // 點選建議選項
    selectItem$
      .pipe(
        filter((e) => e.target.matches('li')),
        map((e) => e.target.innerText)
      )
      .subscribe((value) => {
        self.searchInputValue = value;
        self.list = [];
      });
  }
}
