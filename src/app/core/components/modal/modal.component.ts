import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() modal: { opened: false };
  @Input() title: string;
  @Input() message: string;
  @Input() icon: string;
  @Input() buttonLabel: string;
  @Output() okClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const modal: SimpleChange = changes.modal;
  }

  ok() {
    this.okClick.emit();
  }

  dismiss() {
    this.modal.opened = false;
  }

}
