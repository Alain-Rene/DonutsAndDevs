import { Component } from '@angular/core';
import { DonutModel } from '../../models/donuts';
import { DonutsService } from '../../services/donuts.service';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  donutResult:DonutModel = {} as DonutModel;
  constructor(private donutService:DonutsService) {}

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.donutService.getDonuts().subscribe((response:DonutModel) => {
      console.log(response);

      this.donutResult = response;
    })
  }
}
