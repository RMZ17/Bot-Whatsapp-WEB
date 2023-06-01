//Importar módulos:
const express = require('express');
const qrcode = require('qrcode-generator');
const { Client } = require('whatsapp-web.js');
const app = express();

//Configurar el servidor web:
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});
const port = 3000; //se puede cambiar el número de puerto si es necesario
app.listen(port, () => {
  console.log(`Servidor web iniciado en http://localhost:${port}`);
});

//Generar el código QR:
app.get('/qr', (req, res) => {
    const client = new Client();
    client.initialize();
    client.on('qr', (qr) => {
      const qrCode = qrcode(0, 'M');
      qrCode.addData(qr);
      qrCode.make();
      const qrImage = qrCode.createDataURL(10);
      res.send(`<img src="${qrImage}" alt="QR Code">`);
    //Comandos del bot:
    client.on('message', message =>{
      if(message.body === 'Activate'){
          client.sendMessage(message.from, 'Bot activado 😀 \nCOMANDOS: \n- vino tinto \n- vino rose \n- vino blanco \n- catalogo \n- contacto \n- envios \n- pagos \n- trabajadores \n- distribuidores \n- ofertas');
      }else if(message.body === 'vino tinto'){
          client.sendMessage(message.from, 'Nuestro vino tinto, el más delicioso de nuestro catálogo se hace presente con un sabor único a frutas que a juzgar por su precio es una gran oferta. \nPrecio: s/120');
      }else if(message.body === 'vino rose'){
          client.sendMessage(message.from, 'Nuestro vino rosé con un sabor dulce es de los más vendidos en nuestra tienda gracias a su precio y calidad. \nPrecio: S/80');
      }else if(message.body === 'vino blanco'){
          client.sendMessage(message.from, 'Nuestro vino blanco ofrece un sabor fresco y ligero, siendo nuestro producto menos adquirido no significa que su sabor no sea delicioso. \nPrecio: S/95');
      }else if(message.body === 'catalogo'){
          client.sendMessage(message.from, '- Vino Rosé: Con su sabor dulce es de los más vendidos en nuestra tienda gracias a su precio y calidad. - Precio: S/80 \n- Vino Blanco: Ofrece un sabor fresco y ligero, siendo nuestro producto menos adquirido no significa que su sabor no sea delicioso. - Precio: S/95 \n- Vino Tinto: El más delicioso de nuestro catálogo se hace presente con un sabor único a frutas que a juzgar por su precio es una gran oferta. - Precio: s/120');
      }else if(message.body === 'contacto'){
          client.sendMessage(message.from, 'Para más información acerca de nuestros productos, entregas, etc. CONTACTENOS a este correo -> contactoryr@vinomz.store');
      }else if(message.body === 'envios'){
          client.sendMessage(message.from, 'Los envios que realizamos son de manera internacional, de manera en la que más de un local de nosotros puede estar cerca de su hogar y sin coste de envío.');
      }else if(message.body === 'pagos'){
          client.sendMessage(message.from, '- Aceptamos tarjetas Visa, Mastercard y American Express(Todos los pagos con tarjeta se procesan de forma segura y encriptada.). \n- Puedes realizar una transferencia electrónica directamente a nuestra cuenta bancaria. \n- Pago en efectivo (solo disponible para entregas locales). \n- Aceptamos pagos a través de plataformas populares como PayPal, y proximamente en Stripe, Mercado Pago, Yape, etc. para realizar el pago de tu producto directamente puedes darle a este link -> https://vinomz.store/paypal/');
      }else if(message.body === 'trabajadores'){
          client.sendMessage(message.from, 'Nuestros trabajadores cuantan con más de 5 años de experiencia en este rubro, aqui te contamos un poco de sus habilidades y conocimientos: \n- Renso Pajares Bocanegra: Conocimiento profundo de las diferentes variedades de vino, capacidad para realizar catas y maridajes, habilidades de negociación y ventas. \n- Yanira Carrasca Flores: Amplio conocimiento en vinos de diferentes regiones, habilidades para asesorar a clientes sobre selecciones adecuadas. \n- Maricielo Cajan Silva: Pasión por los vinos de pequeñas bodegas, conocimiento detallado de las historias y procesos de producción de vinos boutique. \n- Ramiro Martinez Zuñiga: Gran experiencia en la gestión de cuentas clave, habilidades para negociar contratos y acuerdos. \n- Jefersson Suclupe Cotrina: Conocimiento profundo de la cadena de suministro del vino, habilidades para crear experiencias de degustación memorables.');
      }else if(message.body === 'distribuidores'){
          client.sendMessage(message.from, 'Nuestra empresa a llegado a más de 45 países en todo el mundo, y esperamos a seguir ofreciendo nuestros productos a la mayor cantidad posible de clientes.');
      }else if(message.body === 'ofertas'){
          client.sendMessage(message.from, 'Para ver nuestros productos en nuestra tienda online te recomendamos darle un vistazo ya que tenemos ofertas por tiempo ilimitado -> https://vinomz.store/tienda/');
      }
    });
    });
  });
  