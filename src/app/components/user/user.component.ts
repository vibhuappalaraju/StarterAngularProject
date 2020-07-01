import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
 // posts:Posts[];
  posts:any;
  isEdit:boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    console.log("SUHHH");
    this.name='John Doe';
    this.age=30;
    this.email = 'test@test.com';
    this.address = {
      street:'123 Main St.',
      city:'Boston',
      state:'MA'
    }
     this.hobbies = ['hello','hi','sup']
   
   
     


    this.dataService.getPosts().subscribe(res => {
      //console.log(posts);

     this.posts=res;
      console.log(this.posts[0].title);
    } );

  }

  onClick() {
    console.log('heyy you');
    this.hobbies.push('New Hobby');

  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;


  }

  deleteHobby(hobby){
    for(let i = 0; i<this.hobbies.length;i++){
      if(hobby==this.hobbies[i]) {
        this.hobbies.splice(i,1)
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
   
}

interface Address {
  street:string;
  city:string;
  state:string;
}

interface Posts {
  id:number;
  title:string;
  body:string;
  userId:number;
}
