import { trigger, animate, transition, style, query, animateChild, group } from '@angular/animations';

export const leftToRight =  [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ right: '-100%' }),

  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ right: '100%' })),

    ]),
    query(':enter', [
      animate('300ms ease-out', style({ right: '0%' })),

    ])
  ]),
  query(':enter', animateChild()),
]
export const rightToLeft =  [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%' }),

  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%' })),

    ]),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%' })),

    ])
  ]),
  query(':enter', animateChild()),
];

export const animations =
  trigger('routeAnimations', [

    transition('faq => home', leftToRight),
    transition('faq => blog', leftToRight),
    transition('faq => shop', leftToRight),

    transition('home => blog', leftToRight),
    transition('home => shop', leftToRight),
    
    transition('blog => shop', leftToRight),

    transition('shop => blog', rightToLeft),
    transition('shop => home', rightToLeft),
    transition('shop => faq', rightToLeft),

    transition('blog => home', rightToLeft),
    transition('blog => faq', rightToLeft),

    transition('home => faq', rightToLeft),


  ]);