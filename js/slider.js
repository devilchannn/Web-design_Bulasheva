let position = 0;

function move(direction) {
    const track = document.getElementById('track');
    const cardWidth = 604; 
    const maxMove = cardWidth; 

    position += direction * cardWidth;

    if (position > 0) position = 0;
    if (position < -maxMove) position = -maxMove;

    track.style.transform = `translateX(${position}px)`;
}