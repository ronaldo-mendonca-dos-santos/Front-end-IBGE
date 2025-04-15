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

    this.ibgeService.getMunicipios(this.estadoId).subscribe((data) => {
      this.municipios = data;
      console.log('Municipios:', this.municipios);
    });

    this.ibgeService.getMetadados(this.estadoId).subscribe((data) => {
      this.metadados = data[0];
      console.log('Metadados:', this.metadados);
    });

  }

}
