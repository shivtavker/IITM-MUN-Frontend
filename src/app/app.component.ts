import { Component } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IITM-MUN';

  constructor(
    private spinnerService: Ng4LoadingSpinnerService
) { 
  this.spinnerService.show();
}
}


