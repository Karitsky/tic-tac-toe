class TicTacToe {
    constructor() {
        this.board = [[null, null, null], [null, null, null], [null, null, null]];
        this.player1Turn = true;
        this.player2Turn = false;
    }

    getCurrentPlayerSymbol() {
        if (this.player1Turn == true) {
            return 'x';
        } else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] == null) {
            this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.player1Turn = !this.player1Turn;
            this.player2Turn = !this.player2Turn;
        }
    }

    isFinished() {
        if (this.getWinner() != null) {
            return true;
        } else {
            for (let rows = 0; rows <= 2; rows++) {
                for (let columns = 0; columns <= 2; columns++) {
                    if (this.board[rows][columns] == null) {
                        return false;
                    }
                }
            }
            return true;
        }
    }

    getWinner() {
        let winner = null;
        for (let i = 0; i <= 2; i++) {
            //горизонтальные
            if (this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][2]) {
                winner = this.board[i][0];
            }
            //вертикальные
            if (this.board[0][i] == this.board[1][i] && this.board[0][i] == this.board[2][i]) {
                winner = this.board[0][i];
            }
        }
        //диагональные
        if (this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2]) {
            winner = this.board[1][1];
        } else if (this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0]) {
            winner = this.board[1][1];
        }
        return winner;
    }

    noMoreTurns() {
        for (let rows = 0; rows <= 2; rows++) {
            for (let columns = 0; columns <= 2; columns++) {
                if (this.board[rows][columns] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.isFinished() == false) {
            return false;
        } else if (this.getWinner() != null) {
            return false;
        }
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
