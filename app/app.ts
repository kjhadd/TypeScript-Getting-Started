function startGame() {
    // starting a new game

<<<<<<< HEAD
    const playerName: string = 'Audrey';
=======
    const playerName: string | null = 'Audrey';
>>>>>>> cb66a28f6b66ae4cd4c2025ea0308ecf218862ac
    logPlayer(playerName);
    
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
  }
  
function logPlayer(name) {
  console.log(`New game starting for player: ${name}`);
}

  document.getElementById('startGame')!.addEventListener('click', startGame);