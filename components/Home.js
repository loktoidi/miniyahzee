export const NBR_OF_DICES = 5;
export const NBR_OF_THROWS = 3;
export const MIN_SPOT = 1;
export const MAX_SPOT = 6;
export const BONUS_POINTS_LIMIT = 63;
export const BONUS_POINTS = 50;
export const NBR_OF_SCOREBOARD_ROWS = 7;

Rules of the game
THE GAME: Upper section of the classic Yahtzee dice game. 
You have 5 dices and for the every dice you have 3 throws. 
After each throw you can keep dices in order to get same 
dice spot counts as many as possible. In the end of the 
turn you must select your points from 1 to 6. 
Game ends when all points have been selected. The order for 
selecting those is free.
POINTS: After each turn game calculates the sum for the dices 
you selected. Only the dices having the same spot count are 
calculated. Inside the game you can not select same points from 
1 to 6 again.
GOAL: To get points as much as possible. 63 
points is the limit of getting bonus which gives you 50
points more.