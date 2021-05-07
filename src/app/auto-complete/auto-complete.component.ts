import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
const URL =
  'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInpu') searchInpu!: ElementRef;
  @ViewChild('suggestList') suggestList!: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  getSuggestList(keyword: string) {
    fetch(URL + '&search=' + keyword, {
      method: 'GET',
      mode: 'cors',
    }).then((res) => res.json());
  }
}
