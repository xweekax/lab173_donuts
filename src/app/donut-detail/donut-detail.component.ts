import { Component, Input, OnInit } from '@angular/core';
import { DonutService } from '../donut.service';
import {Donut} from '../donuts-interface';
import {DonutDetails} from '../donuts-interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {

  donut: Donut;
  donutDetails: DonutDetails;

  constructor(private route: ActivatedRoute, private dService: DonutService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((data: Donut) => this.donut = data);

    this.dService.getDonut(this.donut).subscribe((data: DonutDetails) => this.donutDetails = data);
    
  }

}
