/*
Essa função existe para simular uma comunicação com o back-end, usando fetch , axios ou qualquer que seja o metodo,
vale ressaltar que as informações presentes aqui são ficitias e não vieram de nenhuma api existente.
caso queira ver como faria uma comunicação real tenho exemplos de api no meu github: iroDevs

nesse caso seria uma requisição get passando o id do usuario para pegar as listas relacionada a ele

algo assim :

GET -> MinhaApi/list/{id_user}
*/

export function loadLists() {
  return [
    { 
      title: 'Tarefas de Escritório', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Mandar e-mail para o chefe',
          labels: ['#7159c1'],
        },
        {
          id: 2,
          content: 'Preparar apresentação para reunião com cliente',
          labels: ['#7159c1'],
        },
        {
          id: 3,
          content: 'Organizar planilha de gastos',
          labels: ['#7159c1'],
        },
        {
          id: 4,
          content: 'Agendar reunião com a equipe',
          labels: ['#54e1f7'],
        },
        {
          id: 5,
          content: 'Fazer pesquisa de mercado sobre novos fornecedores',
          labels: ['#54e1f7'],
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Revisar documento de projeto',
          labels: [],
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Aprovar solicitação de férias',
          labels: ['#7159c1'],
        },
        {
          id: 8,
          content: 'Finalizar relatório de desempenho',
          labels: ['#54e1f7'],
        },
        {
          id: 9,
          content: 'Reorganizar arquivo de documentos',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Realizar treinamento sobre novas tecnologias',
          labels: [],
        },
        {
          id: 11,
          content: 'Apresentar resultados da pesquisa de satisfação do cliente',
          labels: ['#54e1f7'],
        },
        {
          id: 12,
          content: 'Enviar convite para evento da empresa',
          labels: ['#7159c1'],
        },
        {
          id: 13,
          content: 'Planejar festa de fim de ano',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}

