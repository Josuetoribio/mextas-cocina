window.MX_DATA = (function () {
  var IMG = '../../assets/img/';
  var categories = [
    { id: 'entradas', label: 'Entradas' }, { id: 'fuertes', label: 'Platos fuertes' }, { id: 'mariscos', label: 'Mariscos' },
    { id: 'pastas', label: 'Pastas' }, { id: 'postres', label: 'Postres' }, { id: 'cocteleria', label: 'Coctelería' }, { id: 'vinos', label: 'Vinos' }
  ];
  var menuItems = [
    { id: 'burrata', cat: 'entradas', name: 'Burrata al Heirloom', price: 220, image: IMG + 'burrata.jpg', tag: 'Favorito de la casa', description: 'Burrata artesanal, tomates heirloom, albahaca y reducción balsámica.', long: 'Burrata elaborada cada mañana por un productor de Nuevo León, sobre tomates heirloom de temporada confitados a baja temperatura, aceite de albahaca y una reducción balsámica de doce años.', ingredients: ['Burrata artesanal', 'Tomate heirloom', 'Albahaca genovesa', 'Balsámico de Módena', 'Sal de Colima'], allergens: ['Lácteos'], chef: 'Acompáñala con una copa de Sauvignon Blanc del Valle de Guadalupe.' },
    { id: 'tartar', cat: 'entradas', name: 'Tartar de Res Añejada', price: 290, tag: 'Nuevo', description: 'Res añejada 28 días, yema curada, alcaparra frita y pan de masa madre.', long: 'Corte de res añejado en seco durante 28 días, picado a cuchillo y aderezado al momento frente a la mesa.', ingredients: ['Res añejada', 'Yema curada', 'Alcaparra', 'Chalota', 'Masa madre'], allergens: ['Huevo', 'Gluten'], chef: 'Pídelo con el mezcal de la casa.' },
    { id: 'tostada', cat: 'entradas', name: 'Tostada de Atún Aleta Azul', price: 260, description: 'Atún aleta azul, aguacate tatemado, chile serrano y aceite de ajonjolí.', long: 'Atún de Ensenada marinado en soya de la casa, sobre tostada de maíz nixtamalizado.', ingredients: ['Atún aleta azul', 'Aguacate', 'Serrano', 'Ajonjolí', 'Maíz criollo'], allergens: ['Pescado', 'Ajonjolí', 'Soya'], chef: 'Ideal para compartir al centro.' },
    { id: 'ribeye', cat: 'fuertes', name: 'Rib Eye al Carbón', price: 580, image: IMG + 'rib-eye.jpg', tag: 'Firma del chef', description: 'Rib eye prime, vegetales asados y mantequilla de finas hierbas.', long: 'Rib eye USDA Prime de 450 g, sellado al carbón de encino y terminado con mantequilla de finas hierbas. Se sirve con vegetales de temporada asados a la brasa.', ingredients: ['Rib eye Prime 450 g', 'Mantequilla de hierbas', 'Zanahoria baby', 'Espárrago', 'Cebolla cambray'], allergens: ['Lácteos'], chef: 'Recomendamos término medio y un Cabernet Sauvignon de Parras.' },
    { id: 'filete', cat: 'fuertes', name: 'Filete en Reducción de Hongos', price: 520, image: IMG + 'hero-rib-eye.jpg', description: 'Filete de res, puré de coliflor rostizada, hongos silvestres y jugo de carne.', long: 'Centro de filete sellado en sartén de hierro, sobre un puré sedoso de coliflor rostizada, con hongos silvestres salteados y un jugo de carne reducido durante 48 horas.', ingredients: ['Filete de res', 'Coliflor rostizada', 'Hongos silvestres', 'Jugo de carne', 'Brotes'], allergens: ['Lácteos'], chef: 'Un plato pensado para Malbec o Syrah.' },
    { id: 'pato', cat: 'fuertes', name: 'Pato en Mole de la Casa', price: 480, description: 'Pechuga de pato, mole negro de 32 ingredientes y plátano macho.', long: 'Mole negro preparado en casa cada semana, con pechuga de pato de Querétaro cocinada a punto rosado.', ingredients: ['Pechuga de pato', 'Mole negro', 'Plátano macho', 'Ajonjolí'], allergens: ['Frutos secos', 'Ajonjolí'], chef: 'Nuestra reinterpretación del mole de la abuela del chef.' },
    { id: 'pulpo', cat: 'mariscos', name: 'Pulpo al Olivo', price: 360, image: IMG + 'pulpo.jpg', tag: 'Temporada', description: 'Pulpo asado, cremoso de papa, olivas kalamata y aceite de oliva.', long: 'Pulpo del Golfo cocido lentamente y terminado a la brasa, sobre un cremoso de papa y salsa de olivo inspirada en la costa del Pacífico.', ingredients: ['Pulpo del Golfo', 'Papa cambray', 'Oliva kalamata', 'Aceite de oliva extra virgen', 'Paprika ahumada'], allergens: ['Moluscos', 'Lácteos'], chef: 'Marida con un Albariño bien frío.' },
    { id: 'callo', cat: 'mariscos', name: 'Callo de Hacha Tatemado', price: 420, description: 'Callo de hacha, beurre blanc de chile guajillo y elote tierno.', long: 'Callo de hacha de Sonora sellado a alta temperatura con una emulsión de mantequilla y guajillo.', ingredients: ['Callo de hacha', 'Guajillo', 'Mantequilla', 'Elote'], allergens: ['Moluscos', 'Lácteos'], chef: 'Disponible según la pesca del día.' },
    { id: 'robalo', cat: 'mariscos', name: 'Robalo a la Talla', price: 450, description: 'Robalo con adobo de chiles secos, ensalada de hinojo y cítricos.', long: 'Robalo fresco marinado en adobo rojo y asado a la leña.', ingredients: ['Robalo', 'Adobo de chiles', 'Hinojo', 'Naranja'], allergens: ['Pescado'], chef: 'Para compartir entre dos.' },
    { id: 'risotto', cat: 'pastas', name: 'Risotto de Hongos y Trufa', price: 390, description: 'Arroz carnaroli, hongos silvestres, parmesano añejo y trufa negra.', long: 'Carnaroli cocinado al momento con fondo de hongos, terminado con parmesano de 24 meses y trufa rallada en la mesa.', ingredients: ['Carnaroli', 'Hongos silvestres', 'Parmesano 24 meses', 'Trufa negra'], allergens: ['Lácteos'], chef: 'Pide trufa extra en temporada.' },
    { id: 'tagliatelle', cat: 'pastas', name: 'Tagliatelle al Ragú de Res', price: 340, description: 'Pasta fresca hecha en casa, ragú de costilla braseada ocho horas.', long: 'Pasta al huevo laminada cada mañana, con ragú de costilla de res cocinado lentamente con vino tinto.', ingredients: ['Pasta al huevo', 'Costilla de res', 'Vino tinto', 'Parmesano'], allergens: ['Gluten', 'Huevo', 'Lácteos'], chef: 'Un clásico que nunca sale de la carta.' },
    { id: 'esfera', cat: 'postres', name: 'Esfera de Chocolate', price: 180, image: IMG + 'esfera-chocolate.jpg', tag: 'Firma del chef', description: 'Mousse de chocolate oscuro, crujiente de avellana y caramelo.', long: 'Esfera de chocolate oscuro 70% de Tabasco, rellena de mousse y crujiente de avellana, sobre crema de caramelo salado.', ingredients: ['Chocolate 70%', 'Avellana', 'Caramelo salado', 'Crema'], allergens: ['Lácteos', 'Frutos secos', 'Huevo'], chef: 'Termínala con un café de olla o un oporto.' },
    { id: 'tarta', cat: 'postres', name: 'Tarta de Elote y Cajeta', price: 160, description: 'Tarta tibia de elote, cajeta de Celaya y helado de queso fresco.', long: 'Postre de temporada que honra los sabores del campo mexicano.', ingredients: ['Elote', 'Cajeta', 'Queso fresco', 'Mantequilla'], allergens: ['Lácteos', 'Gluten', 'Huevo'], chef: 'Se sirve tibia; espera cinco minutos.' },
    { id: 'negroni', cat: 'cocteleria', name: 'Negroni de Cacao', price: 240, description: 'Gin, vermut rojo y bitter infusionado con nib de cacao.', long: 'Nuestra versión del clásico, con una infusión de 72 horas de cacao de Tabasco.', ingredients: ['Gin', 'Vermut rojo', 'Bitter', 'Cacao'], allergens: [], chef: 'Aperitivo ideal antes de la cena degustación.' },
    { id: 'mezcalita', cat: 'cocteleria', name: 'Mezcalita de Tamarindo', price: 210, description: 'Mezcal espadín, tamarindo tatemado, chile piquín y sal de gusano.', long: 'Balance entre ahumado, ácido y picante.', ingredients: ['Mezcal espadín', 'Tamarindo', 'Piquín', 'Sal de gusano'], allergens: [], chef: 'Acompaña perfecto la tostada de atún.' },
    { id: 'spritz', cat: 'cocteleria', name: 'Spritz de Jamaica', price: 190, description: 'Espumoso, aperitivo de jamaica y romero.', long: 'Ligero, floral y refrescante.', ingredients: ['Vino espumoso', 'Jamaica', 'Romero'], allergens: ['Sulfitos'], chef: 'Nuestra bebida de terraza.' },
    { id: 'sb', cat: 'vinos', name: 'Sauvignon Blanc · Valle de Guadalupe', price: 1150, unit: 'botella', description: 'Blanco fresco, notas cítricas y minerales. Copa $260.', long: 'Selección de nuestra sommelier de un productor boutique de Baja California.', ingredients: ['Sauvignon Blanc 100%'], allergens: ['Sulfitos'], chef: 'Con la burrata o el pulpo.' },
    { id: 'cab', cat: 'vinos', name: 'Cabernet Sauvignon · Parras', price: 1480, unit: 'botella', description: 'Tinto con cuerpo, fruta negra y taninos firmes. Copa $320.', long: 'De una de las bodegas más antiguas de América, en Coahuila.', ingredients: ['Cabernet Sauvignon 100%'], allergens: ['Sulfitos'], chef: 'El compañero natural del Rib Eye.' },
    { id: 'malbec', cat: 'vinos', name: 'Malbec Reserva · Mendoza', price: 1690, unit: 'botella', description: 'Violetas, ciruela y roble francés 14 meses.', long: 'Malbec de altura con gran estructura.', ingredients: ['Malbec 100%'], allergens: ['Sulfitos'], chef: 'Para el filete en reducción de hongos.' }
  ];
  var experiences = [
    { id: 'degustacion', title: 'Cena degustación', text: 'Una experiencia de varios tiempos diseñada por nuestro chef.', image: IMG + 'esfera-chocolate.jpg', meta: '7 tiempos · 2 h 30 min', price: 'Desde $1,850 p.p.', points: ['Menú de temporada', 'Aperitivo de bienvenida', 'Petit fours'], resType: 'Experiencia gastronómica' },
    { id: 'maridaje', title: 'Maridaje', text: 'Selección de vinos cuidadosamente elegidos.', image: IMG + 'filler', meta: '5 copas · sommelier', price: '+ $980 p.p.', points: ['Vinos mexicanos y del mundo', 'Guía de la sommelier', 'Complemento de la degustación'], resType: 'Experiencia gastronómica' },
    { id: 'mesa', title: 'Mesa del chef', text: 'Una experiencia cercana al proceso creativo de nuestra cocina.', image: IMG + 'rib-eye.jpg', meta: '6–8 invitados · cocina abierta', price: 'Desde $2,600 p.p.', points: ['Frente a la cocina', 'Platos fuera de carta', 'Conversación con el chef'], resType: 'Experiencia gastronómica' },
    { id: 'privados', title: 'Eventos privados', text: 'Un espacio exclusivo para ocasiones especiales.', image: IMG + 'interior.jpg', meta: 'Hasta 80 invitados', price: 'Cotización a medida', points: ['Salón privado', 'Menú personalizado', 'Coordinador dedicado'], resType: 'Evento privado' }
  ];
  experiences[1].image = null;
  var groupOptions = [
    { id: 'privado', icon: 'glass-water', title: 'Eventos privados', text: 'Celebraciones y reuniones privadas.', capacity: '12 – 80 invitados', eventType: 'Reunión privada' },
    { id: 'corporativo', icon: 'briefcase', title: 'Cenas corporativas', text: 'Experiencias para equipos, clientes y socios.', capacity: '10 – 60 invitados', eventType: 'Cena corporativa' },
    { id: 'especial', icon: 'sparkles', title: 'Eventos especiales', text: 'Presentaciones, aniversarios y experiencias gastronómicas.', capacity: 'Espacio completo', eventType: 'Presentación de producto' }
  ];
  var testimonials = [
    { quote: 'Una de las experiencias gastronómicas más memorables que hemos tenido.', name: 'Mariana R.', context: 'Cena degustación · Aniversario' },
    { quote: 'El servicio, la comida y el ambiente están perfectamente equilibrados.', name: 'Carlos M.', context: 'Cena de negocios' },
    { quote: 'Organizamos la cena de fin de año de nuestro equipo y cada detalle fue impecable.', name: 'Lucía G.', context: 'Evento corporativo · 42 invitados' },
    { quote: 'La mesa del chef es otra forma de entender la cocina. Volveremos pronto.', name: 'Andrés P.', context: 'Mesa del chef' }
  ];
  var galleryItems = [
    { src: IMG + 'interior.jpg', alt: 'Salón principal de MEXTAS al anochecer', caption: 'El salón', size: 'wide', pos: 'center' },
    { src: IMG + 'burrata.jpg', alt: 'Burrata al Heirloom', caption: 'Burrata al Heirloom', size: 'tall', pos: 'center' },
    { src: IMG + 'hero-rib-eye.jpg', alt: 'Filete en reducción de hongos', caption: 'Filete en reducción de hongos', size: 'std', pos: '70% center' },
    { src: IMG + 'pulpo.jpg', alt: 'Pulpo al Olivo', caption: 'Pulpo al Olivo', size: 'std', pos: 'center' },
    { src: IMG + 'interior.jpg', alt: 'La barra y la cava', caption: 'La cava', size: 'tall', pos: '78% center' },
    { src: IMG + 'rib-eye.jpg', alt: 'Rib Eye al Carbón', caption: 'Rib Eye al Carbón', size: 'wide', pos: 'center' },
    { src: IMG + 'esfera-chocolate.jpg', alt: 'Esfera de Chocolate', caption: 'Esfera de Chocolate', size: 'std', pos: 'center' }
  ];
  var openingHours = [
    { label: 'Lunes – Jueves', days: [1, 2, 3, 4], open: 13 * 60, close: 23 * 60, text: '13:00 – 23:00' },
    { label: 'Viernes – Sábado', days: [5, 6], open: 13 * 60, close: 24 * 60, text: '13:00 – 00:00' },
    { label: 'Domingo', days: [0], open: 13 * 60, close: 18 * 60, text: '13:00 – 18:00' }
  ];
  var contact = { address1: 'Av. del Valle 123, Col. Del Valle', address2: 'San Pedro Garza García, N.L. 66220', phone: '(81) 1234 5678', phoneHref: 'tel:+528112345678', email: 'hola@mextasrestaurante.mx' };
  var nav = [
    { id: 'inicio', label: 'Inicio' }, { id: 'menu', label: 'Menú' }, { id: 'nosotros', label: 'Nosotros' }, { id: 'experiencias', label: 'Experiencia' },
    { id: 'reservaciones', label: 'Reservaciones' }, { id: 'galeria', label: 'Galería' }, { id: 'contacto', label: 'Contacto' }
  ];
  return { categories: categories, menuItems: menuItems, experiences: experiences, groupOptions: groupOptions, testimonials: testimonials, galleryItems: galleryItems, openingHours: openingHours, contact: contact, nav: nav, IMG: IMG };
})();
