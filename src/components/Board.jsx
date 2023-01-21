import { useState } from "react"

import { Cell } from "./Cell";

import './board.css';

export const Board = ({ updateBoard, turn, board, theme }) => {
	return (
		<div className={`board ${theme ? 'board-dark' : 'board-light'}`}>
			{
				board.map((item, index) => (
					<Cell key={index} index={index} updateBoard={updateBoard} turn={turn}>
						{board[index]}
					</Cell>
				))
			}
		</div>
	)
}