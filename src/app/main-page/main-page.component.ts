import { Component } from '@angular/core';
import { SinglePostComponent } from './single-post/single-post.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SinglePostComponent],
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





}
