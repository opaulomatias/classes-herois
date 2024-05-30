/* ## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada */

  class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
;  }

  toAtack () {
    let attack = "";
    switch(this.type){
        case "mago":
            attack = "usou magia";
            break
        case "guerreiro":
            attack = "usou espada";
            break;
        case "monge":
            attack = "usou artes marciais";
            break;
        case "ninja":
            attack = "usou shuriken";
            break;
        default:
            attack = "Usou um ataque desconhecido";
    }
    console.log(`O ${this.type} ${this.name} ${attack} no seu ataque!`)
  }

  const hero1 = new Hero("Gandalf", 1987, "mago");
  hero1.attack();
