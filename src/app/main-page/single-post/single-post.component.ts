import { Component, Input, EventEmitter, Output } from '@angular/core';
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
      //an dieser stelle service zugriff
      // ng g service SERVICENAME - JSON Object in den Service verlagern - im child variable mit  variable=inject(SERVICENAME)
      //Achtung: import inject in @angular core einfügen und einzelnes import von SERVICENAME mit dem pfad zur erstellten service datei
      //in der parent html (evtl auch alles importieren) in der for schleife anpassen, Service variable vor das verlagerte json objekt verlinken



      ////In Kevins Tutorial greift die parent componente auf das große JSON Object mit allen Daten zu
      //Hier wird im Child component dummmy sozusagen der Inhalt geändert, der dann in der For Schleife im parent html aktualisiert wird
      //was ist besser vom signal/logic flow ? 
      this.singlePost.comments.push({name:"User", text: this.inputData})
      this.inputData = '';
    }


    @Output()commentOutput = new EventEmitter<string>();

  sendInputData(){
    this.commentOutput.emit(this.inputData);
    // this.inputData = '';
  }
}
