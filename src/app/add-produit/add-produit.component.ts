import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent  {
  newProduit = new Produit();
  constructor(private produitService: ProduitService){ }
    addProduit() {
      this.produitService.ajouterProduit(this.newProduit);
      //console.log(this.newProduit);
    }
}
