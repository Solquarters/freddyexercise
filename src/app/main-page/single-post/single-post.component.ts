import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

@Input()singlePost = {
  name: "X",
  image: "./../../assets/img/banana.jpg",
  likes: 10000,
  isLiked: false,
  comments: [{name: "John TestX", text: "Super!"},{name: "Petra", text: "wow"}]
}

    // index muss von main page übergeben werden: 
    like(){
      // this.posts[index].isLiked = !this.posts[index].isLiked;
      // if(this.posts[index].isLiked){this.posts[index].likes++;}
      // else{this.posts[index].likes--;}

      this.singlePost.isLiked = !this.singlePost.isLiked;
      if(this.singlePost.isLiked){this.singlePost.likes++;}
      else{this.singlePost.likes--;}
    }
}
