import {Directive, inject, Input, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Directive({
  standalone: true,
  selector: '[seo]'
})
export class SeoDirective implements OnInit {
    @Input() seoTitle = '';
    @Input() seoDescription = '';

    private readonly title = inject(Title);
    private readonly meta = inject(Meta);

    ngOnInit(): void {
        this.title.setTitle(this.seoTitle); 
        this.meta.updateTag({ name: 'description', content: this.seoDescription });
    }
}