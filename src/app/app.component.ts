import { Component, OnInit, TemplateRef } from '@angular/core';
import { Cep } from './models/cep';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RequisicaoCepService } from './services/requisicaoCep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  modalRef!: BsModalRef;
  title = 'BuscaCepApp';
  listaCeps: Cep[] = [];
  cep!: Cep;
  constructor(
    private servico: RequisicaoCepService,
    private modalService: BsModalService
  ) {}
  ngOnInit(): void {}

  busca(busca: any, template: TemplateRef<any>): void {
    this.cep = {} as Cep;
    this.servico.getEndereco(busca).subscribe(
      (response) => ((this.cep = response), this.listaCeps.push(response)),
      (error) => console.error(error)
    );
    this.modalRef = this.modalService.show(template);
  }
}
