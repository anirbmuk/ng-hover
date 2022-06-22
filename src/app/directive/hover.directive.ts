import { Directive, HostListener, Input } from '@angular/core';
import { IGroupHover } from '../types';

@Directive({
  selector: '[appGroupHover]',
})
export class GroupHoverDirective {
  @Input() set appGroupHover(config: IGroupHover) {
    this._elements = config?.elements ? [...config?.elements] : [];
    this._classes = config?.classList?.split(' ') || [];
  }

  _classes?: string[] = [];
  _elements?: HTMLDivElement[] = [];

  @HostListener('mouseenter') onMouseover() {
    if (this._elements && this._classes) {
      for (const element of this._elements) {
        for (const userClass of this._classes) {
          userClass && element.classList?.add?.(userClass);
        }
      }
    }
  }

  @HostListener('mouseleave') onMouseleave() {
    if (this._elements && this._classes) {
      for (const element of this._elements) {
        for (const userClass of this._classes) {
          userClass && element.classList?.remove?.(userClass);
        }
      }
    }
  }
}
