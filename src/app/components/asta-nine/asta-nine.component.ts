import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-asta-nine',
  templateUrl: './asta-nine.component.html',
  styleUrls: ['./asta-nine.component.scss']
})
export class AstaNineComponent implements OnInit {

  @Output() addPost: EventEmitter<Post> = new EventEmitter<Post>();

  title = '';
  text = '';

  constructor() { }

  submitPost() {
    const post: Post = {
      title: this.title,
      text: this.text
    };
    this.addPost.emit(post);
    this.title =  this.text = '';
  }

  ngOnInit(): void {
  }

}
