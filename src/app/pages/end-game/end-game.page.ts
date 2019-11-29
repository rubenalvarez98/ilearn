import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.page.html',
  styleUrls: ['./end-game.page.scss']
})
export class EndGamePage implements OnInit {
  questionCorrects: number;

  constructor(private activeRoute: ActivatedRoute) {
    const correct = this.activeRoute.snapshot.paramMap.get('id');
    this.questionCorrects = parseInt(correct, 10);
    console.log(this.questionCorrects);
  }

  ngOnInit() {}
}
