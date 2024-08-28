
type Kind = "rock" | "paper" | "scissors";
type Result = "player1 wins" | "player2 wins" | "draw";
export type PlayArg = {
    player1Hand: Kind;
    player2Hand: Kind;
}

export const play = ({ player1Hand, player2Hand }: PlayArg): Result => {
    if(player1Hand === player2Hand) return 'draw';

    if(
        (player1Hand === 'paper' && player2Hand == 'rock') ||
        (player1Hand === 'rock' && player2Hand == 'scissors') ||
        (player1Hand === 'scissors' && player2Hand == 'paper')
    ) return "player1 wins";

    return 'player2 wins';
}
