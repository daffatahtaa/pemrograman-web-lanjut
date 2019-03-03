import { TService } from './t.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Daffa Tahta Akbar';
  alamat = 'Malang';
  tanggal = Date.now();
  hobi : any[];
  constructor(private t:TService){}

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hobi = this.t.getHobi();
  }

}
