import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-pricing',
	templateUrl: './card-pricing.component.html',
	styleUrls: ['./card-pricing.component.css'],
})
export class CardPricingComponent implements OnInit {
	@Input() titulo: string = 'Digital PS4';
	@Input() valor: string = 'R$ 399,99';
	constructor() {}

	ngOnInit(): void {}
}
