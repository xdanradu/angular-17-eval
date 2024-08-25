import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'est-footer',
  templateUrl: './est-footer.component.html',
  styleUrls: ['./x-footer.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstFooter {}
