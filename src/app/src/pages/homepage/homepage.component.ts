import {ChangeDetectionStrategy, Component} from "@angular/core";
import {SeoService} from "../../seo/seo.component";
import {AuthComponent} from "../../auth/auth.component";

@Component({
    standalone: true,
    selector: 'home-page',
    templateUrl: './homepage.component.html',
    imports: [
        AuthComponent
    ],
    providers: [SeoService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {}
