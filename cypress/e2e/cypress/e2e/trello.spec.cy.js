const apiKey = Cypress.env('TRELLO_API_KEY');
const apiToken = Cypress.env('TRELLO_API_TOKEN');

describe('Testes de API Trello', () => {
  let boardId;
  let listId;

  it('Deve criar um board', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/boards/?name=TesteBoard&key=${apiKey}&token=${apiToken}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      boardId = response.body.id;
    });
  });

  // os outros testes seguem a mesma lógica
});
