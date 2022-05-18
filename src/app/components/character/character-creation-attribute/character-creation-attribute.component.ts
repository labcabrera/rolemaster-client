import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-creation-attribute',
  templateUrl: './character-creation-attribute.component.html',
  styleUrls: ['./character-creation-attribute.component.scss']
})
export class CharacterCreationAttributeComponent {

  @Input() attribute: string = "";
  @Input() attributeName: string = "";
  @Output() onChange = new EventEmitter<any>();

  value: number = 66;
  bonus: number = 0;

  updateAttribute() {
    this.onChange.emit({
      attribute: this.attribute,
      value: this.value
    });
  }

  incrementValue(v: number) {
    const check = this.value + v;
    this.value = Math.min(100, check);
    this.value = Math.max(1,check);
    this.updateAttribute();
  }

}
