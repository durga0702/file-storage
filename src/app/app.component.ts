import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public showbaricon = true // show/ hide toggle icons
  public isMobileView: boolean = false; 
  public mobileBreakpoint: number = 768; // Define your mobile breakpoint


  ngOnInit(): void {
     this.checkMobileView()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobileView();
  }

  checkMobileView() {
    this.isMobileView = window.innerWidth < this.mobileBreakpoint;
  }
  
}
