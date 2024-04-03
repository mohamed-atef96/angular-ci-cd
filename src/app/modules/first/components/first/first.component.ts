import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'learn-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  y = signal<number>(0);
  x = signal(10);
  z = computed(() => {
    if (this.y() && typeof +this.y() == 'number') {
      return this.y() * 4;
    }
    return 0;
  });
}
