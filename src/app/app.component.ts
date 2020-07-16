import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  sobe = [
      {ime:'Soba120', cena:100 },
      { ime:'Soba121',cena:90  },
      {ime:'Soba122',cena:110  },
      { ime:'Soba122',cena:80  },
      { ime:'Soba123',cena:75  }
  ]
 
  add(i:string,c:number){
    
    var novaSoba = { ime:i,cena:c} 
    
     this.sobe.push(novaSoba)

  }

  randomize(){
    this.sobe.sort((d1, d2) => {
      if (d1.cena > d2.cena) return 1;
      if (d1.cena < d2.cena) return -1;
      return 0;
    });
  }

}
