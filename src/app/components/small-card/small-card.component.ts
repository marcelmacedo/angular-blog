import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  // @Input() Significa que a propriedade da classe pode ser imputavel.
  @Input()
  id:string = "0"
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardLink: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
