import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DonutService } from '../donut.service';
import { Donuts } from '../donuts-interface';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  donuts: Donuts

  constructor(private dService: DonutService) { }

  ngOnInit(): void {
    this.dService.getDonuts().subscribe(
      (data: Donuts) =>
        this.donuts=data
    )
  }

}
