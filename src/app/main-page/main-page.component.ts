import { Component } from '@angular/core';
import { SinglePostComponent } from './single-post/single-post.component';
import { SinglePost } from '../interfaces/singlepost.interface';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SinglePostComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  posts: SinglePost[] = [
{
  name: "Brother",
  image: "./../../assets/img/banana.jpg",
  likes: 37,
  isLiked: false,
  comments: [{name: "TestDude", text: "0.0"},{name: "John Test", text: "0.1"}]
},

{
  name: "Granny",
  image: "./../../assets/img/orange.jpg",
  likes: 105,
  isLiked: false,
  comments: [{name: "Maria", text: "1.0"},{name: "Bro", text: "1.1"}]
},

{
  name: "Michael",
  image: "./../../assets/img/currant.jpg",
  likes: 1034,
  isLiked: false,
  comments: [{name: "Lisa", text: "2.0"},{name: "Claude", text: "2.1"}]
}
];





}
