import { Component, OnInit } from '@angular/core';
import { ModalService} from '../modal';

@Component({
  templateUrl: './welcome.component.html'
})

export class WelcomeComponent implements OnInit {

  public pageTitle = 'Welcome to the world of flavour and design';
  bodytext: string;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.bodytext = '+961 76 809 138';
  }



  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
