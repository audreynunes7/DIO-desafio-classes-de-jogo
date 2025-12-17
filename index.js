let nickname = "Cheydemanias"
let idade = 33

class char{
    constructor(classChar, skillChar, weaponChar){
         this.classChar=classChar
         this.skillChar=skillChar
         this.weaponChar=weaponChar
    }

    attack (){
         console.log(`O personagem ${nickname}, da classe ${this.classChar}, atacou com a skill ${this.skillChar} usando um(a) ${this.weaponChar}`)
    }
}

let sinx = new char ("Sinx", "Destruidor de almas", "Katar")
let stalker = new char ("Stalker", "Rajada de Flechas", "Arco")

sinx.attack()
stalker.attack()