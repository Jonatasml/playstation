import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
	@Input() img: string = '';
	@Input() titulo: string = '';
	@Input() valor: string = '';
	@Input() label: string = '';

	constructor() {}

	ngOnInit(): void {}
}
