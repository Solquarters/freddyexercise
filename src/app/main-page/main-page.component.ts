import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  posts: {
    name: string;
    image: string;
    likes: number;
    isLiked: boolean;
}[] = [
{
  name: "Brother",
  image: "./../../assets/img/banana.jpg",
  likes: 37,
  isLiked: false,
},

{
  name: "Granny",
  image: "./../../assets/img/orange.jpg",
  likes: 105,
  isLiked: false,
},

{
  name: "Michael",
  image: "./../../assets/img/currant.jpg",
  likes: 1034,
  isLiked: false,
}
];

like(index: number){
  this.posts[index].isLiked = !this.posts[index].isLiked
}



}
