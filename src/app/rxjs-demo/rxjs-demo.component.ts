import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmployeeService } from '../employee.service';

import { BehaviorSubject, fromEvent, Observable, of, throwError } from 'rxjs';
import {
  catchError,
  concatAll,
  debounceTime,
  filter,
  map,
  mapTo,
  pluck,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss'],
})
export class RxjsDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  @ViewChild('dragDOM') dragDOM!: ElementRef;
  @ViewChild('video') video!: ElementRef;
  @ViewChild('anchor') anchor!: ElementRef;
  constructor(private employeeService: EmployeeService) {}
  tableList = [];
  tableList$ = new BehaviorSubject<any[]>([]);

  searchInput$!: Observable<any>;

  private locationArr = ['高雄', '台南', '嘉義', '台中', '苗栗', '台北'];
  private favoriteArr = ['網球', '登山', '羽球', '籃球'];
  sortSate = {
    type: '',
    sort: 1,
  };
  ngOnInit(): void {
    const self = this;
  }

  ngAfterViewInit(): void {
    const self = this;
    self.searchInput$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(500),
      map((val: any) => val.target.value)
    );
    self.searchInput$.subscribe((res) => console.log(res));

    self.dragElement();
    self.dragVideo();
  }

  getData(): void {
    const self = this;
    self.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log(data);
        self.tableList$.next(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  sortDataList(key: string): void {
    const self = this;
    self.tableList$
      .pipe(map((val) => self.sortTable(val, key)))
      .subscribe((data) => {
        console.log(data);
      });
  }

  sortTable(data: any, key: string): void {
    const sortSate = this.sortSate;
    if (sortSate.type === key) {
      sortSate.sort = -sortSate.sort;
    } else {
      sortSate.type = key;
    }
    const newData = data.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return sortSate.sort;
      }
      if (a[key] > b[key]) {
        return -sortSate.sort;
      }
      return 0;
    });
    return newData;
  }

  addNewData(): void {
    const self = this;
    self.tableList$
      .pipe(
        tap((data) => {
          if (data.length === 0) {
            // 主動丟出錯誤
            throwError('no data');
          }
        }),
        map((data) => data.sort(() => 1)),
        map((data) => data.push(self.createData(data))),
        tap((data) => console.log(data)),
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      )
      .subscribe()
      .unsubscribe();
  }

  createData(data: any): any {
    const self = this;
    return {
      ...data[data.length - 1],
      id: data[data.length - 1].id + 1,
      name: 'A' + data[data.length - 1].id + 1,
      address: self.randomLocation(),
      favorite: self.randomFavorite(),
    };
  }
  randomLocation(): string {
    const locationArr = this.locationArr;
    return locationArr[Math.floor(Math.random() * locationArr.length)];
  }
  randomFavorite(): string {
    const favoriteArr = this.favoriteArr;
    return favoriteArr[Math.floor(Math.random() * favoriteArr.length)];
  }

  dragElement(): void {
    const self = this;
    const dragDOM = self.dragDOM.nativeElement;
    const body = document.body;
    const mouseDown = fromEvent(dragDOM, 'mousedown');
    const mouseUp = fromEvent(body, 'mouseup');
    const mouseMove = fromEvent(body, 'mousemove');

    const source = mouseDown.pipe(
      map((e) => mouseMove.pipe(takeUntil(mouseUp))),
      concatAll(),
      map((e: any) => {
        return { x: e.clientX, y: e.clientY };
      })
    );

    source.subscribe((pos) => {
      dragDOM.style.left = pos.x + 'px';
      dragDOM.style.top = pos.y + 'px';
    });
  }

  dragVideo(): void {
    const self = this;
    const body = document.body;
    const anchor = self.anchor.nativeElement;
    const video = self.video.nativeElement;
    const dragDOM = self.dragDOM.nativeElement;
    const mouseDown = fromEvent(video, 'mousedown');
    const mouseUp = fromEvent(body, 'mouseup');
    const mouseMove = fromEvent(body, 'mousemove');

    const scroll$ = fromEvent(document, 'scroll');
    scroll$
      .pipe(map((e) => anchor.getBoundingClientRect().bottom < 0))
      .subscribe((bool) => {
        if (bool) {
          video.classList.add('video-fixed');
        } else {
          video.classList.remove('video-fixed');
        }
      });
    mouseDown
      .pipe(
        filter((e) => video.classList.contains('video-fixed')),
        map((e) => mouseMove.pipe(takeUntil(mouseUp))),
        concatAll(),
        withLatestFrom(mouseDown, (move: any, down: any) => {
          return {
            x: self.validValue(
              move.clientX - down.offsetX,
              window.innerWidth - 320,
              0
            ),
            y: self.validValue(
              move.clientY - down.offsetY,
              window.innerHeight - 180,
              0
            ),
          };
        })
      )
      .subscribe((pos) => {
        video.style.top = pos.y + 'px';
        video.style.left = pos.x + 'px';
      });
  }

  validValue(value: any, max: any, min: any): number {
    return Math.min(Math.max(value, min), max);
  }
}
