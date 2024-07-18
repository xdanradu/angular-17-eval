import {Component} from "@angular/core";
import {SeoService} from "../../seo/seo.component";

@Component({
  standalone: true,
  selector: 'home-page',
  templateUrl: './homepage.component.html',
  providers: [SeoService]
})
export class HomepageComponent {}
