import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  constructor() { }
  @Input()
  user: Usuario;


  ngOnInit(): void {
  }

}
