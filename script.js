// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;


// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Ball position and velocity
const moveBall = document.querySelector('.ball');
moveBall.style.borderRadius = "50%"
let ballHorizontalMov = .5;
let ballVerticalMov = .5;
let ballVelocity = 1;

// Update the pong world
function update() {
    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
//------------------------------------------------------------------------------------------------------------------
//                        ball  
    ballPosition = ballVerticalMov + ballVelocity
    
    ballHorizontalMov++;
    ballVerticalMov++;

    if (ballHorizontalMov >= GAME_AREA_WIDTH){
        ballHorizontalMov = ballVelocity * -1
    }
    if (ballVerticalMov >= GAME_AREA_HEIGHT){
        ballVerticalMov -= 25
    }
    if (ballHorizontalMov <= GAME_AREA_WIDTH){
        ballHorizontalMov += 1
    }
    if (ballVerticalMov <= GAME_AREA_HEIGHT){
        ballVerticalMov += 1
    }

    ballPosition = ballPosition % (GAME_AREA_HEIGHT - GAME_AREA_WIDTH);
    
    //this is the ball movement
    ballHorizontalMov = ballHorizontalMov + ballVelocity;
    ballVerticalMov = ballVerticalMov + ballVelocity;
    
    moveBall.style.top = `${ballVerticalMov}px`;
    moveBall.style.left = `${ballHorizontalMov}px`;
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);