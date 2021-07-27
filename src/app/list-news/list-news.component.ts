import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  news = [
    {
      image: 'https://static.globalnoticias.pt/jn/image.jpg?brand=JN&type=generate&guid=b8d91322-a2d1-4057-8dd0-5c4b9b81202c&w=296&h=197&t=20210709162934',
      description: [
        {
          url: '',
          title: 'Fim de semana',
          detail: 'Calor desconfina com quase todo o país acima dos 30 graus.',
          date: 'Jul. 22, 2021'
        }
      ]
    },
    {
      image: 'https://static.globalnoticias.pt/jn/image.jpg?brand=JN&type=generate&guid=fcee7a4c-684b-47bb-98b1-28302cf30403&w=296&h=197&t=20210721072153',
      description: [
        {
          url: '',
          title: 'IPMA',
          detail: 'Interior com mais de 30 graus e alto risco de incêncio.',
          date: 'Jul. 21, 2021'
        }
      ]
    },
    {
      image: 'https://static.globalnoticias.pt/jn/image.jpg?brand=JN&type=generate&guid=29860167-f83f-4d40-ba47-8988b7dd2478&w=296&h=197&t=20201226102910',
      description: [
        {
          url: '',
          title: 'Tempo',
          detail: 'Sábado soalheiro e frio com temperaturas negativas',
          date: 'Jul. 21, 2021'
        }
      ]
    },
    {
      image: 'https://i.natgeofe.com/n/3128ec12-55d6-4203-ae81-f278c25f89da/hurricane-florence-iss056e162202_orig.jpg',
      description: [
        {
          url: '',
          title: 'Furacão Severo',
          detail: 'Este tornado afectou o condado de Lee, com ventos que chegaram aos 266 quilómetros por hora.',
          date: 'Jul. 6, 2021'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
