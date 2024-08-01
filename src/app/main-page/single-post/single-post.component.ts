import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SinglePost } from '../../interfaces/singlepost.interface';


@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

@Input()singlePost: SinglePost = {
  name: "X",
  image: "./../../assets/img/banana.jpg",
  likes: 10000,
  isLiked: false,
  comments: [{name: "John TestX", text: "Super!"},{name: "Petra", text: "wow"}]
}

inputData = "";

    // index muss von main page übergeben werden: 
    like(){
      // this.posts[index].isLiked = !this.posts[index].isLiked;
      // if(this.posts[index].isLiked){this.posts[index].likes++;}
      // else{this.posts[index].likes--;}

      this.singlePost.isLiked = !this.singlePost.isLiked;
      if(this.singlePost.isLiked){this.singlePost.likes++;}
      else{this.singlePost.likes--;}
    }


    addComment(){
      if(this.inputData == ''){return;}
      this.singlePost.comments.push({name:"User", text: this.inputData})
      this.inputData = '';
    }
}
