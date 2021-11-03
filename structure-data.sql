INSERT INTO users (id, first_name, last_name, email, password, category, image) VALUES 
(DEFAULT, 'Juan', 'Ferrari', 'juan@gmail.com', '1234', 'admin', DEFAULT ), 
(DEFAULT, 'Patricio', 'Ruggeri', 'pato@gmail.com', '1234', 'admin', DEFAULT ), 
(DEFAULT, 'Pedro', 'Fernandez', 'pedro@gmail.com', '1234', 'admin', DEFAULT ), 
(DEFAULT, 'Camila', 'Gonzalez', 'camila@gmail.com', '1234', 'admin', DEFAULT ), 
(DEFAULT, 'Delfina', 'Perez', 'delfina@gmail.com', '1234', 'admin', DEFAULT ), 
(DEFAULT, 'Carlos', 'Ramirez', 'carlos@gmail.com', '1234', 'admin', DEFAULT );

INSERT INTO addresses VALUES 
(DEFAULT, 1, 'Santa Fe', '1111', 'CABA', 'CABA','Argentina','1 piso',1140494130 ), 
(DEFAULT, 1, 'Congreso', '1111', 'Recoleta', 'CABA','Argentina','2A',1176541234 ), 
(DEFAULT, 1, 'Lavalleja', '1212', 'Belgrano', 'CABA','Argentina','',1199887766 ), 
(DEFAULT, 2, 'Av Juramento', '9090', 'Nuñez', 'CABA','Argentina','',1109876543 ), 
(DEFAULT, 2, 'Balcarse', '1090', 'Mar del Plata', 'Buenos Aires','Argentina','7b',1109098765 ), 
(DEFAULT, 3, 'Entre Rios', '2020', 'Munro', 'Buenos Aires','Argentina','',1111778877 ), 
(DEFAULT, 4, 'Libertad', '1097', 'Córdoba', 'Córdoba','Argentina','1 piso',1176545678 ), 
(DEFAULT, 4, 'Libertad', '9010', 'Recoleta', 'CABA','Argentina','2a',1100775544 ), 
(DEFAULT, 5, 'Aguero', '2157', 'Recoleta', 'CABA','Argentina','208',1123345999 ), 
(DEFAULT, 6, 'Santa Fe', '2010', 'CABA', 'CABA','Argentina','7mo piso',1163748585 );

INSERT INTO categories VALUES 
(DEFAULT,'Camping', 'Elementos para camping'),
(DEFAULT,'Montañismo', 'Elementos de montaña'),
(DEFAULT,'Escalada', 'Ideales para escalar en alta montaña'),
(DEFAULT,'SKI', 'SKI');

INSERT INTO subcategories VALUES 
(DEFAULT,'Carpas', 'Carpas para camping'),
(DEFAULT,'Camperas', 'Camperas de SKI'),
(DEFAULT,'Pantalones', 'Pantalones para la montaña'),
(DEFAULT,'Accesorios', 'Accesorios de camping'),
(DEFAULT,'Elementos técnicos', 'Accesorios de escalada');

INSERT INTO products VALUES 
(DEFAULT,'Columbus Mochila Russell 25L', '1632349473403-columbus-mochila-russell-25l.jpeg', 21875, 'Mochila impermeable para el frio extremo de 25 Litros.',0, 10,true,false,1,1),
(DEFAULT,'Millet Mochila Ubic 40L', '632349593060-millet-mochila-ubic-40l.jpeg', 20900, 'Millet Mochila Ubic 40L',0, 10,true,false,1,1),
(DEFAULT,'Osprey Mochila Stratos 36L', '1632349790806-osprey-mochila-stratos-36l.jpeg', 15200, 'Fabricada con las especificaciones más rigurosas y la mejor calidad ofrecida por la marca americana, la mochila Osprey Stratos 36L tiene totalmente justificada su gran reputación dentro del mundo del senderismo. Ya sea para caminar en la naturaleza o subir a la montaña, con la Stratos siempre sentirás el viento detrás de ti.',0, 10,true,false,1,1),
(DEFAULT,'Petzl Asegurador Reverso', '1632349877588-petzl-asegurador-reverso.jpeg', 5000, 'Polivalente y ultraligero, el REVERSO es un asegurador-descensor diseñado para el aseguramiento y el descenso en rápel. El modo Reverso permite el aseguramiento independiente y simultáneo de uno o dos segundos. Es adecuado para la mayoría de diámetros de cuerda: cuerda simple de 8,5 a 10,5 mm, cuerda doble de 7,1 a 9,2 mm y cuerda gemela de 6,9 a 9,2 mm.',0, 10,true,false,1,1),
(DEFAULT,'Osprey Mochila Atmos AG 65L', '1632349743696-osprey-mochila-atmos-ag-65l.jpeg', 12000, 'Si hay un producto que está de manera consistente en el tope de las listas anuales de senderismo y acampada, es la mochila de excursión Osprey Atmos AG 65L. Ganadora de múltiples premios internacionales por su practicidad, resistencia y adaptabilidad, la Atmos AG 65L siempre te brindará una respuesta superior en cualquier actividad outdoor.',0, 10,true,false,1,1),
(DEFAULT,'Petzl Grigri +', '1632349927954-petzl-grigri--.jpeg', 12000, 'Asegurador con frenado asistido y empuñadura antipánico, para cualquier diámetro de cuerda simple (de 8,5 a 11 mm)',0, 10,true,false,1,1),
(DEFAULT,'Wildcountry Ropeman 1', '1632349977344-wildcountry-ropeman-1.jpeg', 12000, 'El original, el Ropeman tiene una leva de aleación de alumino, es ligéro y fácil de utilizar. Diseñado para el uso en cuerdas con un diámetro de más de 10mm. Perfecto para escalada y autorrescate.   Especificaciones:  - Alloy 7075 T6, - >10mm. - 3 Sigma rated, - CE EN567, - UIAA 126.',0, 10,true,false,1,1),
(DEFAULT,'Black Diamond Asegurador ATC XP', '632350596818-black-diamond-asegurador-atc-xp.jpeg', 12000, 'Black Diamond Asegurador ATC XP',0, 10,true,false,1,1)

