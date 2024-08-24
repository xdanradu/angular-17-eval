import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'est-footer',
  templateUrl: './est-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstFooter {}
