import { Component } from '@angular/core';
import { DevModel } from '../../models/devs';
import { DevsService } from '../../services/devs.service';

@Component({
  selector: 'app-devs',
  standalone: true,
  imports: [],
  templateUrl: './devs.component.html',
  styleUrl: './devs.component.css'
})
export class DevsComponent {
  devsResult:DevModel = {} as DevModel;
  constructor(private devService:DevsService) {}

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.devService.getDevs().subscribe((response:DevModel) => {
      this.devsResult = response;
    })
  }
}
