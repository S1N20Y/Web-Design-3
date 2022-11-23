let clickCounter;
clickCounter=0; 





function mouseReleased (){
if(dist(mouseX,moouseY, posX, posY) > radius){
	
clickCounter++; 	

if (velX > 0)
	velX++;
}	
else{
	velX--; 
}		
}


