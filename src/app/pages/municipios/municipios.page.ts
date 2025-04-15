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
  nomeEstado = '';
  estadoId!: number;

  constructor(private route: ActivatedRoute, private ibgeService: IbgeService) { }

  ngOnInit() {
    this.estadoId = Number(this.route.snapshot.paramMap.get('id'));
    this.nomeEstado = this.route.snapshot.paramMap.get('nome') || '';

    this.ibgeService.getMunicipios(this.estadoId).subscribe(data => {
      this.municipios = data;
    });
  }

}
