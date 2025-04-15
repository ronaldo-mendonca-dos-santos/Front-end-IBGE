import { Component, OnInit } from '@angular/core';
import { IbgeService } from '../../services/ibge.service';
import { Router } from '@angular/router';

interface Estado {
  id: number;
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-estados',
  templateUrl: './estados.page.html',
  styleUrls: ['./estados.page.scss'],
  standalone: false
})
export class EstadosPage implements OnInit {

  estados: Estado[] = [];

  constructor(private ibgeService: IbgeService, private router: Router) {}

  ngOnInit() {
    this.ibgeService.getEstados().subscribe(data => {
      this.estados = data.sort((a: Estado, b: Estado) => a.nome.localeCompare(b.nome));
    });
  }

  abrirMunicipios(estado: Estado) {
    this.router.navigate(['/municipios', estado.id, estado.nome]);
  }

}
