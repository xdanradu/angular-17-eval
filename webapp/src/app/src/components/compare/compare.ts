import { NgFor } from '@angular/common';
import { CompareService } from './compare.service';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Renderer2,
    ViewChild,
  } from '@angular/core';
  
  @Component({
    standalone: true,
    selector: 'compare',
    templateUrl: './compare.html',
    styleUrls: ['compare.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgFor]
  })
  export class CompareComponent {
    @ViewChild('container', { static: false }) container: ElementRef;
    
    containerService = inject(CompareService);
    renderer = inject(Renderer2);
  
    products = [
        {
            id: 1,
            name: 'iPhone 11',
            description: 'Description 11',
            price: 1000,
            features: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            name: 'iPhone 12',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            price: 10,
            features: '-'
        },
        {
            id: 3,
            name: 'iPhone 13',
            description: '-',
            price: 1000,
            features: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        },
        {
            id: 4,
            name: '-',
            description: '-',
            price: 1,
            features: 'uis aute irure dolor in reprehenderit'
        },
    ]

    ngAfterViewInit(){
        // this.renderer.setStyle(this.container.nativeElement, 'opacity', `0`);
        

        let cards = this.container.nativeElement.querySelectorAll('.card');
        let heights = this.containerService.getMaxHeights(cards);
        for(let i=0;i<cards.length;i++) {
            // this.renderer.setStyle(cards[i], 'opacity', `0`);
            this.setHeights(cards[i], heights);
            // setTimeout(()=>this.renderer.setStyle(cards[i], 'opacity', `1`), 0);
        }

        setTimeout( ()=> {
            this.renderer.setStyle(this.container.nativeElement, 'opacity', `1`);
        }, 500)

    }

    setHeights(card:any , heights: any) {
        let rows= card.querySelectorAll('.row');

        for(let i=0;i<rows.length;i++) {
            this.renderer.setStyle(rows[i], 'height', `${heights[i]}px`);
        }
    }

  }
  