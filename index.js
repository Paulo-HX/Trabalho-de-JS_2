/*Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
  1  - Listar vagas disponíveis
  2  - Criar um nova vaga
  3  - Visualizar uma vaga
  4  - Inscrever um candidato em uma vaga
  5  - Excluir uma vaga
  6  - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
*/

//vamos começar com um for + swicth para o menu

let vagas = [
    { indice: "1", nome: "Programador", descrição: "Mexer em computador", candidatos: ["João","José","Pedro"] },
    { indice: "2", nome: "Medico", descrição: "Abrir gente", candidatos: ["Maria","Betania","Cleide"]},
    { indice: "3", nome: "Arquiteto", descrição: "Desenhar Casa", candidatos: ["Roberto","Robsvau","Nicolly"] },
  ]



function listarVagas(vagas){
    let informacoes="";
    for (let i = 0; i < vagas.length; i++) {
        let vaga = vagas[i];
        let indice = vaga.indice;
        let nome = vaga.nome;
        let quantidadeCandidatos = vaga.candidatos.length;
    
        informacoes += `Índice: ${indice}, Nome: ${nome}, Quantidade de Candidatos: ${quantidadeCandidatos}\n`;
      }
      alert("Informações das Vagas:\n\n" + informacoes);
    }

function pesquisarVagaPorIndice(vagas) {
    let indiceVaga = parseInt(prompt("Digite o índice da vaga que deseja pesquisar:"));

    if (isNaN(indiceVaga) || indiceVaga <= 0 || indiceVaga > vagas.length) {
      alert("Índice inválido ou fora do intervalo.");
      return;
    }

    let vaga = vagas[indiceVaga - 1];
  
    let informacoesVaga = `Índice: ${vaga.indice}\nNome: ${vaga.nome}\nDescrição: ${vaga.descrição}\nCandidatos: ${vaga.candidatos.join(", ")}`;
    alert("Dados da Vaga:\n\n" + informacoesVaga);
  }
  
function criarNovaVaga(vagas){
    novaVaga=[]
    alert("Para cadastrar uma nova vaga, é necessário inserir os seguintes dados:"+
    "\nNome:"+
    "\nDescrição"+
    "\nData Limite")
    
}

let opcao = ""
do{
    opcao = prompt("Bem Vindo ao BNE. \nSelecione a opção desejada utiliazndo o painel numerico:"+
                    "\n1-Listar vagas disponíveis"+
                    "\n2-Criar um nova vaga"+
                    "\n3-Visualizar uma vaga"+
                    "\n4-Inscrever um candidato em uma vaga"+
                    "\n5-Excluir uma vaga"+
                    "\n6-Sair")

      switch (opcao) {
        case "1":
          listarVagas(vagas);
          break
        case "2":
          criarNovaVaga(vagas);
          break;
        case "3":
          pesquisarVagaPorIndice(vagas);
          break;
        case "4":
          alert("Você escolheu a Opção 4");
          break;
        case "5":
          alert("Você escolheu a Opção 5");
          break;
        case "6":
          alert("Saindo do programa. Até logo!");
          break;
        default:
          alert("Opção Inválida, tente ovamente!")
      }
    } while (escolha !== 6);