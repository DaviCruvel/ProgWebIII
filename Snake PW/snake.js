window.onload = function (){
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 60);


    const vel = 1;
    var velX = velY = 0;
    //velX = 1;
    var px = 3; //Posição X 
    var py = 2; //Posição Y
    var tp = 20;
    var qp = 20;
    var comidaX = comidaY = 15;
    comidaX = Math.floor(Math.random()*qp);
    comidaY = Math.floor(Math.random()*qp);
    var trail = [];
    tail = 3;
    function game(){
        px += velX;
        py += velY;
        if(px < 0){
            // Gameover
            velX = velY = 0;
            tail = 3;
            px = 3;
            py = 2;
        }if(px > qp-1){
            // Gameover
            velX = velY = 0;
            tail = 3;
            px = 3;
            py = 2;
        }if(py < 0){
            // Gameover
            velX = velY = 0;
            tail = 3;
            px = 3;
            py = 2;
        }if(py > qp-1){
            // Gameover
            velX = velY = 0;
            tail = 3;
            px = 3;
            py = 2;
        }

        ctx.fillStyle = "#EEEEEE";
        ctx.fillRect(0, 0, stage.width, stage.height);    
        
        ctx.fillStyle = "#111111";
        ctx.fillRect(comidaX*tp, comidaY*tp, tp, tp);

        ctx.fillStyle = "#111111";
        for(var i = 0; i < trail.length; i++){
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1, tp-1);
            if(trail[i].x == px && trail[i].y == py){
                velX = velY = 0;
                tail = 3;
            }
        }
        trail.push({x:px, y:py});
        while(trail.length > tail){
            trail.shift();
        }
        if (comidaX == px && comidaY == py){
            tail++;
            comidaX = Math.floor(Math.random()*qp);
            comidaY = Math.floor(Math.random()*qp);
        }
    }
    function keyPush(event){
        switch (event.keyCode) {
            case 37: //Esquerda
                velX = -vel;
                velY = 0;
                break;
            case 38: //Cima
                velX = 0;
                velY = -vel;
                break;
            case 39: //Direita
                velX = vel;
                velY = 0;
                break;
            case 40: //Baixo
                velX = 0;
                velY = vel;
                break;
            default:
                break;
        }
    }
}