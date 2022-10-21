import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor() {}



  parcours(): void {

    const names: string [] = ["john","sara"];

      for (let index = 0; index < names.length; index++) {
        const unNom = names[index];
        console.log(unNom);
      }
  }

  /**
   * 
   * @param n 
   * @returns 
   */
  generate(n: number):boolean [] {
    return null; 
  }

  /**
   * 
   * @param n 
   */
  crible(n: number): boolean [] {
    return null;
  }

  /**
   * 
   * @param n 
   */
  printy(n: number):void {
    
  }












}
