import React, { useState, useEffect, useRef } from 'react';

const TerminalConsole = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    '===============================================',
    ' BEM-VINDA AO LEH-TECH CONSOLE TERMINAL v1.0.0 ',
    '===============================================',
    'Digite "help" para ver os comandos disponíveis.',
    ''
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  const terminalEndRef = useRef(null);
  const canvasRef = useRef(null);
  const inputRef = useRef(null);

  // Estados e Refs do Jogo da Cobrinha (Snake)
  const snakeRef = useRef([[10, 10]]);
  const foodRef = useRef([5, 5]);
  const dirRef = useRef([0, -1]); // Direção inicial (para cima)
  const gameIntervalRef = useRef(null);

  // Auto scroll do terminal
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isPlaying]);

  // Foca o input automaticamente ao abrir
  useEffect(() => {
    if (isOpen && !isPlaying && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isPlaying]);

  // Executa os comandos do CLI
  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    const newHistory = [...history, `guest@leh-tech:~$ ${cmdText}`];

    if (!trimmed) {
      setHistory(newHistory);
      return;
    }

    switch (trimmed) {
      case 'help':
        newHistory.push(
          'Comandos disponíveis:',
          '  about    - Quem é a Leandra (Mensagem da criadora)',
          '  skills   - Exibe o mapa de habilidades em arte digital',
          '  matrix   - Ativa o Modo Hacker no site inteiro (Tema Verde)',
          '  neon     - Restaura o tema original (Fúcsia e Roxo)',
          '  play     - Inicia o jogo Snake (Cobrinha) no terminal',
          '  clear    - Limpa o histórico de comandos',
          ''
        );
        break;

      case 'about':
        newHistory.push(
          '>> MENSAGEM DA CRIADORA:',
          'Olá! Sou a Leandra, desenvolvedora na Superintendência de TI.',
          'Acredito que a programação é uma superforça capaz de transformar',
          'ideias complexas em soluções funcionais para o cidadão.',
          'Com código limpo, lógica sólida e acessibilidade, podemos criar',
          'literalmente qualquer coisa. Seja bem-vindo ao meu mundo!',
          ''
        );
        break;

      case 'skills':
        newHistory.push(
          '>> MINHA TECNOLOGIA CORE:',
          '  [▓▓▓▓▓▓▓▓▓▓]  React & Vite (Avançado)',
          '  [▓▓▓▓▓▓▓▓▓▓]  JavaScript / TypeScript',
          '  [▓▓▓▓▓▓▓▓▓░]  Acessibilidade Digital (e-MAG/WCAG)',
          '  [▓▓▓▓▓▓▓▓░░]  Node.js & APIs REST',
          '  [▓▓▓▓▓▓▓▓▓░]  TailwindCSS / CSS Customizado',
          ''
        );
        break;

      case 'matrix':
        document.body.classList.add('theme-matrix');
        newHistory.push('>> MODO HACKER ATIVADO. Entrando na Matrix... 🟢', '');
        break;

      case 'neon':
        document.body.classList.remove('theme-matrix');
        newHistory.push('>> MODO NEON RESTAURADO. Bem-vinda de volta! 🦄', '');
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'play':
        newHistory.push('>> INICIANDO JOGO SNAKE... Use as SETAS do teclado para jogar!', '');
        setHistory(newHistory);
        startSnakeGame();
        return;

      default:
        newHistory.push(`Erro: Comando "${cmdText}" não reconhecido. Digite "help".`, '');
    }

    setHistory(newHistory);
  };

  // --- MOTOR GRÁFICO DO JOGO SNAKE ---
  const startSnakeGame = () => {
    setIsPlaying(true);
    setScore(0);
    snakeRef.current = [[10, 10], [10, 11], [10, 12]];
    dirRef.current = [0, -1];
    spawnFood();
  };

  const spawnFood = () => {
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 20);
    foodRef.current = [x, y];
  };

  // Loop do Jogo
  useEffect(() => {
    if (!isPlaying) return;

    const gameLoop = () => {
      const head = [...snakeRef.current[0]];
      const dir = dirRef.current;
      const newHead = [head[0] + dir[0], head[1] + dir[1]];

      // Colisão com as paredes ou consigo mesma
      if (
        newHead[0] < 0 || newHead[0] >= 20 ||
        newHead[1] < 0 || newHead[1] >= 20 ||
        snakeRef.current.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])
      ) {
        endSnakeGame();
        return;
      }

      // Adiciona nova cabeça
      snakeRef.current.unshift(newHead);

      // Colisão com a comida
      if (newHead[0] === foodRef.current[0] && newHead[1] === foodRef.current[1]) {
        setScore(prev => prev + 10);
        spawnFood();
      } else {
        snakeRef.current.pop(); // Remove a cauda
      }

      drawGame();
    };

    gameIntervalRef.current = setInterval(gameLoop, 120);

    return () => clearInterval(gameIntervalRef.current);
  }, [isPlaying]);

  // Captura as teclas direcionais para o Snake
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPlaying) return;
      
      // Impede o scroll da tela ao jogar
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowUp':
          if (dirRef.current[1] !== 1) dirRef.current = [0, -1];
          break;
        case 'ArrowDown':
          if (dirRef.current[1] !== -1) dirRef.current = [0, 1];
          break;
        case 'ArrowLeft':
          if (dirRef.current[0] !== 1) dirRef.current = [-1, 0];
          break;
        case 'ArrowRight':
          if (dirRef.current[0] !== -1) dirRef.current = [1, 0];
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  const drawGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Limpa o cenário
    ctx.fillStyle = '#0a0a0c';
    ctx.fillRect(0, 0, 200, 200);

    // Desenha a comida
    ctx.fillStyle = '#d946ef'; // Rosa neon padrão
    ctx.fillRect(foodRef.current[0] * 10, foodRef.current[1] * 10, 8, 8);

    // Desenha a cobra
    ctx.fillStyle = '#00ff00'; // Verde matrix
    snakeRef.current.forEach(([x, y]) => {
      ctx.fillRect(x * 10, y * 10, 9, 9);
    });
  };

  const endSnakeGame = () => {
    clearInterval(gameIntervalRef.current);
    setIsPlaying(false);
    setHistory(prev => [
      ...prev,
      '========================================',
      ` GAME OVER! Pontuação Final: ${score} pts`,
      '========================================',
      'Digite "play" para tentar novamente ou "help".',
      ''
    ]);
  };

  return (
    <div className="terminal-container">
      {/* Botão Flutuante Redondo no Canto Direito */}
      <button 
        className={`terminal-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir Console de Desenvolvedor"
        title="Terminal Hacker"
      >
        <span>&gt;_</span>
      </button>

      {/* Janela do Terminal */}
      {isOpen && (
        <div className="terminal-window glass">
          <div className="terminal-bar">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">guest@leh-tech:~</span>
            <button className="terminal-close" onClick={() => setIsOpen(false)}>&times;</button>
          </div>

          <div className="terminal-body">
            {/* Logs de Histórico */}
            <div className="terminal-logs">
              {history.map((line, idx) => (
                <div key={idx} className="terminal-line">{line}</div>
              ))}
              
              {/* Renderização do Jogo no Console se estiver Ativo */}
              {isPlaying && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', padding: '1rem 0' }}>
                  <canvas 
                    ref={canvasRef} 
                    width="200" 
                    height="200" 
                    style={{ border: '2px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', background: '#0a0a0c' }}
                  />
                  <div style={{ color: '#00ff00', fontWeight: 'bold' }}>SCORE: {score}</div>
                  <div style={{ fontSize: '0.8rem', color: '#cdaecd' }}>Use as SETAS do teclado para guiar.</div>
                </div>
              )}
              
              <div ref={terminalEndRef} />
            </div>

            {/* Input de comandos */}
            {!isPlaying && (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommand(inputVal);
                  setInputVal('');
                }}
                className="terminal-input-form"
              >
                <span className="terminal-prompt">guest@leh-tech:~$</span>
                <input 
                  ref={inputRef}
                  type="text" 
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="terminal-input"
                  placeholder="digite um comando..."
                />
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalConsole;
