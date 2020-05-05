import { Component, OnInit } from '@angular/core';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'TestComponent';
  constructor(public printService: PrintService) {
    console.log('AppComponent');
  }

  ngOnInit(): void {
  }

  onPrint() {
    console.log('AppComponent TestComponent');
    const invoiceIds = ['101', '102'];
    this.printService.printDocument('invoice', invoiceIds);
  }

}
