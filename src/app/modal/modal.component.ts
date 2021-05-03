import { Component, OnInit, TemplateRef, Input, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Cep } from '../models/cep';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() cep!: Cep;

  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}
  ngOnInit() {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{class:'modalcustom modal-sm'});
  }
}
