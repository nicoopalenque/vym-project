import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products = [
    {
      productName: 'Kongo Gold',
      description: 'Kongo Gold - Cachorro',
      label: 'Kilos:',
      image: '../../../assets/img/kongo-gold-2-204x300.png'
    },
    {
      productName: 'Kongo Gold',
      description: 'Kongo Gold - Cachorro',
      label: 'Kilos:',
      image: '../../../assets/img/kongo-gold-2-204x300.png'
    },
    {
      productName: 'Kongo Gold',
      description: 'Kongo Gold - Cachorro',
      label: 'Kilos:',
      image: '../../../assets/img/kongo-gold-2-204x300.png'
    },
    {
      productName: 'Kongo Gold',
      description: 'Kongo Gold - Cachorro',
      label: 'Kilos:',
      image: '../../../assets/img/kongo-gold-2-204x300.png'
    },
    {
      productName: 'Kongo Gold',
      description: 'Kongo Gold - Cachorro',
      label: 'Kilos:',
      image: '../../../assets/img/kongo-gold-2-204x300.png'
    },
    {
      productName: 'Kongo Gold',
      description: 'Kongo Gold - Cachorro',
      label: 'Kilos:',
      image: '../../../assets/img/kongo-gold-2-204x300.png'
    }
  ]

  ngOnInit(): void {
  }

}
