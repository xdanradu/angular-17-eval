import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'est-header',
  imports: [
    RouterLink
  ],
  templateUrl: './est-header.component.html',
  styleUrls: ['./est-header.component.scss']
})
export class EstHeader {}
