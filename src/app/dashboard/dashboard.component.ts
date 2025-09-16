import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  /**
   * file uploading
   * @param file 
   */
  onFileUpload(file:any){
   alert('Uploaded Successfully')
  }

  /**
   * copy link
   */
  copyLink(){
    navigator.clipboard.writeText('https://google.com')
    .then(() => {
      alert('Link copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}
