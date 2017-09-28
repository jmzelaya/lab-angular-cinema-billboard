import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service'


@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {

  constructor(
    private cinemaThang: CinemaService
  ) { }

  ngOnInit() {
  }

}
