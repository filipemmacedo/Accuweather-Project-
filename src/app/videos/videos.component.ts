import { Component, OnInit } from '@angular/core';
import { Videos } from '../interfaces/videos';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  video: Videos[] = [
    {
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 2,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 3,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 4,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 5,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 6,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 7,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 8,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 9,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 10,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 11,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 12,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 13,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 14,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
    {
      id: 15,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/310x200/92c952",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
