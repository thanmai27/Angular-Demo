import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // // tslint:disable-next-line: typedef
  // onSubmit(form: NgForm) {
  //   // alert('reaching');
  //   this.userService.postContact(form.value).subscribe(
  //     res => {
  //       this.showSucessMessage = true;
  //       setTimeout(() => this.showSucessMessage = false, 4000);
  //       this.resetForm(form);
  //      },
  //     err => {
  //       if (err.status === 422) {
  //         this.serverErrorMessages = err.error.join('<br/>');
  //       }
  //       else {
  //         this.serverErrorMessages = 'Something went wrong.Please contact admin.';
  //       }
  //     }
  //   );
  // }


}
