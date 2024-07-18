import {inject, Injectable} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";


@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    console.log('not working');
    // set SEO metadata
    this.title.setTitle("SEO title");
    this.meta.addTag({ name: "description", content: "My fancy meta description. Ideal length 120-150 characters." });
  }
}
