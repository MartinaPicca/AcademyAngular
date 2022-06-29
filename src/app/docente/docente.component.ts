import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DocenteService } from '../_services/docente.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent implements OnInit {

  isLoadingData = true;
  constructor(
    private docenteService : DocenteService,
    private ref : ChangeDetectorRef,
  ) { }

  ngOnInit(): void {

    this.getAllDocenti()
    
  }

  getAllDocenti(){
    this.docenteService.getAllDocenti()
    .subscribe(docente => {
      // console.log(docente)
      // this.docenti = docente;
      this.isLoadingData = false;
      this.ref.detectChanges();
    })

  }

}
