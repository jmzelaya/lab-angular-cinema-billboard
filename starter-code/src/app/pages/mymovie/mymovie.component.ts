import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.css']
})
export class MymovieComponent implements OnInit {

  movieInfo: any = {};

  constructor(
    private cinemaThang: CinemaService,
    private activatedThang: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedThang.params.subscribe(
      (myParams) => {
        const theId = Number(myParams)
        this.movieInfo = this.cinemaThang.getMovieDetails(theId);
      }
    );

  }

}
