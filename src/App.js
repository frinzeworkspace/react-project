import './styles/styles.css'
import './styles/duotone.min.css'
import './styles/fontawesome.min.css'
import './styles/normalize.css'
import './App.css'
import './scripts.js'

function App() {
  return (
    <div className="App">
    <div class="background">
    <header class="gameHeader">
      <h1> Simple Wand, Bow and Mace Game </h1>
      <h1> Choose your Weapon! </h1>
      <p>
        <span class="purple-color">Wand</span> beats <span class="red-color">Mace</span> ︱
        <span class="red-color">Mace</span> beats <span class="green-color">Bow</span> ︱
        <span class="green-color">Bow</span> beats <span class="purple-color">Wand</span>
      </p>
    </header>

    <main class="main-content">
      <div class="game-output">
        <div class="computer-play-div grey-border centering">
          <p class="computer-title">Duel's Result</p>
          <i class="computer-icon fad fa-skull"></i>
          <p class="enemy-weap"> Enemy's Weapon </p>
        </div>
        <div class="game-results">
          <p class="round">Round: 0</p>
          <p class="lives">Your Lives: 5 ︱ Enemy's Lives: 5</p>
          <p class="combat-text">Combat Area: Empty</p>
        </div>
      </div>

      <p class="instruct"> <br/> Predict the enemy's weapon!<br/> 
      </p>

      <div class="weapons-area">
        <button class="wand-button weapon-button">
          <i class="fad fa-wand-magic weapon-icon wand-icon"></i>
        </button>
        <button class="bow-button weapon-button">
          <i class="fad fa-bow-arrow weapon-icon bow-icon"></i>
        </button>
        <button class="mace-button weapon-button">
          <i class="fad fa-mace weapon-icon mace-icon"></i>
        </button>
      </div>
    
      <div class="game-end-div">
        <p class="game-end-text"></p>
        <button class="play-again">Fight Again!</button>
      </div>
    </main>

    <footer class="copyright">
      <p>@Frinze</p>
    </footer>

  </div>
  <script src="scripts.js"></script>
  </div>
  
  );
}

export default App;
