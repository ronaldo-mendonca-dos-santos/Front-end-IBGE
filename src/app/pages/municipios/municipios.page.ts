import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IbgeService } from '../../services/ibge.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.page.html',
  styleUrls: ['./municipios.page.scss'],
  standalone: false
})
export class MunicipiosPage implements OnInit {

  municipios: any[] = [];
  metadados: any;
  estadoId!: number;
  estadoNome!: string;

  constructor(private route: ActivatedRoute, private ibgeService: IbgeService) { }

  ngOnInit() {

    const estadoId = this.route.snapshot.paramMap.get('id');
    const estadoNome = this.route.snapshot.paramMap.get('nome');

    this.estadoId = estadoId ? +estadoId : 0;
    this.estadoNome = estadoNome ?? ''; 

    // Obter municípios
    this.ibgeService.getMunicipios(this.estadoId).subscribe((data) => {
      this.municipios = data;
      console.log('Municipios:', this.municipios); // Verifique os dados aqui
    });

    // Obter metadados
    this.ibgeService.getMetadados(this.estadoId).subscribe((data) => {
      // Como 'data' é um array, vamos acessar o primeiro item
      this.metadados = data[0]; // Acessando o primeiro item do array
      console.log('Metadados:', this.metadados); // Verifique os dados aqui
    });

  }

}
