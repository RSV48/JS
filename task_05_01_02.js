/**
 * 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. 
 * Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
 * Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
2*. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,
 */

const settings = {
    rowCount: 9,
    colCount: 9,
    color_black: '#FFFFFF',
    color_white: '#000000',
    color_name: '#C0C0C0',
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    chess: ['Л', 'К', 'C', 'Ф', 'КР', 'П'],
    chessColorBlack: '#2F4F4F',
    chessColorWhite: '#DEB887'
};


const chess_board = {
    settings,
    containerElement: null,
    boardElements: [],
    color_cell: settings.color_white,
    init() {
        let iter = 8;
        this.containerElement = document.getElementById('ches_board'),
            this.containerElement.innerHTML = ''
        for (let row = 0; row < this.settings.rowCount; row++) {
            lineElemnt = [];
            const line_board = document.createElement('line_board');
            this.containerElement.appendChild(line_board);

            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('cell');
                // const h1 = document.createElement('p');
                // cell.appendChild(h1);
                line_board.appendChild(cell);
                lineElemnt.push(cell);

                if (col == 0) {
                    cell.style.backgroundColor = settings.color_name;
                    row != 8 ? (cell.innerText = iter--) : cell.innerText = '';
                } else if (row == 8 && col > 0) {
                    cell.style.backgroundColor = settings.color_name;
                    cell.innerText = settings.letters[col - 1];
                } else { cell.style.backgroundColor = this.color_cell; }
                if (row == 0 && col > 0) {
                    cell.style.color = this.settings.chessColorBlack;
                    this.install_chess(cell, col)

                } else if (row == 1 && col > 0) {
                    cell.style.color = this.settings.chessColorBlack;
                    cell.innerText = this.settings.chess[5];
                }
                if (row == 7 && col > 0) {
                    cell.style.color = this.settings.chessColorWhite;
                    this.install_chess(cell, col)

                } else if (row == 6 && col > 0) {
                    cell.style.color = this.settings.chessColorWhite;
                    cell.innerText = this.settings.chess[5];
                }

                if (this.color_cell == settings.color_black) {
                    this.color_cell = settings.color_white
                } else this.color_cell = settings.color_black
            }
            this.boardElements.push(lineElemnt)
        }

    },
    install_chess(h1, col) {
        switch (col) {
            case 1:
            case 8:
                h1.innerText = this.settings.chess[0];
                break;
            case 2:
            case 7:
                h1.innerText = this.settings.chess[1];
                break;
            case 3:
            case 6:
                h1.innerText = this.settings.chess[2];
                break

            case 4:
                h1.innerText = this.settings.chess[3];
                break;
            case 5:
                h1.innerText = this.settings.chess[4];
                break
        }

    }


}
chess_board.init()
