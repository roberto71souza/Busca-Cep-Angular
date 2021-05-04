import { Component, OnInit } from '@angular/core';
import { Cep } from './models/cep';
import { RequisicaoCepService } from './services/requisicaoCep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'BuscaCepApp';
  listaCeps: Cep[] = [];
  cep!: Cep;
  constructor(private servico: RequisicaoCepService) {
    this.cep = {} as Cep;
  }
  ngOnInit(): void {}

  busca(busca: any): void {
    this.cep = {} as Cep;
    this.servico.getEndereco(busca).subscribe(
      (response) => ((this.cep = response), this.listaCeps.push(response)),
      (error) => console.error(error)
    );
  }

  remover(cep: string): void {
    for (let i = 0; i < this.listaCeps.length; i++) {
      if (this.listaCeps[i].cep === cep) {
        this.listaCeps.splice(i, 1);
      }
    }
    console.log(this.listaCeps);
  }
}
