import {Component,Input, ElementRef, EventEmitter} from 'angular2/core';
import {Cervecero}            from '../../models/cervecero';
import {AsociadoModelCompnt}  from './asociado-modal.compnt';

declare var jQuery:any;
declare var foundation:any;

@Component({
  selector   : 'asociado-item',
  directives : [AsociadoModelCompnt],
  templateUrl: 'app/components/asociados/templates/asociado-item.html'
})
export class AsociadoItemCompnt{

  @Input() asociado;

  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {
    // jQuery(this._elementRef.nativeElement).foundation();
  }
}
