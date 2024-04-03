import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[learnTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input() tooltipText!:string
  private tooltip: HTMLElement | null = null;
  constructor(private elm: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.tooltip = this.render.createElement('div');
    this.render.addClass(this.tooltip, 'tooltip');
    this.render.appendChild(this.elm.nativeElement, this.tooltip);
    this.render.setProperty(
      this.tooltip,
      'innerText',
      this.tooltipText
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.render.removeChild(this.elm.nativeElement , this.tooltip)
    this.tooltip = null
  }
}
