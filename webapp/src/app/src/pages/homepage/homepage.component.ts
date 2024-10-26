import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {AuthComponent} from "../../components/auth/auth.component";
import { SeoDirective } from "../../services/seo/seo.directive";
import { CompareComponent } from "../../components/compare/compare";

@Component({
    standalone: true,
    selector: 'home-page',
    templateUrl: './homepage.component.html',
    imports: [
        AuthComponent,
        SeoDirective,
        CompareComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {
}
