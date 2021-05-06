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
  private baseGoogle = 'https://www.google.com/maps/dir/?api=1&origin=';

  @ViewChild(ModalDirective, { static: false }) modal!: ModalDirective;
  constructor() {
    this.cep = {} as Cep;
  }
  ngOnInit(): void {}

  showModal(): void {
    this.modal.show();
  }

  irAte(cep: string): void {
    const url = `${this.baseGoogle}/${cep}`;
    window.open(url, '_blank');
  }
}
