import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {AuthComponent} from "../../components/auth/auth.component";
import { SeoDirective } from "../../seo/seo.directive";

@Component({
    standalone: true,
    selector: 'home-page',
    templateUrl: './homepage.component.html',
    imports: [
        AuthComponent,
        SeoDirective
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {
}
