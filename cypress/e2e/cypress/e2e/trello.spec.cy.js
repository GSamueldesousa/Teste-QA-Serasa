const apiKey = Cypress.env TRELLO_API_KEY=833762f363fc8aef60a0d8be80b95180TRELLO_API_KEY=833762f363fc8aef60a0d8be80b95180
const apiToken = Cypress.env TRELLO_API_TOKEN=ATTA9f26e93cf073552e6a12f8a63a8a03ceb99922d07335c8594cbdaa53982c9862B4AB31C6

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
