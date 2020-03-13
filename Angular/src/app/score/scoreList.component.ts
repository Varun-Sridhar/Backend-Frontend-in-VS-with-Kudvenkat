import { Component, OnInit } from '@angular/core';
import { IScore } from './score';
import { ScoreService } from './score.service';

@Component({
    selector: '<score-list>',
    templateUrl: 'app/score/scoreList.component.html',
    providers:[ScoreService]
})
export class ScoreListComponent {
    scores: IScore[];

    constructor(private _scoreService: ScoreService) {
    }

    ngOnInit() {
        this._scoreService.getScores().subscribe((scoreData) => this.scores = scoreData);
    }

}