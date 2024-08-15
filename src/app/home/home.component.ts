import { Iproduct } from '../core/interfaces/iproduct';
import { StoreService } from './../store.service';
import { Component, inject, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 private readonly _StoreService = inject(StoreService)
  
  productList :Iproduct []=[]



 ngOnInit(): void {
     this. _StoreService.getproducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.productList=res;
      },

      error:(err)=>{
        console.log(err);
        
      }
      })
  }
}
