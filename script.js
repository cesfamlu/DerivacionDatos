//BD con 90 datos

// --- Base de Datos Completa (90+ registros) ---
// (Req #5) Datos de derivaciones (Corregidos)
const referralData = [
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Biopsia de piel y/o mucosa por curetaje o sección tangencial c/s electro x 1 lesión." },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Broncopulmonar adulto / infantil " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Cardiología adulta / infantil (telemedicina) " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Cirugía Adulto " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Cirugía digestiva " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Cirugía Infantil " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Cirugía maxilo facial " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Cirugia Menor: Se realiza desde los 15 años y mas en CESFAM La Union" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Cirugía oncológica " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Cirugía proctológica " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Cirugía reparadora ungueal por proceso inflamatorio." },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Cirugía vascular " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Colonoscopía (se debe agregar Formulario de Solicitud Colonoscopia) - Sin Sospecha de Ca Colorectal - Destino \"Cirugia Proctologica\"" },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Colonoscopia digestiva (Rellenar Formulario del Examen Correspondiente). Si tiene Sospecha/Cancer confirmado, envíar via GES. En caso contrario, lista de espera infinita" },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Cuerpo extraño de 15 años y más. " },
    { "tipo": "Especialidad", "via": "HD", "detalle": "Telemedicina", "destino": "Hospital Digital", "ges": "No", "descripcion": "Dermatología (telemedicina) " },
    { "tipo": "Patología", "via": "HD", "detalle": "Telemedicina", "destino": "Hospital Digital", "ges": "No", "descripcion": "Diabetes Mellitus Tipo 2 - Mal compensada" },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Eco Abdominal (edad: 0-14 años) " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital La Union", "ges": "No", "descripcion": "Eco Abdominal (Edad: 15 Años Y Mas) " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital La Union", "ges": "No", "descripcion": "Eco Ginecológica (Edad: 15 Años Y Mas) " },
    { "tipo": "Especialidad", "via": "Correo Electronico", "detalle": "cesfam.neurodiversa@munilaunion.cl", "destino": "Centro Atencion Integracion al Desarrollo Infantoadolescente (CAIDIA)", "ges": "No", "descripcion": "Usuario evaluado en CNS o Control Adolescente, referido via correo electronico, contraloría por Referente Fonoaudióloga Foitzick" },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Eco Pared Abdominal " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Eco partes blandas (Idealmente, extrasistema porque no hay resolutividad actualizada)" },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Eco renal " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Eco tiroidea " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital La Union", "ges": "No", "descripcion": "Eco Transvaginal (Edad: 15 Años Y Mas) " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Eco vesical " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Ecotomografía bilateral" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Endocrinología adulto / infantil " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital La Union", "ges": "No", "descripcion": "Endoscopia Digestiva Alta (Edad: 15 Años Y Mas) " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Endoscopia digestiva alta de 0 a 14 años" },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital La Union", "ges": "No", "descripcion": "Endoscopía digestiva alta de 15 y más" },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Epistaxis de 15 años y más " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Extirpación de lesión benigna subepidérmica, incluye Tumor sólido, quiste epidérmico y lipoma por lesión: Cabeza, cuello, genitales: extirpación de lesión benigna subepidérmica, incluye tumor sólido, quiste epidérmico y lipoma por lesión." },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Extirpación de lesión benigna subepidérmica, incluye Tumor sólido, quiste epidérmico y lipoma por lesión: Resto del cuerpo: extirpación de lesión benigna subepidérmica, incluye tumor sólido, quiste epidérmico y lipoma por lesión." },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Extirpación de lesiones benignas por sec tangencial, curetaje y/o fulguración hasta 15 lesiones." },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Extirpación, reparación o biopsia, total o parcial, de lesiones benignas cutáneas por excisión: Cabeza, cuello, genitales, hasta 3 lesiones." },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Extirpación, reparación o biopsia, total o parcial, de lesiones benignas cutáneas por excisión: Resto del Cuerpo hasta 3 lesiones." },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Fisiatría " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Gastroenterología adulto /infantil " },
    { "tipo": "Especialidad", "via": "HD", "detalle": "Telemedicina", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Geriatría" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Ginecología Adulto (Edad: 15 Años Y Mas) " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Hematología adulta / infantil " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Mamografía bilateral" },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Mamografía unilateral" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Medicina Interna Adulto " },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Menier de 15 años y más " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Nefrología adulto /infantil " },
    { "tipo": "Especialidad", "via": "HD", "detalle": "Telemedicina ", "destino": "Hospital Digital", "ges": "Si", "descripcion": "Nefrología Enfermedad Renal Crónica (ERC) (Adicionalmente, realizar la notificacion de papel para presentarla en oficina GES: Origen CESFAM. Destino CESFAM)" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Neurocirugía " },
    { "tipo": "Especialidad", "via": "Email", "detalle": "Referente Neurología - Dr. Olivares", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Neurología (telemedicina) " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Neurología adulto / infantil   " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Oncología " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Onicectomía total o parcial simple." },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Otitis aguda y crónica de 15 años y más " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Otorrino " },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Patología mamaria " },
    { "tipo": "Patología", "via": "HD", "detalle": "Telemedicina", "destino": "Hospital Digital", "ges": "No", "descripcion": "Patología Oral" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Pediatría Secundaria " },
    { "tipo": "Procedimiento", "via": "Telefónica", "detalle": "Oficina Lista de Espera", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Proyección Focalizada", "imagen": "https://placehold.co/80x80/6c757d/ffffff?text=Tel%C3%A9fono" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Psiquiatría adulto / infantil  " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Radiología (No se ingresan TAC)" },
    { "tipo": "Procedimiento", "via": "Papel", "detalle": "Orden de Examen", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Radiología columna lumbar ap/lat/5° Espacio ", "imagen": "https://placehold.co/80x80/dc3545/ffffff?text=Papel" },
    { "tipo": "Especialidad", "via": "HD", "detalle": "Telemedicina", "destino": "Hospital Digital", "ges": "No", "descripcion": "Reumatología " },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "Hospital Valdivia", "ges": "No", "descripcion": "Sospecha Hipoacusia de 15 a 64 años (Una vez resuelto ese tramo etario se puede resolver de 5 a 14 años de edad (Siempre coordinado con Leonor Villavicencio, referente del programa) " },
    { "tipo": "Patología", "via": "Lista de Espera", "detalle": "Oficina GES gestionará la hora", "destino": "Hospital Valdivia", "ges": "Si", "descripcion": "Sospecha Hipoacusia mayores de 65 años (y todos los otros diagnósticos y tramos de edades que no se resuelven en APS)" },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Tapón de cerumen de 15 años y más " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "Hospital La Union", "ges": "No", "descripcion": "Test Esfuerzo (Edad: 15 Años Y Mas) " },
    { "tipo": "Patología", "via": "HD", "detalle": "Telemedicina", "destino": "Hospital Digital", "ges": "No", "descripcion": "Traumatismo Temporomandibular (TTM)" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Traumatología Adulto (Edad: 15 Años Y Mas) " },
    { "tipo": "Especialidad", "via": "Papel", "detalle": "SIC Papel", "destino": "Oficina Lista de Espera", "ges": "No", "descripcion": "Traumatología derivado desde Urgencia SAR (Adulto y Niño)", "imagen": "https://placehold.co/80x80/dc3545/ffffff?text=Papel" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Traumatología infantil " },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Tumores vasculares profundos Cara, cuero cabelludo, cuello, genitales." },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "LEC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Tumores Vasculares Profundos Resto del cuerpo." },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "CESFAM La Union", "ges": "No", "descripcion": "Oftalmologia: Usuarios de 15 a 64 años con Diagnostico de Vicio Refracción. La derivación es por RAS a unidad UAPO La Union." },
    { "tipo": "Especialidad", "via": "GES", "detalle": "Oficina GES", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Oftalmologia: Usuarios Mayores de 64 años: Realizar la notificacion de papel para presentarla en oficina GES: Origen CESFAM. Destino HBV)" },
    { "tipo": "Especialidad", "via": "Papel", "detalle": "SIC Papel", "destino": "JUNAEB", "ges": "No", "descripcion": "Oftalmologia: UAPO Menores de 15 años: a JUNAEB vía papel que debe presentar el mismo usuario", "imagen": "https://placehold.co/80x80/dc3545/ffffff?text=Papel" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Urología Adulto" },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Vértigo de 15 años y más " },
    { "tipo": "Patología", "via": "HD", "detalle": "Telemedicina", "destino": "Hospital Digital", "ges": "Si", "descripcion": "Enfermedad Renal Crónica (ERC) (Adicionalmente, realizar SIC de papel Dx: \"Prevencion Secundaria de ERC\" que se presenta en oficina GES: con Origen CESFAM Destino CESFAM) - HD Nefrologia" },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Adenoides" },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "CESFAM La Union", "ges": "Si", "descripcion": "Fondo de Ojo para Usuarios con Diabetes Mellitus Tipo 2 (Se llama: Control Paciente DM Tipo 2 Nivel Secundario, pero permite acceso a \"Fondo de Ojo\")" },
    { "tipo": "Patología", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Artritis Reumatoide (Confirmacion Diagnostica)", "imagen": "https://placehold.co/80x80/198754/ffffff?text=GES" },
    { "tipo": "Patología", "via": "GES", "detalle": "GES", "destino": "Oficina GES", "ges": "No", "descripcion": "Artrosis - Leve a Moderada (CESFAM) (Dx: \"Tratamiento médico en personas de 55 años y más con artrosis de cadera y/o rodilla, leve o moderada\")" },
    { "tipo": "Patología", "via": "GES", "detalle": "GES", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Artrosis - Severa de Rodilla (Destino Reumatologia)" },
    { "tipo": "Patología", "via": "GES", "detalle": "GES", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Artrosis - Severa de Cadera (Destino Traumatologia)" },
    { "tipo": "Patología", "via": "RAS", "detalle": "Telemedicina", "destino": "", "ges": "", "descripcion": "Hipertension descompensada (Medicina interna o cardiologia)" },
    { "tipo": "Especialidad", "via": "", "detalle": "", "destino": "", "ges": "", "descripcion": "Neurologia: depende de la patologia" },
    { "tipo": "Patología", "via": "RAS", "detalle": "Telemedicina", "destino": "", "ges": "", "descripcion": "Cefalea" },
    { "tipo": "Patología", "via": "RAS", "detalle": "telemedicina", "destino": "", "ges": "No", "descripcion": "Epilepsia (ya diagnosticado)" },
    { "tipo": "Patología", "via": "", "detalle": "", "destino": "", "ges": "Si", "descripcion": "Epilepsia (sospecha) - Averiguar" },
    { "tipo": "Patología", "via": "Papel", "detalle": "SIC Papel", "destino": "", "ges": "Si", "descripcion": "Demencia", "imagen": "https://placehold.co/80x80/dc3545/ffffff?text=Papel" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "Telemedicina", "destino": "", "ges": "No", "descripcion": "Cardiologia" },
    { "tipo": "Patología", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital La Union", "ges": "Si", "descripcion": "Colelitiasis Diagnostico Sólo por Observacion edad: mayor a 35 y menor a 50 años ", "imagen": "https://placehold.co/80x80/198754/ffffff?text=GES" },
    { "tipo": "procedimiento ", "via": "GES", "detalle": "GES", "destino": "", "ges": "Si", "descripcion": "Eco Abdominal" },
    { "tipo": "Patología", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Vicios de refracción en personas mayor o igual a 65 años " },
    { "tipo": "Patología", "via": "GES", "detalle": "Notificar GES Asma -> Luego proceder con la SIC", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Asma Bronquial 15 años y mas " },
    { "tipo": "Patología", "via": "GES", "detalle": "Notificar GES Asma -> Luego proceder con la SIC", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Asma Bronquial moderada y severa en menores de 15 años " },
    { "tipo": "Patología", "via": "GES", "detalle": "Notificacion+receta", "destino": "CESFAM", "ges": "Si", "descripcion": "Ayudas Tecnicas para personas de 65 años y mas " },
    { "tipo": "Patología", "via": "GES", "detalle": "Notificar GES Asma -> Luego proceder con la SIC", "destino": "CESFAM", "ges": "No", "descripcion": "Ayudas Tecnicas Pilotos de 46 años a 64 años( siguientes dignosticos: acv severo, acv moderado, acv leve, artrosis de rodilla, amputaciones ortejo y metatardo, postrados(severos) Parkinson y Lesion Medular)" },
    { "tipo": "Patología", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital Base Valdivia - Gastroentereologo", "ges": "Si", "descripcion": "Cancer Colorectal en personas de 15 años y mas (formulario de solicitud colonosocpia)", "imagen": "https://placehold.co/80x80/198754/ffffff?text=GES" },
    { "tipo": "Procedimiento", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Colonoscopía (se debe agregar Formulario de Solicitud Colonoscopia) - Con Sospecha de Ca Colorectal - Destino \"Gastroenterologia\"", "imagen": "https://placehold.co/80x80/198754/ffffff?text=GES" },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Enfermedad Celiaca Infantil (Destino Pediatria Secundaria)" },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "Hospital Base Valdivia", "ges": "No", "descripcion": "Enfermedad Celiaca Adulto (Mayores a 15 años) (Destino Gastroenterologia Adulto)" },
    { "tipo": "Especialidad", "via": "", "detalle": "", "destino": "", "ges": "", "descripcion": "UNACESS: depende de la patologia - usar Guia de derivacion desde APS a UNACESS (Presione Aqui para Acceder a la Guia)" },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Parkinson (Sospecha)" },
    { "tipo": "Procedimiento", "via": "RAS", "detalle": "OA", "destino": "CESFAM La Unión", "ges": "No", "descripcion": "Ecotomografía mamaria bilateral" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "Telemedicina", "destino": "Hospital Rio Bueno", "ges": "No", "descripcion": "OPI (Destino Odontopediatria)" },
    { "tipo": "Patología", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Alergia a la Proteina de la Vaca (APV)" },
    { "tipo": "Especialidad", "via": "RAS", "detalle": "IC", "destino": "Hospital La Union", "ges": "No", "descripcion": "Cardiología Adulto" },
    { "tipo": "Patología", "via": "SIC", "detalle": "", "destino": "", "ges": "No", "descripcion": "Glaucoma" },
    { "tipo": "Patología", "via": "", "detalle": "", "destino": "", "ges": "No", "descripcion": "Helicobacter Pylori (15 años y más)" },
    { "tipo": "Procedimiento", "via": "", "detalle": "", "destino": "", "ges": "No", "descripcion": "Test de Antigeno en Deposiciones Helicobacter Pylori (modalidad institucional)" },
    { "tipo": "Patología", "via": "", "detalle": "Formualrio Notifiacion por sospecha o confirmación", "destino": "Oficina GES", "ges": "Si", "descripcion": "Alzheimer y otras Demencias (GES 85)" },
    { "tipo": "Patología", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "UPC Cáncer Cervicouterino. Realizar IC en papel más notificación GES de sospecha de patología. Destino HBV.", "imagen": "https://placehold.co/80x80/198754/ffffff?text=GES" },
    { "tipo": "Patología", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "UPM Cáncer de Mama. Se realiza IC en papel más notificación GES. Se debe indicar qué mama es. Se deriva a HBV.", "imagen": "https://placehold.co/80x80/198754/ffffff?text=GES" },
    { "tipo": "Patología", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Cáncer Gástrico (desde los 40 años). IC en papel, se realiza notificación GES por sospecha. Destino HBV.", "imagen": "https://placehold.co/80x80/198754/ffffff?text=GES" },
    { "tipo": "Patología", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Depresión (GES). Deriva por Depresión Refractaria, Síntomas Psicóticos e Ideación Suicida. Se debe notificar a paciente si no tiene caso creado GES. IC en papel a HBV.", "imagen": "https://placehold.co/80x80/198754/ffffff?text=GES" },
    { "tipo": "Patología", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Cataratas. IC en papel con destino hacia HBV.", "imagen": "https://placehold.co/80x80/198754/ffffff?text=GES" },
    { "tipo": "Patología", "via": "GES", "detalle": "SIC Papel", "destino": "Hospital Base Valdivia", "ges": "Si", "descripcion": "Retinopatía Diabética. IC en papel con derivación a HBV.", "imagen": "https://placehold.co/80x80/198754/ffffff?text=GES" }
];

// (Req #4) Mapa de color por tipo (para la banda superior de la card)
const tipoColorMap = {
    'Especialidad': '#6b7cff',
    'Procedimiento': '#13b1a8',
    'Patología': '#f06784',
    'Patologia': '#f06784' // Alias sin tilde
};
// Estado Global
let state = {
    term: '',
    type: 'all',
    dest: 'all',
    view: 'list',
    showDash: false,
    theme: 'light',
    currentPage: 1,
    itemsPerPage: 20
};

// Referencias DOM
const UI = {
    body: document.body,
    search: document.getElementById('mainSearch'),
    clearBtn: document.getElementById('clearSearch'),
    content: document.getElementById('contentView'),
    dash: document.getElementById('dashboardPanel'),
    metrics: document.getElementById('dashMetrics'),
    stats: document.getElementById('stats'),
    toast: document.getElementById('copyToast'),
    themeBtn: document.getElementById('themeToggle'),
    logo: document.getElementById('appLogo'),
    titleLogo: document.getElementById('titleLogo')
};

// Renderizar Paginación
function renderPagination(totalItems, totalPages) {
    const container = document.getElementById('pagination');

    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let html = '<div class="pagination-controls">';

    // Botón Anterior
    html += `<button class="pagination-btn" ${state.currentPage === 1 ? 'disabled' : ''} 
             onclick="changePage(${state.currentPage - 1})">
             <i class="bi bi-chevron-left"></i> Anterior
             </button>`;

    // Números de página
    html += '<div class="pagination-numbers">';

    // Lógica para mostrar páginas
    const maxVisible = 5;
    let startPage = Math.max(1, state.currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    // Primera página
    if (startPage > 1) {
        html += `<button class="pagination-num" onclick="changePage(1)">1</button>`;
        if (startPage > 2) html += '<span class="pagination-dots">...</span>';
    }

    // Páginas numeradas
    for (let i = startPage; i <= endPage; i++) {
        html += `<button class="pagination-num ${i === state.currentPage ? 'active' : ''}" 
                 onclick="changePage(${i})">${i}</button>`;
    }

    // Última página
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) html += '<span class="pagination-dots">...</span>';
        html += `<button class="pagination-num" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }

    html += '</div>';

    // Botón Siguiente
    html += `<button class="pagination-btn" ${state.currentPage === totalPages ? 'disabled' : ''} 
             onclick="changePage(${state.currentPage + 1})">
             Siguiente <i class="bi bi-chevron-right"></i>
             </button>`;

    html += '</div>';
    container.innerHTML = html;
}

// Cambiar de página
function changePage(page) {
    state.currentPage = page;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicialización
function init() {
    // Restaurar tema
    const savedTheme = localStorage.getItem('zen-theme') || 'light';
    setTheme(savedTheme);

    // Render inicial
    render();
    setupEvents();
}

// Gestión de Temas
function setTheme(theme) {
    state.theme = theme;
    UI.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';

    // Actualizar icono de botón
    UI.themeBtn.innerHTML = theme === 'dark'
        ? '<i class="bi bi-sun"></i>'
        : '<i class="bi bi-moon-stars"></i>';

    // Actualizar Logo CESFAM
    if (UI.logo) {
        UI.logo.src = theme === 'dark' ? 'CESFAM_BLANCO.png' : 'CESFAM.png';
    }

    // Actualizar Logo del Título
    if (UI.titleLogo) {
        UI.titleLogo.src = theme === 'dark' ? 'titulo_blanco.png' : 'titulo.png';
    }

    localStorage.setItem('zen-theme', theme);
}

// Normalización de texto (quita tildes y espacios extra)
const normalize = (str) => {
    return (str || '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
};

// Renderizado Principal
function render() {
    const termNorm = normalize(state.term);

    const filtered = referralData.filter(item => {
        // Búsqueda en todos los campos relevantes
        const fullContent = normalize(`${item.descripcion} ${item.destino} ${item.via} ${item.tipo} ${item.ges}`);
        const textMatch = fullContent.includes(termNorm);

        // Filtro por Tipo
        const typeMatch = state.type === 'all' ||
            (state.type === 'ges' ? (item.ges && item.ges.toLowerCase() === 'si') :
                (state.type === 'no-ges' ? (!item.ges || item.ges.toLowerCase() !== 'si') :
                    item.tipo === state.type));

        // Filtro por Destino
        const destMatch = state.dest === 'all' ||
            (item.destino && item.destino.includes(state.dest));

        return textMatch && typeMatch && destMatch;
    });

    // Calcular paginación
    const totalPages = Math.ceil(filtered.length / state.itemsPerPage);
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    const paginatedItems = filtered.slice(startIndex, endIndex);

    // Actualizar UI de estadísticas con info de paginación
    const showingFrom = filtered.length > 0 ? startIndex + 1 : 0;
    const showingTo = Math.min(endIndex, filtered.length);
    UI.stats.textContent = `${showingFrom}-${showingTo} de ${filtered.length} prestaciones`;
    UI.clearBtn.style.display = state.term ? 'block' : 'none';

    updateDashboard(filtered);

    // Renderizar resultados
    if (filtered.length === 0) {
        UI.content.innerHTML = '';
        document.getElementById('emptyState').style.display = 'block';
        renderPagination(0, 0);
        return;
    }

    document.getElementById('emptyState').style.display = 'none';
    state.view === 'grid' ? renderGrid(paginatedItems) : renderList(paginatedItems);
    renderPagination(filtered.length, totalPages);
}

// Renderizado de Grid (Tarjetas)
function renderGrid(data) {
    UI.content.innerHTML = `<div class="results-grid"></div>`;
    const container = UI.content.querySelector('.results-grid');

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-zen';
        card.onclick = () => copy(item);

        // Resaltar búsqueda
        const titleText = item.descripcion.trim();
        const title = state.term
            ? titleText.replace(new RegExp(`(${state.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>')
            : titleText;

        card.innerHTML = `
            ${item.ges === 'Si' ? '<span class="badge-ges">GES</span>' : '<span class="badge-no-ges">No GES</span>'}
            <span class="type">${item.tipo}</span>
            <div class="title">${title}</div>
            <div class="info-item"><i class="bi bi-signpost-split"></i> ${item.via}</div>
            <div class="info-item"><i class="bi bi-geo-alt"></i> ${item.destino}</div>
        `;
        container.appendChild(card);
    });
}

// Renderizado de Lista (Tabla compacta)
function renderList(data) {
    UI.content.innerHTML = `
        <div class="results-list">
            <div class="list-item list-header d-none d-md-grid">
                <div>Tipo</div>
                <div>Descripción</div>
                <div>Vía</div>
                <div>Destino</div>
                <div>GES</div>
            </div>
            <div id="listBody"></div>
        </div>
    `;
    const body = UI.content.querySelector('#listBody');

    data.forEach(item => {
        const row = document.createElement('div');
        row.className = 'list-item';
        row.onclick = () => copy(item);

        const gesBadge = item.ges === 'Si'
            ? '<span class="badge-ges-sm">GES</span>'
            : '<span class="badge-no-ges-sm">No GES</span>';

        const title = state.term
            ? item.descripcion.replace(new RegExp(`(${state.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>')
            : item.descripcion;

        row.innerHTML = `
            <div class="fw-bold text-primary d-md-block d-none" style="font-size:0.75rem">${item.tipo}</div>
            <div class="text-wrap">${title}</div>
            <div class="text-muted small">${item.via}</div>
            <div class="text-muted small">${item.destino}</div>
            <div>${gesBadge}</div>
        `;
        body.appendChild(row);
    });
}

// Actualizar Dashboard
function updateDashboard(data) {
    const total = data.length;
    const ges = data.filter(i => i.ges === 'Si').length;
    const especialidades = data.filter(i => i.tipo === 'Especialidad').length;
    const proc = data.filter(i => i.tipo === 'Procedimiento').length;

    UI.metrics.innerHTML = `
        <div class="col-6 col-md-3"><div class="metric-card"><span class="metric-val">${total}</span><span class="metric-label">Encontrados</span></div></div>
        <div class="col-6 col-md-3"><div class="metric-card"><span class="metric-val text-success">${ges}</span><span class="metric-label">Casos GES</span></div></div>
        <div class="col-6 col-md-3"><div class="metric-card"><span class="metric-val text-primary">${especialidades}</span><span class="metric-label">Especialidades</span></div></div>
        <div class="col-6 col-md-3"><div class="metric-card"><span class="metric-val text-info">${proc}</span><span class="metric-label">Procedimientos</span></div></div>
    `;
}

// Copiar al portapapeles
function copy(item) {
    const text = `PRESTACIÓN: ${item.descripcion.trim()}\nVÍA: ${item.via}\nDESTINO: ${item.destino}\nDETALLE: ${item.detalle || 'N/A'}\nGES: ${item.ges}`;

    // Método moderno y fallback
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(showToast);
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {
            console.error('Error al copiar', err);
        }
        document.body.removeChild(textArea);
    }
}

function showToast() {
    UI.toast.classList.add('show');
    setTimeout(() => UI.toast.classList.remove('show'), 2000);
}

// Resetear Filtros
function resetFilters() {
    state.term = '';
    state.type = 'all';
    state.dest = 'all';
    UI.search.value = '';
    document.querySelectorAll('.chip').forEach(c => {
        c.classList.remove('active');
        if (c.dataset.filter === 'all') c.classList.add('active');
    });
    render();
}

// Event Listeners
function setupEvents() {
    // Búsqueda en tiempo real
    UI.search.oninput = (e) => {
        state.term = e.target.value;
        state.currentPage = 1;
        render();
    };

    // Toggle Dashboard
    document.getElementById('toggleDash').onclick = () => {
        state.showDash = !state.showDash;
        UI.dash.style.display = state.showDash ? 'block' : 'none';
        // Animación suave
        if (state.showDash) UI.dash.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    // Toggle Tema (botón)
    UI.themeBtn.onclick = () => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    // Botón Limpiar
    UI.clearBtn.onclick = () => {
        UI.search.value = '';
        state.term = '';
        state.currentPage = 1;
        UI.search.focus();
        render();
    };

    // Cambiadores de Vista
    document.getElementById('viewGrid').onclick = function () {
        state.view = 'grid';
        state.currentPage = 1;
        this.classList.add('active');
        document.getElementById('viewList').classList.remove('active');
        render();
    };

    document.getElementById('viewList').onclick = function () {
        state.view = 'list';
        this.classList.add('active');
        document.getElementById('viewGrid').classList.remove('active');
        render();
    };

    // Chips de Tipo
    document.querySelectorAll('#typeFilters .chip').forEach(c => {
        c.onclick = () => {
            document.querySelectorAll('#typeFilters .chip').forEach(x => x.classList.remove('active'));
            c.classList.add('active');
            state.type = c.dataset.filter;
            state.currentPage = 1;
            render();
        };
    });

    // Chips de Destino
    document.querySelectorAll('#destFilters .chip').forEach(c => {
        c.onclick = () => {
            const wasActive = c.classList.contains('active');
            document.querySelectorAll('#destFilters .chip').forEach(x => x.classList.remove('active'));

            if (wasActive) {
                state.dest = 'all';
            } else {
                c.classList.add('active');
                state.dest = c.dataset.dest;
            }
            render();
        };
    });

    // Atajos de Teclado
    document.addEventListener('keydown', (e) => {
        // "/" para buscar
        if (e.key === '/' && document.activeElement !== UI.search) {
            e.preventDefault();
            UI.search.focus();
        }
        // "Esc" para limpiar
        if (e.key === 'Escape') {
            resetFilters();
            UI.search.blur();
        }
        // "D" para Modo Oscuro (si no se escribe en input)
        if (e.key.toLowerCase() === 'd' && document.activeElement !== UI.search) {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        }
    });
}

// Arrancar
init();
