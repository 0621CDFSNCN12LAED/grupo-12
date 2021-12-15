INSERT INTO users (id, first_name, last_name, email, password, category, image) VALUES 
(DEFAULT, 'Patricio', 'Ruggeri', 'pato.ruggeri@hotmail.com', '$2a$10$yH5LqyN7ozYJYytDQjXz8Oghh2Bb6lqg6kW8fJEHwpijjR/I4XEFy', 'admin', 'template.image.jpg'), 
(DEFAULT, 'Juanse', 'Ferrari', 'juanse.ferrari@gmail.com', '$2a$10$bw6rFZU0CJNo.0iqP5NoVufFGWI3R5ziB6JCJH05A6EqjgMONwyv6', 'admin', 'template.image.jpg');

INSERT INTO addresses VALUES 
(DEFAULT, 1, 'Santa Fe', '2150', 'Palermo', 'Buenos Aires','Argentina','8vo B', 1140494130), 
(DEFAULT, 1, 'Ruben Dario', '1560', 'Mar del Plata', 'Buenos Aires','Argentina','', 1156541234), 
(DEFAULT, 2, 'Lavalleja', '1212', 'Belgrano', 'Buenos Aires', 'Argentina', '2do A', 1199887766), 
(DEFAULT, 2, 'Av Juramento', '9090', 'Nuñez', 'Buenos Aires', 'Argentina', 'PB Depto 3', 1109876543);

INSERT INTO categories VALUES 
(DEFAULT,'Camping', 'Elementos para camping, tan ideales como necesarios, para pasar un buen momento con familia y amigos. Carpas, termos, bolsas de dormir, heladeras, linternas y demás accesorios encontralos acá'),
(DEFAULT,'Montañismo', 'Todo lo que necesitás para realizar deportes de aventura como el trekking o el senderismo al aire libre y en las alturas'),
(DEFAULT,'Escalada', 'Elementos y productos técnicos para realizar escalada de forma segura en alta montaña. Preocupate por tu performance, nosotros nos ocupamos del resto'),
(DEFAULT,'SKI', 'Prendas indispensables para practicar Ski y estar preparado y cómodo para las bajas temperaturas del invierno');

INSERT INTO subcategories VALUES 
(DEFAULT,'Carpas y tiendas de dormir', 'Todos los estilos de carpas para camping y tiendas de montaña'),
(DEFAULT,'Termos', 'Los mejores termos para que nunca falta el frío o el calor en tus bebidas'),
(DEFAULT,'Bolsas de dormir', 'Descansá tranquilo con nuestras bolsas para dormir aptas para todos los climas'),
(DEFAULT,'Camperas y ropa técnica para montaña', 'Las prendas que necesitás para el clima hostil de la montaña'),
(DEFAULT,'Mochilas', 'Amplia variedad de mochilas para que no te falte nada en ningún momento'),
(DEFAULT,'Heladeras y elem. de cocina', 'Todo lo que necesitás para tus comidas cuando estás lejos de todo y en la naturaleza'),
(DEFAULT,'Elementos técnicos', 'Que no te falte ninguno al aventurarte en la montaña. Indispensables para actividades de alto riesgo'),
(DEFAULT,'Accesorios', 'Accesorios que no te vas a arrepentir de elegir cuando llegue el momento de necesitarlos');

