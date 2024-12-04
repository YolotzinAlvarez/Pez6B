canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.



background_image = "arrecife.webp";

pez_image = "pez.png";

pez_x = 10;
pez_y = 10;

//Crea la función "add()"
 function add(){
background_imgTag=new Image();	                                     //Define la variable con una nueva imagen
background_imgTag.onload=uploadBackground;	                                     // Define una función para cargar esta variable
background_imgTag.src=background_image;	                                     // Carga la imagen

pez_imgTag= new Image();                                       //Define la variable con una nueva imagen
pez_imgTag.onload = uploadpez;	                                     // Define una función para cargar esta variable
pez_imgTag.src=pez_image;	                                     // Carga la imagen
                                        }

//Crea una función "uploadBackground()".
function uploadBackground(){     
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

                                         //Dibuja la imagen de fondo
}
//Crea una función "uploadrover()".
function uploadpez(){
    ctx.drawImage(pez_imgTag, pez_x, pez_y, 100, 90);

                                        //Dibuja la imagen del explorador
}



    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
		window.addEventListener("keydown", my_keydown);
        function my_keydown(e)
    {
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if(keyPressed == '38')
        {
             up();
        }
    if(keyPressed == '40')
        {
             down();
        }
        if(keyPressed == '37')
        {
             left();
        }
        if(keyPressed == '39')
        {
             right();
        }

     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
		




    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
    }

function up()
{
if(pez_y >=0)
{
    pez_y = pez_y - 10;
    uploadBackground();
    uploadpez();
}
}
function down()
{
    if(pez_y <=500)
    {
        pez_y=pez_y+ 10;
        uploadBackground();
        uploadpez();
    }
	
}
function right()
{
    if(pez_y >=0)
        {
            pez_x=pez_x + 10;
            uploadBackground();
            uploadpez();
        }
}
function left()
{
    if(pez_y <=500)
        {
            pez_x=pez_x - 10;
            uploadBackground();
            uploadpez();
        }
}



