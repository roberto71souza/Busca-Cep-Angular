import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Cep } from '../models/cep';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() cep!: Cep;

  @ViewChild(ModalDirective, { static: false }) modal!: ModalDirective;
  constructor() {}
  ngOnInit() {}

  showModal() {
    this.modal.show();
  }
}
