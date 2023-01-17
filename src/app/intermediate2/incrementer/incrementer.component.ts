import {
  Component,
  Input,
  Output,
  ViewChild,
  OnInit,
  EventEmitter,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [],
})
export class IncrementerComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress!: ElementRef;

  @Input('name') label: string = 'Label';
  @Input() progress: number = 50;

  @Output('updateValue') progressChanged: EventEmitter<number> =
    new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.progressChanged.emit(this.progress);
  }

  changeProgress(progress: number) {
    if (this.progress + progress >= 0 && this.progress + progress <= 100) {
      this.progress += progress;
      this.progressChanged.emit(this.progress);
    }
  }
}
