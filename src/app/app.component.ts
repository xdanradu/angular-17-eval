import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'projectName';
  basesitesUrl = 'https://localhost:9002/occ/v2/basesites?fields=FULL&country=nl&lang=en&curr=USD';

  constructor(private http: HttpClient) {
    // this.getConfig().subscribe(x=>console.log(x));
  }

  getConfig() {
    return this.http.get(this.basesitesUrl);
  }

}
