
/* ESTOS SI:
rojo 5v pluviometro
negro GND pluviometro
azul patilla 10 pluviometro
blanco 5v anemometro
marron GND anemometro
gris patilla 9 anemometro
 */



#include <Adafruit_Sensor.h>
#include <Wire.h>
//#include <SFE_BMP180.h>
#include <Adafruit_BMP280.h>

Adafruit_BMP280 bmp;

#include <DHT.h>
#include <DHT_U.h>



#include <Time.h>

#define DHTTYPE DHT22
const int DHTPin = 11;
float humedad =0;
float temperatura=0;

// HUMEDAD Y TEMPERATURA

float TEMPERATURA;      
float PRESION, P0;  

// PRESIONG

boolean sensorN;
boolean sensorNE;
boolean sensorE;
boolean sensorSE;
boolean sensorS;
boolean sensorSO;
boolean sensorO;
boolean sensorNO;
int variableveleta=0;

// VELETA

int seg = 0;

//TIME

int contadoranemometro =0;
int vueltas =0;
int vueltasporminuto = 0;
boolean varacanemometro;
boolean varananemometro;
float velocidadms;
float velocidadkmh;
float lauraanemometro = 0.1047;
float radioanemometro = 0.054;  //por concretar  /radio del anemometro que haga Toni
float velocidadmax;
float velocidadmin;

//ANEMOMETRO

int contadorpluviometro =0;
boolean varacpluviometro;
int contadorpm;
boolean varanpluviometro;
float cantidadl;
float cantidadml;
float laurapluviometro = 5;  //por concretar  /los ml que hacen falta para que cambie
float laurapluviometro2 = 79.72; //por concretar  /por lo que hay que multiplicar para cambiar de la superficie del embudo a metro cubico
float laurapluviometro3 = 1000;  



DHT dht(DHTPin, DHTTYPE);

void setup() {
 
  Serial.begin(9600);
  setTime(00,00,seg,20,10,2020);
  dht.begin();

   if ( !bmp.begin() ) {                // si falla la comunicacion con el sensor mostrar
    Serial.println("BMP280 no encontrado !");    // texto y detener flujo del programa
    while (1);                    // mediante bucle infinito
  }
  P0 = bmp.readPressure()/100;
 
 /* else
  {
 //   Serial.println("Error al iniciar el BMP180");
    while(1); // bucle infinito
  }
*/
  pinMode(2, INPUT); //2=N  ,  NE=3........
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, INPUT);
  pinMode(6, INPUT);
  pinMode(7, INPUT);
  pinMode(8, INPUT);
  pinMode(9, INPUT); //2-9 veleta
  pinMode(10, INPUT); //pluviometro
  pinMode(11, INPUT); //anemometro
  pinMode(12, INPUT); //temperatura y humedad
  pinMode(13, INPUT);

   
}
 
  void loop() {

   
   

     varacpluviometro = digitalRead(10);  //añadido
     varacanemometro = digitalRead(9);
                                                                         
                                                                                 
  time_t t = now();
  seg = second(t);


   
       

                                                                          //temperatura y humedad
//delay=2000
   
   float h = dht.readHumidity();    
   float temp = dht.readTemperature();
 
  if (isnan(h) || isnan(temp)) {
  //   Serial.println("Failed to read from DHT sensor!");
  //  return;  
   }
 
temperatura = temp;
humedad = h;
 

  /*
 
  if (sensorN==LOW)
  {
    variableveleta=0;                                                    //0=N , 1=NE , 2=E , 3=SE , 4=S , 5=SO , 6=O , 7=NO
   
  }
 if (sensorNE==LOW)
  {
    variableveleta=1;
 
  }
   if (sensorE==LOW)
  {
    variableveleta=2;

  }
 if (sensorSE==LOW)
  {
    variableveleta=3;
 
  } if (sensorS==LOW)
  {
    variableveleta=4;

  }
 if (sensorSO==LOW)
  {
    variableveleta=5;
 
  } if (sensorO==LOW)
  {
    variableveleta=6;
   
  }
 if (sensorNO==LOW)
  {
    variableveleta=7;
 
  }



   //veleta
*/

if (varacanemometro!=varananemometro)
     {
     contadoranemometro = contadoranemometro + 1;
     varananemometro = varacanemometro;
     }
    if (contadoranemometro == 2)
    {
     vueltas = vueltas + 1;
     contadoranemometro = 0;

    }
    // Serial.println(vueltas);
   
      // anemometro

   
if (varacpluviometro!=varanpluviometro)
     {
     contadorpluviometro = contadorpluviometro + 1;
     varanpluviometro = varacpluviometro;
     }
   
   //  Serial.println(contadorpluviometro);
  //   Serial.println(varacpluviometro);
  //   Serial.println(varanpluviometro);
  ;
   
if (seg>=59)
{
     vueltasporminuto = vueltas;
     
     vueltas = 0;

     velocidadms = lauraanemometro * radioanemometro * vueltasporminuto;
     velocidadkmh = velocidadms * 3,6;
 

     contadorpm=contadorpluviometro;
     contadorpm=contadorpm/2;

     cantidadml = contadorpm * laurapluviometro * laurapluviometro2;
     cantidadl = cantidadml / laurapluviometro3;


     TEMPERATURA = bmp.readTemperature();        // almacena en variable el valor de temperatura
  PRESION = bmp.readPressure()/100;        // almacena en variable el valor de presion divido
                        // por 100 para covertirlo a hectopascales
  Serial.print("Temperatura: ");        // muestra texto
  Serial.print(TEMPERATURA);            // muestra valor de la variable
  Serial.println(" C ");                // muestra letra C indicando grados centigrados
   
  Serial.print("Presion: ");            // muestra texto
  Serial.print(PRESION);            // muestra valor de la variable
  Serial.println(" hPa");            // muestra texto hPa indicando hectopascales
/*
  Serial.print("Altitud aprox: ");        // muestra texto
  Serial.print(bmp.readAltitude(P0));  6555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555      // muestra valor de altitud con referencia a P0
  Serial.println(" m");                // muestra letra m indicando metros
*/


// Serial.print(variableveleta);
 //  Serial.print("");
 // Serial.print("viento: ");
   Serial.print("velocidad: ");
   Serial.print( velocidadkmh );
   Serial.println(" km/h");
  Serial.print("Lluvia: ");
   Serial.print(cantidadl);
   Serial.println(" L/min");
/*   Serial.print("Lluvia: ");
   Serial.print(cantidadml);
   Serial.println("ml/m2: ");
*/
   Serial.print("Humidity: ");
   Serial.print(h);
   Serial.println(" %\t");
   Serial.print("Temperature: ");
   Serial.print(temp);
   Serial.println(" *C ");

/*

 status = bmp180.startTemperature();//Inicio de lectura de temperatura
  if (status != 0)
  {  
    delay(status); //Pausa para que finalice la lectura
    status = bmp180.getTemperature(T); //Obtener la temperatura
    if (status != 0)
    {
      status = bmp180.startPressure(3); //Inicio lectura de presión
      if (status != 0)
      {        
        delay(status);//Pausa para que finalice la lectura        
        status = bmp180.getPressure(P,T); //Obtenemos la presión
        if (status != 0)
        {                  
         // Serial.print("Temperatura: ");
         // Serial.println(T,2);
         // Serial.print(" *C , ");
         // Serial.print("Presion: ");
         // Serial.print(P,2);
         // Serial.println(" mb");          
        }      
      }      
    }  
  }
  */
delay(1000);    
  }
 
 
 
 
 
 
  }
