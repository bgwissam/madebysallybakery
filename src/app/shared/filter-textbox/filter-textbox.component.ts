import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  template: `
    <form>
    <div class="text-filter">
         Search:&nbsp;
         <input type="text" name="filter" id="ip2"
                [(ngModel)]="model.filter"
                (keyup)="filterChanged($event)"  />
    </div>
    </form>
  `
})
export class FilterTextboxComponent {


    model: { filter: string } = { filter: null };

    @Output()
    changed: EventEmitter<string> = new EventEmitter<string>();

    filterChanged(event: any) {
      event.preventDefault();
      this.changed.emit(this.model.filter); // Raise changed event
    }
}
