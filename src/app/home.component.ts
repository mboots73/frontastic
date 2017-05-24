import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from './courses/course.service';
import {Course } from './courses/course';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() course: Course;
public  newcourse =  {
    input: '',
    coursepicture: ''
  };
  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }
  addCourse(input, coursepicture) {
    const newCourse = new Course(input, 'This course is about: ' + input, coursepicture,'/courses/'+input, '0');
    this.courseService.addCourse(newCourse);
    console.log(input)
  }
  onSubmit(form: NgForm) {
    console.log(form.valid)
    console.log(this.newcourse)
  }
  changeListener($event):void {
    this.readThis($event.target);
  }
  readThis(inputValue:any):void {
    var file:File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var fileType = inputValue.parentElement.id;
    myReader.onloadend = (e) => {
        console.log(this.newcourse.coursepicture = myReader.result);
        // console.log(document.getElementById('profile-img-tag').setAttribute('src', myReader.result));

    }
    myReader.readAsDataURL(inputValue.files[0]);
  }
}
