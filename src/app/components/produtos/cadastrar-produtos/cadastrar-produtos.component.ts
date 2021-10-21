import { Router, RouterModule } from '@angular/router';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  produto = {} as IProduto;



  constructor(private produtosService: ProdutosService,private router:Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void{
   this.produtosService.cadastrar(this.produto).subscribe(retorno => {
     this.produto = retorno;
     this.produtosService.exibirMensagem(
       'SISTEMA',
       `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
       'toast-success'
     );
     this.router.navigate(['/produtos'])
   });
  }
}
