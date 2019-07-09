import { Component, OnInit } from '@angular/core';
import { BandaService } from '../banda.service';
import { Banda } from '../banda';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banda-form',
  templateUrl: './banda-form.component.html',
  styleUrls: ['./banda-form.component.css']
})
export class BandaFormComponent implements OnInit {


  private bandaIndex: number;
  private isNew: boolean = true;
  private banda: Banda;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bandaService: BandaService) { }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false;
          this.bandaIndex = params['id'];
          this.bandaIndex = +params['id'];
          this.bandaService.get(this.bandaIndex)
          .subscribe(data => this.banda = data);  
        }else{
          this.isNew = true;
        }
      }
    );
  }

  novo(){
    this.banda = new Banda();
  }

  salvar(){
    let result;
    if(this.isNew){
      result = this.bandaService.add(this.banda);
    } else {
      result = this.bandaService.update(this.banda);
    }
    this.novo();
    
    this.voltar();
    result.subscribe(data => alert('sucesso'+data),
    err => {
      alert("An Erros Occurred. "+err);
    });
  }
  excluir(){
    if(this.banda.codigo == null){
      alert("Selecione alguma banda");
    }else{
      if(confirm("Voce realemte deseja excluir a banda "+this.banda.nomeBanda +" ?"))
        this.bandaService.remove(this.banda.codigo)
        .subscribe(
          data => this.novo,
          err =>{
            alert("Banda não removido! ");
          }
      );
      this.novo();
      this.voltar();
    }
  }
  cancelar(){
    this.voltar();
  }

  voltar(){
    this.router.navigate(['/banda']);
  }
}