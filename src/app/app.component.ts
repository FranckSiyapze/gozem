import { Component, Renderer2, AfterViewInit, AfterViewChecked,AfterContentChecked  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked{
  title = 'gozem';
  constructor(private renderer: Renderer2) {}
  ngAfterContentChecked(){
    console.log("after content checked");
    let loader = this.renderer.selectRootElement('.saving');
    this.renderer.setStyle(loader, 'display', 'none');
  }
}
