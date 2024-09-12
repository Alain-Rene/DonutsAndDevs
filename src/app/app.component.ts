import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DonutsComponent } from "./components/donuts/donuts.component";
import { DevsComponent } from "./components/devs/devs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DonutsComponent, DevsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonutsAndDevs';

  display: boolean = false;
  donutDisplay(){
    this.display = true;
  }
  devDisplay(){
    this.display = false;
  }
}
