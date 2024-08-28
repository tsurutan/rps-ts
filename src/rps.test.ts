import {play, PlayArg} from '@/rps';
import {describe, expect, test} from 'vitest';

describe('rps', () => {
    describe('player1 wins', (params) => {
        test.each([
            { player1Hand: 'rock', player2Hand: 'scissors'},
            { player1Hand: 'scissors', player2Hand: 'paper'},
            { player1Hand: 'paper', player2Hand: 'rock'},
        ] as PlayArg[])('player1 should win when player 1 do $player1Hand and player 2 do $player2Hand', (params) => {
            expect(play(params)).toBe("player1 wins")
        })
    })

    describe('player2 wins', (params) => {
        test.each([
            { player1Hand: 'scissors', player2Hand: 'rock'},
            { player1Hand: 'paper', player2Hand: 'scissors'},
            { player1Hand: 'rock', player2Hand: 'paper'},
        ] as PlayArg[])('player2 should win when player 1 do $player1Hand and player 2 do $player2Hand', (params) => {
            expect(play(params)).toBe("player2 wins")
        })
    })

    describe('draw', (params) => {
        test.each([
            { player1Hand: 'rock', player2Hand: 'rock'},
            { player1Hand: 'scissors', player2Hand: 'scissors'},
            { player1Hand: 'paper', player2Hand: 'paper'},
        ] as PlayArg[])('it should be draw when player 1 do $player1Hand and player 2 do $player2Hand', (params) => {
            expect(play(params)).toBe("draw")
        })
    })
})
