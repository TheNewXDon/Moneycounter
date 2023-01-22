import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Resoconto } from 'src/app/model/Resoconto';
import { ResocontoService } from 'src/app/service/resoconto.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  @ViewChild('addResoconto') addForm!: NgForm;
  
  resoconto: Resoconto = new Resoconto;
  resoconti!: Resoconto[]; 
  budget: number = 0;
  constructor(private resocontoS: ResocontoService, private router: Router) { }

  ngOnInit(): void {
    this.resoconto = new Resoconto();
    this.getResoconti();
  }

  getResoconti() {
    this.resocontoS.getResoconti().subscribe(
      (response: Resoconto[]) => {
        console.log(response)
        this.resoconti = response;
        for (let resoconto of response) {
          this.budget += (resoconto.entrata - resoconto.uscita);
        }
        console.log(this.budget);
      },
      (error: HttpErrorResponse) => alert(error.message)
      );     
  }

  onAddNew(form: NgForm) {
    this.resocontoS.addResoconto(this.resoconto).subscribe(data => {
      console.log("DATA: " + form);
      

      console.log('dentro inserimento this.animal.id:' + this.resoconto.id);
      alert('Successful saving')
      this.router.navigate(["/"]);
    },
    error => {
      console.log(this.resoconto);
      alert("Impossible to save!");
    }
  )
  }

  onSubmit() {
    this.onAddNew(this.addForm);
  }
}
