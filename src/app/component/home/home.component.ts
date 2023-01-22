import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Resoconto } from 'src/app/model/Resoconto';
import { ResocontoService } from 'src/app/service/resoconto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resoconto!: Resoconto ;
  resoconti!: Resoconto[]; 
  budget: number = 0;
  isEdit = false;
  isEditId = 1;
  constructor(private resocontoS: ResocontoService, private router: Router) { }

  ngOnInit(): void {
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


  deleteResoconto(id: number) {
    if (confirm("Vuoi eliminare questo resoconto?") == true) {
      this.resocontoS.deleteResoconto(id).subscribe(
        data => {
          console.log('eliminato');
          console.log(data);
        }, error => {
          console.log(error);
        }
      )
      setTimeout(() => {this.router.navigate(["/"])}, 500);
    }
  }

  updateResoconto(index: number) {
    console.log(this.resoconto);
    console.log(index);

    this.resocontoS.updateResoconto(this.resoconti[index]).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error();
      }
    )
  }

  onEdit(id: number) {      //per fare in modo che l'input appaia solamente per la riga interessata
    if (this.isEdit ) {
      this.isEdit = false;
      this.isEditId = id;
      console.log(this.isEditId);
    } else {
      this.isEdit = true;
      this.isEditId = id;
    }
      
  }
  onSubmit(index: number) {
    this.updateResoconto(index);
  }
}
