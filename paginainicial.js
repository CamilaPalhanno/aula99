function addUser() {

    /**obtém o valor do campo de entrada de texto com o id "player1NameInput" 
     * na página atual e atribui esse valor à variável "player1Name". */

    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;

  /**"localStorage.setItem("player2Name", player2Name);", 
   * armazenam os valores das variáveis "player1Name" e "player2Name" 
   * no armazenamento local do navegador. 
   * Isso permite que esses valores sejam recuperados em outras páginas da mesma aplicação web, 
   * mesmo que o usuário feche e reabra o navegador. */

      localStorage.setItem("player1Name", player1Name);
      localStorage.setItem("player2Name", player2Name);
  
      /**"window.location = "game_page.html";", redireciona 
       * o usuário para a página "game_page.html". 
       * Quando o usuário chegar nesta página, 
       * o código JavaScript pode recuperar os nomes dos jogadores do armazenamento 
       * local do navegador usando o método "localStorage.getItem()"  
       * e usá-los para iniciar o jogo. */
      
      window.location = "game_page.html";
  }
  