INSERT INTO products VALUES 
(DEFAULT,'Columbus Mochila Russell 25L', '1632349473403-columbus-mochila-russell-25l.jpeg', 21875, 'Mochila de 25 litros que se puede usar para senderismo o en el dia a dia. Equipada con espalda con sistema de flujo de aire y cinturón y tirantes acolchados que la hacen más confortable y cómoda. El reglaje de tirantes, cinturon y la cinta de pecho, así como las cinchas de compresión permiten el ajuste de la mochila al cuerpo del usuario estabilizando la carga. Bolsa vendido con un parche de goma Columbus para colocar en la parte superior de velcro. Como equipamiento extra la mochila tiene enganches para los bastones de trekking, funda de lluvia y bolsillos con cremalleras internos y externos.',20, 5,true,false,2,5),
(DEFAULT,'Millet Mochila Ubic 40L', '632349593060-millet-mochila-ubic-40l.jpeg', 13400, 'La mochila UBIC 40L es un modelo robusto, actualizada con un modelo más minimalista, ofrece la comodidad transportar todo lo que necesita para largos días bajo el sol (o lluvia, ya que la cubierta para la lluvia está incluida en la parte superior de la bolsa). Incluye un versátil portaesquís. La mochila puede llevar skis y un piolet, así como un bolsillo para colocar una botella. Para caminatas de verano y escapadas de invierno en esquí de travesía, solo una mochila de montaña es suficiente: la UBIC 40. Waterproof. Sistema desmontable y ajustable en la cintura.',0, 20, false, false, 1, 5),
(DEFAULT,'Osprey Mochila Stratos 36L', '1632349790806-osprey-mochila-stratos-36l.jpeg', 15200, 'Fabricada con las especificaciones más rigurosas y la mejor calidad ofrecida por la marca americana, la mochila Osprey Stratos 36L tiene totalmente justificada su gran reputación dentro del mundo del senderismo. Ya sea para caminar en la naturaleza o subir a la montaña, con la Stratos siempre sentirás el viento detrás de ti.', 10, 20, false, false, 2,5),
(DEFAULT,'Osprey Mochila Atmos AG 65L', '1632349743696-osprey-mochila-atmos-ag-65l.jpeg', 22340, 'Si hay un producto que está de manera consistente en el tope de las listas anuales de senderismo y acampada, es la mochila de excursión Osprey Atmos AG 65L. Ganadora de múltiples premios internacionales por su practicidad, resistencia y adaptabilidad, la Atmos AG 65L siempre te brindará una respuesta superior en cualquier actividad outdoor.', 15, 10, true, false, 2, 5),
(DEFAULT,'Petzl Asegurador Reverso', '1632349877588-petzl-asegurador-reverso.jpeg', 5200, 'Polivalente y ultraligero, el REVERSO es un asegurador-descensor diseñado para el aseguramiento y el descenso en rápel. El modo Reverso permite el aseguramiento independiente y simultáneo de uno o dos segundos. Es adecuado para la mayoría de diámetros de cuerda: cuerda simple de 8,5 a 10,5 mm, cuerda doble de 7,1 a 9,2 mm y cuerda gemela de 6,9 a 9,2 mm.', 5, 50, true, false, 3, 7),
(DEFAULT,'Petzl Grigri +', '1632349927954-petzl-grigri--.jpeg', 12000, 'Asegurador con frenado asistido y empuñadura antipánico, para cualquier diámetro de cuerda simple (de 8,5 a 11 mm)', 0, 20, true, false, 3, 7),
(DEFAULT,'Wildcountry Ropeman 1', '1632349977344-wildcountry-ropeman-1.jpeg', 12000, 'El original, el Ropeman tiene una leva de aleación de alumino, es ligéro y fácil de utilizar. Diseñado para el uso en cuerdas con un diámetro de más de 10mm. Perfecto para escalada y autorrescate.   Especificaciones:  - Alloy 7075 T6, - >10mm. - 3 Sigma rated, - CE EN567, - UIAA 126.', 10, 15, false, false, 3, 7),
(DEFAULT,'Black Diamond Asegurador ATC XP', '632350596818-black-diamond-asegurador-atc-xp.jpeg', 3500, 'Black Diamond Asegurador ATC XP', 0, 30, true, false, 3, 7),
(DEFAULT,'Carpa Spinit Confort 4 P/4 Pers Comedor Alero', 'carpa-spinit-confort-4-P4-pers-comedor-alero.jpg', 47300, 'Carpa pensada para el uso familiar, compuesta de una habitación, un alero y un amplio comedor que permite disfrutarla tanto de dia como de noche. 2 entradas + 1 habitaciones + 1 alero + 1 comedor con piso + faldón.', 10, 3, true, false, 1, 1),
(DEFAULT,'Carpa Pop Up Double Skin P/3 Pers', 'pop_up_doubleskin_3man_har_ss20_1.jpg', 26600, 'Esta carpa Pop Up Double Skin para 3 personas es ideal para los campamentos de verano y festivales. Compacta y ultra-liviana, la carpa se arma en segundos. Simplemente sácala de la bolsa y se arma instantáneamente! Resistente al agua, respirable, 1 habitación.', 50, 10, true, false, 1, 1),
(DEFAULT,'Carpa Coleman 2 Personas Xt- Impermeable - Abside', 'carpa-coleman-2-pers-xt-impermeable-abside.jpg', 24300, 'Carpa Coleman XT 2 Personas. Piso de tela impermeable con costuras selladas. En el interior cuenta con un gancho para accesorios (farol, ventilador, etc). Fácil montaje, con mangas para varillas completas. Cuenta con una área seca en la entrada para almacenamiento de equipos. Sobretecho', 20, 15, false, false, 1, 1),
(DEFAULT,'Carpa Himalaya Azteq Ntk 2 - 3 Pers 6000 Mm Trekking', 'carpa-himalaya-azteq-ntk2-3pers-6000mm-trekking.jpg', 86400, 'Muy resistente al viento, y amplio espacio interno. Ideal para la montaña. Ha sido diseñado para ser embalada en forma rápida y ordenada, con una amplia bolsa de trasporte. Con toda la calidad y la tecnología de la serie Azteq. Dimensiones: 2,75 x 3,85 x 1,35 m. Estaciones: 3. Material de las varillas: duraluminio.', 5, 2, true, false, 2, 1),
(DEFAULT,'Termo Matero Cebador Coleman 700 Ml', 'termo-matero-cebador-coleman-700ml-acero-inox.jpg', 7750, 'Construido en acero inoxidable 18/8 con triple capa de aislamiento al vacio. 
• Libres de PBA. 
• Rango de conservacion de calor 25 hs y 48 hs frio. 
• Totalemnte a prueba de derrames y fugas. 
• Tapa matera de media vuelta (seba 360 grados). 
• Altura total con vaso 28,8cm. 
• Medida de la base 7 cm.', 20, 30, true, false, 1, 2),
(DEFAULT,'Termo Coleman Pico Vertedor 3,7 Lts - Azul', 'termo-coleman-pico-vertedor-3,7lts-camping.jpg', 4099, 'ESPECIFICACIONES: 
• Marca: Coleman 
• Modelo: Coleman 3,7Lts 
• Volumen: 3,7 
• Material: Polietileno 
• Aislación: ThermoZone 
• Tapa: Sí 
• Manija de mano: Sí 
• Medidas Externas 30 alto x 18 diametro. 
• Peso: 650 g 
• Fabricado en USA', 10, 30, false, false, 1, 2),
(DEFAULT,'Termo Stanley Adventure 1lt - Acero Inoxidable', 'termo-stanley-adventure-1l-tapon-cebador-acero-inox.jpg', 21480, '•Altura: 28 cm 
• Diametro: 9 cm 
• Capacidad 1 lt. 
• Mantiene frio o calor por 24 hs 
• Heladas 5 Dias 
• Este modelo no posee manija 
• Fabricado en Acero inoxidable 
• Doble pared aislante 
• Cierre y Tapa-vaso reforzados', 0, 30, false, false, 2, 1),
(DEFAULT,'Termo Waterdog Acero Inoxidable Ta21000cc 1 Litro', 'termo-waterdog-ta21000cc-1l.jpg', 8030, '• Termo 100% acero inoxidable 
• Capacidad: 1000cc 
• Doble pared aislante con superficie antideslizante 
• Posee correa para llevarlo al hombro 
• Se puede emplear un filtro de té o café para el llenado 
• Mantiene sus bebidas calientes con un rango de calor óptimo de 8 horas o frías con un rango de 12hs 
• Medida : 9.5 cm diámetro x 28.5 cm de largo 
• El recubrimiento POWDER COATED se aplica electrostáticamente y luego se cura bajo calor para permitir que fluya y forme una “piel”.', 20, 25, true, false, 2, 1),
(DEFAULT,'Bolsa de dormir Mountain Warehouse - Microlite 500', '024194_dgr_microlite_500_square_sleeping_bag_har_aw20_2.jpg', 16000, 'La bolsa de dormir Microlite 500 Cuadrada es ideal para primavera, suave y confortable para disfrutar la belleza por la noche. De forma cuadrada y con comodidades varias. Su peso liviano y la robustez de sus materiales la hacen ideal para actividades como Trekking o Senderismo.', 35, 15, true, false, 2, 3),
(DEFAULT,'Liner Termico Sea To Summit Reactor Extreme Thermolite', 'liner-termico-sea-to-summit-reactor-extreme-thermolite.jpg', 31750, 'El THERMOLITE® Reactor Extreme utiliza nuestro super aislante de 110 g / m3 para aumentar considerablemente el rendimiento del saco de dormir. El diseño espacioso está ligeramente afilado de la cabeza a los pies para reducir el peso y aumentar la eficiencia térmica, y la capucha con cordón puede ajustarse para brindar un calor adicional cuando sea necesario. Este tejido de punto también tiene un gran estiramiento, lo que hace que el Reactor Extreme sea el forro ideal para el durmiente inquieto.', 0, 10, true, false, 1, 3),
(DEFAULT,'Bolsa De Dormir Northland Annapurna -25C Frio', 'bolsa-dormir-northland-annapurna.jpg', 59500, '• Ancho Superior: 80 cm 
• Ancho Inferior: 50 cm 
• Relleno: Hollow Fiber 500 gr/m2 
• Tejido Exterior e Interior: 100% Poliéster 
• Bolsa de Compresión: Sí 
• Peso: 2250 gr 
• Temperatura: RANGO DE CONFORT + 5°C. 
RANGO DE TRANSICIÓN -10°C. (RECOMENDABLE) 
RANGO EXTREMO -25°C. 
EN EL RANGO DE RIESGO, SE ESPERA UNA SENSACIÓN FUERTE DE FRÍO. HAY UN RIESGO DE DAÑO A LA SALUD POR LA HIPOTERMIA.', 10, 8, false, false, 2, 3),
(DEFAULT,'Bolsa De Dormir Spinit Cumbre Para -5 Grados', 'bolsa-dormir-spinit-cumbre.jpg', 8640, 'La bolsa de dormir Spinit Cumbre, es ideal para acampar al aire libre. Facil
de transportar e instalar, la presentación viene en color azul. El relleno ultraliviano de su parte interior, brinda una comoda calidez. Gran resistencia a noches frias a la intemperie.
Medidas (desplegada): 210 x 80 x 50 cm.', 15, 35, true, false, 2, 3),
(DEFAULT,'Galactic Extreme Mens Ski Jacket', '024585_nav_galactic_ii_extreme_ski_jacket_men_aw21_01.jpg', 60500, 'Esta campera ofrece un diseño moderno, sin perder funcionalidad. Hecha de tela resistente al agua con juntas selladas, una camiseta térmica interna y desmontable y cierre, siendo además altamente respirable - ideal para tu próximo viaje de ski. 
Tecnología avanzada de rescate, testeada resistencia del material ante fuertes lluvias, apto para temperaturas de -30°C (testeado en laboratorio). 
Bolsillos varios para uso conveniente y seguro. 
Fabricada 100% en poliester.', 20, 15, true, false, 4, 4),
(DEFAULT,'Campera Orion SKI - Rojo/Azul', 'campera_orion_ski.jpg', 31550, 'Campera ideal para esquí, snowboard o cualquier deporte de nieve. La Orion Ski está pensada para el usuario en pleno movimiento, los codos están articulados evitando el exceso de volumen cuando el brazo adopta la posición necesaria para la práctica del deporte. Los refuerzos en ambos hombros evitan el desgaste cuando se apoyan los esquís. Protege el calor del cuerpo de los efectos fríos del viento. Máxima transpirabilidad, impidiendo el sobrecalentamiento y la transpiración permitiendo la salida del vapor de humedad con facilidad. Resistencia total al viento, respirabilidad y repelencia al agua. Tejido WINDSTOPPER® Soft Shell.', 0, 10, false, false, 4, 4),
(DEFAULT,'Campera Slalom 2 GORE-TEX®', 'campera_slalom_2_gore_tex.jpg', 60500, 'Campera técnica para esquí y snowboard. La Slalom es una campera tercera capa con un calce entallado, pensada para el confort del deportista en plena actividad. Los puños internos elastizados evitan el ingreso de agua, nieve o viento. Cuenta con dos bolsillos internos: uno tiene gran capacidad de carga, de acceso rápido y contiene paño para limpiar las antiparras; el otro tiene cierre y es de menor tamaño. El cierre frontal tiene dos solapas laminadas que evitan el ingreso de agua o viento, además cuenta con dos deslizadores para mayor comodidad en caso de querer ingresar a las prendas internas o para mayor ventilación. Está confeccionada con tejido GORE-TEX®, mantiene el cuerpo seco facilitando la salida del sudor durante la realización de una actividad y conservando el calor corporal una vez finalizada.', 15, 10, true, false, 4, 4),
(DEFAULT,'Camiseta Polartec Neyūn 2', 'camiseta_neyuen_2_10.jpg', 12500, 'Tejidos combinados funcionalmente: uno de mayor capacidad de abrigo (POLARTEC® Power Dry® Haevy) para todas las zonas más vulnerables al choque de frío; y otro más fino y elástico (POLARTEC® Power Dry® Midweight) para zonas que necesitan mayor ventilación, movilidad y menos volumen de tela. Dicha combinación hace a esta prenda muy versátil, ideal para toda actividad aeróbica en climas fríos pudiendo ser usada como única capa o como primera capa en caso de requerir más abrigo. Además estos tejidos cuentan con un porcentaje de fibras recicladas, y el tratamiento Odor Resistant que reduce los malos olores. Esta versión cuenta con pasapulgar en los puños y un bolsillo en el frente de rápido acceso para guardar elementos pequeños, además el nuevo corte le brinda un estilo más estilizado. En el modelo masculino se reduce el corte frontal aportando un calce con mayor confort.', 10, 20, true, false, 4, 4),
(DEFAULT,'Chaleco De Hidratacion Salomon Adv Skin 5 Set', 'adv-skin1-chaleco.jpg', 38000, 'La ADVANCED SKIN 5 SET te facilita el acceso a tus básicos y accesorios. Su sistema de cierre actualizado, combinado con la construcción SensiFit™, se amolda a tu silueta de forma rápida y precisa. La solución definitiva para los corredores de resistencia más exigentes. 
CARACTERÍSTICAS: 
• SensiFit™: Estabilidad/libertad de movimientos Su diseño utiliza tejidos elásticos y transpirables que se amoldan al cuerpo, así como ajustes leves para potenciar el ajuste y la estabilidad. La mochila no rebota, pero permite respirar cómodamente. 
• Quick link: Esta innovadora construcción de correa de esternón te permite ajustar y conectar rápidamente la mochila, incluso sobre la marcha. Además, la correa elástica te permite respirar fácilmente durante actividades intensas. 
• 2 bidones blandos de 500 ml incluidos.', 15, 5, false, false, 2, 7),
(DEFAULT,'Conservadora Coleman 30 Cans High Perfomance', 'conservadora-bolso-termico-coleman-30cans-hp.jpg', 18900, '• Aislamiento premium: Mantiene las bebidas frías hasta 42 horas. 
• Bolsillo frontal con cremallera y laterales de malla: Asegure los artículos secos y los accesorios para un fácil acceso. 
• Cremalleras en forma de T: Fáciles de tirar y resistentes al agua. 
• Correa de hombro acolchada y asas superiores: Para mayor comodidad y versatilidad de transporte.', 0, 10, false, false, 1, 6),
(DEFAULT,'Conservadora Clasica Coleman 5 Qt', 'conservadora-clasica-coleman-viandera-lunchera-5.jpg', 5100, 'Los productos Coleman® se caracterizan por su calidad. Esta lunchera conserva tus alimentos frescos por largo tiempo para que la lleves de camping o picnic. 
• Capacidad 5 Lts. / 6 Latas. 
• Material plástico rígido de alta calidad. 
• Manija para transporte con 1 sola mano. 
• Aislante térmico. 
• Ideal para uso escolar, excursiones, camping, playa o pesca.', 10, 40, true, false, 1, 6),
(DEFAULT,'Heladera Conservadora Bolso Spinit 21lts Portátil Cooler', 'conservadora-bolso-spinit-21lts-cooler.jpg', 5400, 'Características: 
• Base reforzada semi /dura para carga más pesada y estabilidad de contenido. 
• Asas de mano y correa de hombro de gran resistencia. 
• Capacidad máxima de carga 5 Kilos. 
• Material: Tela gris 600D polyester, naranja 600D / PVC. 
• Interior de aluminio, relleno de espuma de polietileno. 
• Medidas: 30 x 19 x 33 cm.', 0, 20, false, false, 1, 6),

(DEFAULT,'Marmita Ntk Cook Aluminio 4 Personas Camping', 'marmita-ntk-cook-aluminio-4p.jpg', 8280, 'Excelente kit para salir del paso y acampar con todos los accesorios de cocina necesarios. Todo construido en aluminio y plásticos PP. 
Kit para 4 personas incluye: 
• 4 Vasos  
• 4 Platos 
• 1 Olla Grande sin tapa 
• 1 Olla Mediana sin tapa 
• 1 Olla Chica con tapa 
• 1 Salero 
• 1 Pimentero 
• 1 Sarten 
• 1 Manija para la sarten 
• 1 Bolsa de transporte', 10, 25, false, false, 1, 6),
(DEFAULT,'Ducha Portatil Sea To Summit - 10 lts', 'ducha-portatil-sea-to-summit-pocket-shower-10lts.jpg', 15550, 'Llene la ducha de bolsillo de 10 litros, gírela para cerrarla en la parte superior y cuélguela. La tela negra absorbe el sol durante el día en el campamento base para una ducha caliente o la llena al final del día para un enjuague fresco. La cabeza de ducha contorneada con aberturas graduadas proporciona una dispersión de rociado parejo. Mecanismo de giro simple y efectivo para ajustar el flujo de encendido y apagado. Da unos 7 minutos de ducha.', 12, 20, true, false, 2, 8),
(DEFAULT,'Cargador Nitecore Ums2 Doble - Visor Digital', 'cargador-nitecore-ums2-doble.jpg', 13200, 'Cargador de batería universal alimentado por USB, permite llevarlo a cualquier parte del mundo. Carga rápida QC 2.0 integrada Max ranura de salida de 3000 mA de carga permite velocidades de carga increíblemente rápidas. Indispensable para alargar la vida útil de tus baterías. 
SOLO INCLUYE: CARGADOR Y CABLE USB. Input: DC 5V/2A - 9V/2A - 18W (MAX). Output: 4.35V±1% / 4.2V±1% / 3.7V±1% / 1.48V±1%. Output current: QC Mode: 3,000mA*1 (MAX) 2,000mA*2 (MAX). Standard Mode: 2,000mA*1 (MAX) 1,000mA*2 (MAX). Compatible con: IMR/Li-ion/LiFePO4: 10440, 14500, 14650, 16500, 16340(RCR123), 16650, 17350, 17500, 17650, 17670, 17700, 18350, 18490,18500, 18650, 18700, 20700, 21700, 22500, 22650,25500, 26500, 26650, 26700. Ni-MH/Ni-Cd: AA, AAA, AAAA, C, D', 15, 50, true, false, 1, 8),
(DEFAULT,'Calentador Lexus B7 Portátil Plegable', 'calentador-lexus-b7-portatil-plegable.jpg', 6370, 'Diseño mini, totalmente plegable, especial para transportar dentro de bolsos y mochilas de camping. De uso sencillo y muy liviano. Fabricado en aleación de aluminio de alta resistencia y acero inoxidable. Resistente a altas temperaturas. 
• Alimentación: Cartuchos de Gas Butano o Propano 
• Peso: 140 gs 
• Medidas: 70x64X95 MM 
• Potencia: 2800w 
• Consumo: 1600 KCAL/H 
• Utiliza cartuchos de gas butano/ propano descartable: 227, 230 o 540gr 
• ADAPTADOR DE REGALO', 20, 30, true, false, 1, 8);