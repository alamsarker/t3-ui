import React from 'react';

import {
    findWinner,
    isFull
} from '../../lib/game';


test('Should find winner from findWinner()', () => {

    let winner = findWinner(["X","X","X","","","","","",""]);
    expect(winner).toEqual('X');

    winner = findWinner(["","","","O","O","O","","",""]);
    expect(winner).toEqual('O'); 
});

test('Should not find winner', () => {

    let winner = findWinner(["","","","","","","","",""]);    
    expect(winner).toBeNull();

});

test('isFull should return true', () => {

    let tie = isFull(["","","","","","","","",""]);    
    expect(tie).toBeFalsy();

});

