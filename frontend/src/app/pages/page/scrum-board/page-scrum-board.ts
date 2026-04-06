import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'page-scrum-board',
  templateUrl: './page-scrum-board.html',
  standalone: false
})

export class ScrumBoardPage {
	tagsValue = ['enhancement'];
  tagsValidator = Validators.required;
}
