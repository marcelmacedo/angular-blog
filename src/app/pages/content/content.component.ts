import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

  private id: string | null = "0";
  @Input()
  photoCover: string =
    'https://algaworks-blog.s3.amazonaws.com/wp-content/uploads/Angular.png';
  @Input()
  contentTitle: string = 'O que é Angular?';
  @Input()
  contentDescription: string = `Angular é uma plataforma e framework para construção da interface de
  aplicações usando HTML, CSS e, principalmente, JavaScript, criada pelos
  desenvolvedores da Google. Ele possui alguns elementos básicos que tornam
  essa construção interessante. Dentre os principais, podemos destacar os
  componentes, templates, diretivas, roteamento, módulos, serviços, injeção
  de dependências e ferramentas de infraestrutura que automatizam tarefas,
  como a de executar os testes unitários de uma aplicação. Angular nos ajuda
  a criar Single-Page Applications com uma qualidade e produtividade
  surpeendente! Alguns outros pontos dessa plataforma que merecem destaque
  são o fato de que ela é open source, possui uma grande comunidade, existem
  várias empresas utilizando e tem muito material de estudo para quem deseja
  se aperfeiçoar.`;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponent(this.id)
  }

  //Setar os dados do componente
  setValuesToComponent(id:string | null){
    // Para melhor desempenho, o correto seria comparar id number com number,
    // mas para fins de estudo iremos comparar com string por isso a conversao toString().
    const result = dataFake.filter(artigo => artigo.id.toString() == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
