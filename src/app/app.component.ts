import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
/* import { FormsModule } from '@angular/forms';
How to use:
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule ],
  export class AppComponent {
  name = '';
  showName() {
    alert(this.name);
  }
}
<form (ngSubmit)="showName()" #myForm="ngForm">
  <label> Name: </label>
  <input type="text" [(ngModel)]="name" name="name" required/>
  <input type="submit" value="Submit" [disabled]="!myForm.form.valid"/>
</form>
*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NotesListComponent,
    AddNoteComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {

  // FORM CONTROL
  // name = new FormControl('');
  // showName() {
  //   alert(this.name.value);
  // }

  // FORMGROUP
  // loginForm = new FormGroup({
  //   username: new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.required),
  // });
  // login() {
  //   alert(
  //     this.loginForm.value.username +
  //     ' | ' + 
  //     this.loginForm.value.password
  //   );
  // }

}
