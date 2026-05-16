const appData = {
    products: [
        { 
            id: 'p1', 
            name: 'Creatina USP Creapure', 
            brand: 'Criteria Select',
            category: 'Deportivo', 
            evidence: 'A', 
            price: '$45.000',
            priceTransfer: '$38.250',
            priceList: '$45.000',
            descShort: 'Preservación de masa magra y soporte cognitivo en paciente crítico.',
            descLong: 'La Creatina Monohidrato con sello Creapure® garantiza la máxima pureza. En el entorno clínico, es una herramienta fundamental para mitigar la sarcopenia y el catabolismo proteico en pacientes con estancias prolongadas o patologías crónicas.',
            indications: ['Sarcopenia', 'Recuperación Post-quirúrgica', 'Soporte Cognitivo', 'Fatiga Crónica'],
            composition: '100% Creatina Monohidrato (Creapure®). Sin aditivos ni saborizantes.',
            clinicalPerspective: 'La creatina monohidrato grado USP es el estándar de oro en recuperación. En CRITERIA validamos este producto por su nulo contenido de impurezas, asegurando una resíntesis de ATP eficiente en pacientes con pérdida muscular.',
            techSpecs: {
                'Formato': 'Polvo Micronizado',
                'Servicios': '60 servicios',
                'Pureza': '99.9% Monohidrato',
                'Origen': 'Argentina (Materia Prima Importada)'
            },
            image: 'imagenes /suplementos /creatina1.jpg'
        },
        { 
            id: 'p3', 
            name: 'Citrato de Magnesio Quelado', 
            brand: 'Criteria Select',
            category: 'Metabólico', 
            evidence: 'A', 
            price: '$22.500',
            priceTransfer: '$19.125',
            priceList: '$22.500',
            descShort: 'Optimización de sensibilidad insulínica y manejo de fatiga.',
            descLong: 'La forma de citrato quelado asegura la mayor biodisponibilidad y menor incidencia de efectos gastrointestinales. Crucial en el metabolismo de la glucosa y la función muscular profunda.',
            indications: ['Resistencia a la Insulina', 'Calambres Musculares', 'Migrañas', 'Trastornos del Sueño'],
            composition: 'Citrato de Magnesio grado farmacéutico (200mg de magnesio elemental por dosis).',
            clinicalPerspective: 'El déficit de magnesio es prevalente en pacientes con síndrome metabólico. La quelación asegura que el mineral llegue a las células sin causar el efecto laxante de otras sales.',
            techSpecs: {
                'Formato': 'Cápsulas vegetales',
                'Servicios': '60 servicios',
                'Biodisponibilidad': 'Máxima (Quelado)',
                'Libre de': 'Lactosa / Soja'
            },
            image: 'imagenes /suplementos /citrato de magnesio.webp'
        },
        { 
            id: 'p6', 
            name: 'Omega 3 IFOS (1200mg EPA/DHA)', 
            brand: 'Criteria Select',
            category: 'Metabólico', 
            evidence: 'A', 
            price: '$48.500',
            priceTransfer: '$41.225',
            priceList: '$48.500',
            descShort: 'Acción antiinflamatoria sistémica con certificación de pureza.',
            descLong: 'La certificación IFOS garantiza la ausencia de metales pesados y oxidación. Dosis terapéuticas para modular la inflamación sistémica y proteger la salud cardiovascular y neurológica.',
            indications: ['Hipertrigliceridemia', 'Inflamación Sistémica', 'Protección Cardiovascular', 'Soporte Cognitivo'],
            composition: 'Concentrado de aceite de pescado (TG), EPA 700mg, DHA 500mg.',
            clinicalPerspective: 'No todos los Omega 3 son iguales. La pureza certificada por IFOS es innegociable para evitar la ingesta de peróxidos inflamatorios en pacientes crónicos.',
            techSpecs: {
                'Certificación': 'IFOS 5 Estrellas',
                'EPA/DHA': '1200mg por dosis',
                'Forma': 'Triglicéridos (TG)',
                'Origen': 'Pescados de aguas frías'
            },
            image: 'imagenes /suplementos /omega 3.webp'
        },
        { 
            id: 'p7', 
            name: 'Colágeno Hidrolizado Premium', 
            brand: 'Criteria Select',
            category: 'Metabólico', 
            evidence: 'B', 
            price: '$35.000',
            priceTransfer: '$29.750',
            priceList: '$35.000',
            descShort: 'Soporte estructural para tejidos conectivos y salud articular.',
            descLong: 'Colágeno de alta biodisponibilidad diseñado para potenciar la regeneración de la matriz extracelular. Fundamental en procesos de recuperación tisular y salud osteoarticular.',
            indications: ['Salud Articular', 'Recuperación de Tejidos', 'Osteoporosis', 'Envejecimiento Cutáneo'],
            composition: 'Péptidos de colágeno hidrolizado pura, enriquecido con Vitamina C.',
            clinicalPerspective: 'La suplementación con colágeno hidrolizado apoya la síntesis endógena de proteínas estructurales, crucial en pacientes con desgaste articular crónico.',
            techSpecs: {
                'Formato': 'Polvo',
                'Sabor': 'Neutro',
                'Origen': 'Bovino (Grass-fed)',
                'Peso': '500g'
            },
            image: 'imagenes /suplementos /colageno.webp'
        },
        { 
            id: 'p8', 
            name: 'Whey Protein Isolate 3kg', 
            brand: 'Criteria Select',
            category: 'Deportivo', 
            evidence: 'A', 
            price: '$120.000',
            priceTransfer: '$102.000',
            priceList: '$120.000',
            descShort: 'Proteína de máxima pureza para reconstrucción muscular.',
            descLong: 'Aislado de proteína de suero de leche obtenido por microfiltración de flujo cruzado. Mínimo contenido de lactosa y grasas.',
            indications: ['Sarcopenia', 'Hipertrofia', 'Recuperación Post-ejercicio'],
            composition: '100% Whey Protein Isolate.',
            clinicalPerspective: 'La fracción de leucina en el aislado es superior, disparando la síntesis proteica muscular de manera más eficiente que otras fuentes.',
            techSpecs: {
                'Peso': '3kg',
                'Servicios': '100 servicios',
                'Proteína por serv': '27g'
            },
            image: 'imagenes /suplementos /prote-3kg-11-cfbd01d1d67952b01c17500822622635-1024-1024.webp'
        },
        { 
            id: 'n1', 
            name: 'Fortisip Compact', 
            brand: 'Nutricia Bagó',
            category: 'Oncológico', 
            evidence: 'A', 
            price: 'Consulte',
            priceTransfer: 'Consulte',
            priceList: 'Consulte',
            descShort: 'Suplemento nutricional oral hipercalórico e hiperproteico de bajo volumen.',
            descLong: 'Fortisip Compact es la solución ideal para pacientes que no pueden ingerir grandes volúmenes. Provee 300 kcal y 12g de proteína en solo 125ml, facilitando el cumplimiento del tratamiento en oncología y geriatría.',
            indications: ['Anorexia', 'Cáncer', 'Fragilidad en el anciano', 'Restricción hídrica'],
            composition: 'Proteínas lácteas, carbohidratos, lípidos, vitaminas y minerales concentrados.',
            clinicalPerspective: 'Máxima adherencia en pacientes con saciedad precoz. Su alta concentración permite nutrir sin causar distensión abdominal.',
            techSpecs: {
                'Volumen': '125ml',
                'Calorías': '300 Kcal',
                'Proteína': '12g',
                'Presentación': 'Botella lista para tomar'
            },
            image: 'imagenes /suplementos /fortisip drink.webp'
        },
        { 
            id: 'n2', 
            name: 'Cubitan', 
            brand: 'Nutricia Bagó',
            category: 'Metabólico', 
            evidence: 'A', 
            price: 'Consulte',
            priceTransfer: 'Consulte',
            priceList: 'Consulte',
            descShort: 'Específico para la cicatrización de úlceras por presión y heridas.',
            descLong: 'Diseñado con una mezcla única de nutrientes (Arginina, Vitamina C, E, Selenio y Zinc) para acelerar los procesos de reparación tisular en pacientes con escaras o heridas quirúrgicas de difícil cierre.',
            indications: ['Úlceras por presión (escaras)', 'Heridas crónicas', 'Post-operatorio complejo'],
            composition: 'Hiperproteico, con 3g de Arginina por envase y alto contenido de micronutrientes antioxidantes.',
            clinicalPerspective: 'La arginina es clave en la síntesis de colágeno. Cubitan provee el soporte sustrato necesario para la cicatrización en pacientes con compromiso metabólico.',
            techSpecs: {
                'Arginina': '3g',
                'Proteína': '18g',
                'Micronutrientes': 'Zinc, Selenio, Vit C/E',
                'Volumen': '200ml'
            },
            image: 'imagenes /suplementos /cubitan.webp'
        },
        { 
            id: 'n4', 
            name: 'Diasip Drink', 
            brand: 'Nutricia Bagó',
            category: 'Metabólico', 
            evidence: 'A', 
            price: 'Consulte',
            priceTransfer: 'Consulte',
            priceList: 'Consulte',
            descShort: 'Fórmula diseñada para el control glucémico en pacientes diabéticos.',
            descLong: 'Contiene una mezcla de carbohidratos de absorción lenta y alto contenido en fibras, lo que permite un mejor control de la glucemia post-prandial.',
            indications: ['Diabetes Mellitus tipo 1 y 2', 'Hiperglucemia inducida por estrés', 'Intolerancia a la glucosa'],
            composition: 'Bajo índice glucémico, con fibras y micronutrientes específicos.',
            clinicalPerspective: 'Control glucémico sin sacrificar el aporte proteico. Fundamental para prevenir picos de insulina.',
            techSpecs: {
                'Índice Glucémico': 'Bajo',
                'Fibra': '4g por envase',
                'Volumen': '200ml'
            },
            image: 'imagenes /suplementos /fortisip drink.webp'
        },
        { 
            id: 'n5', 
            name: 'Fortisip Standard (Polvo)', 
            brand: 'Nutricia Bagó',
            category: 'Metabólico', 
            evidence: 'A', 
            price: 'Consulte',
            priceTransfer: 'Consulte',
            priceList: 'Consulte',
            descShort: 'Suplemento completo en polvo para reconstitución flexible.',
            descLong: 'Ideal para pacientes que prefieren integrar la nutrición en sus comidas habituales.',
            indications: ['Desnutrición leve', 'Dificultad de ingesta sólida', 'Recuperación general'],
            composition: 'Proteínas de alta calidad, carbohidratos, lípidos y mix de vitaminas/minerales.',
            clinicalPerspective: 'Versatilidad clínica. El formato en polvo permite enriquecer preparaciones caseras.',
            techSpecs: {
                'Presentación': 'Lata por 350g/700g',
                'Preparación': '7 cucharas en 200ml',
                'Libre de': 'Gluten'
            },
            image: 'imagenes /suplementos /fortisipmax.jpg'
        },
        { 
            id: 'n6', 
            name: 'Fortisip Max', 
            brand: 'Nutricia Bagó',
            category: 'Oncológico', 
            evidence: 'A', 
            price: 'Consulte',
            priceTransfer: 'Consulte',
            priceList: 'Consulte',
            descShort: 'Máximo aporte proteico para recuperación acelerada.',
            descLong: 'Fórmula diseñada para pacientes con requerimientos proteicos extremos.',
            indications: ['Cáncer avanzado', 'Post-cirugía mayor', 'Grandes quemados'],
            composition: 'Mezcla proteica avanzada con BCAAs.',
            clinicalPerspective: 'En estados hipermetabólicos, el aporte de nitrógeno es la prioridad.',
            techSpecs: {
                'Proteína': '20g por envase',
                'Energía': '1.5 kcal/ml',
                'Sabor': 'Vainilla / Chocolate'
            },
            image: 'imagenes /suplementos /fortisipmax2.jpg'
        },
        { 
            id: 'f1', 
            name: 'Supportan Drink', 
            brand: 'Fresenius Kabi',
            category: 'Oncológico', 
            evidence: 'A', 
            price: 'Consulte',
            priceTransfer: 'Consulte',
            priceList: 'Consulte',
            descShort: 'Específico para el paciente oncológico con alta carga de Omega-3.',
            descLong: 'Fórmula hipercalórica e hiperproteica diseñada para combatir la caquexia tumoral.',
            indications: ['Caquexia Oncológica', 'Inflamación Sistémica', 'Cáncer'],
            composition: 'Proteínas lácteas, alto Omega-3 (EPA), MCTs y Fibra.',
            clinicalPerspective: 'La modulación de la inflamación es crítica en oncología.',
            techSpecs: {
                'Energía': '1.5 Kcal/ml',
                'Proteína': '20g / 200ml',
                'EPA': '1.5g / 200ml'
            },
            image: 'imagenes /suplementos /supportan.jpg'
        },
        { 
            id: 'f2', 
            name: 'Diben Drink', 
            brand: 'Fresenius Kabi',
            category: 'Metabólico', 
            evidence: 'A', 
            price: 'Consulte',
            priceTransfer: 'Consulte',
            priceList: 'Consulte',
            descShort: 'Manejo nutricional del paciente diabético con desnutrición.',
            descLong: 'Suplemento oral con perfil de carbohidratos modificado (bajo índice glucémico).',
            indications: ['Diabetes Mellitus', 'Resistencia a la Insulina', 'Estrés Metabólico'],
            composition: 'HC de absorción lenta, Fibra (Inulina), MUFAs.',
            clinicalPerspective: 'Manejo de precisión para la estabilidad glucémica.',
            techSpecs: {
                'Densidad': '1.0 Kcal/ml',
                'Proteína': '15g / 200ml',
                'Azúcares': 'Muy bajo'
            },
            image: 'imagenes /suplementos /diben.jpg'
        },
        { 
            id: 'f4', 
            name: 'Fresubin 2 kcal Crème', 
            brand: 'Fresenius Kabi',
            category: 'Metabólico', 
            evidence: 'A', 
            price: 'Consulte',
            priceTransfer: 'Consulte',
            priceList: 'Consulte',
            descShort: 'Suplemento semisólido hipercalórico para pacientes con disfagia.',
            descLong: 'Textura cremosa y homogénea ideal para pacientes con trastornos de la deglución.',
            indications: ['Disfagia', 'Geriatría', 'ACV'],
            composition: 'Proteínas lácteas concentradas en textura de crema.',
            clinicalPerspective: 'Seguridad en la deglución. La consistencia tipo crema reduce el riesgo de aspiración.',
            techSpecs: {
                'Densidad': '2.0 Kcal/g',
                'Proteína': '12.5g / 125g',
                'Textura': 'IDDSI Nivel 4'
            },
            image: 'imagenes /suplementos /fresubin crema.jpg'
        },
        { 
            id: 'f5', 
            name: 'Fresubin 3.2 kcal', 
            brand: 'Fresenius Kabi',
            category: 'Metabólico', 
            evidence: 'A', 
            price: 'Consulte',
            priceTransfer: 'Consulte',
            priceList: 'Consulte',
            descShort: 'Máxima concentración calórica en mínimo volumen.',
            descLong: 'La fórmula más densa del mercado para pacientes con restricción hídrica severa.',
            indications: ['Falla renal', 'IC compensada'],
            composition: 'Energía concentrada con perfil proteico balanceado.',
            clinicalPerspective: 'Cuando el volumen es el límite, la densidad es la solución.',
            techSpecs: {
                'Densidad': '3.2 kcal/ml',
                'Volumen': '125ml',
                'Proteína': '20g'
            },
            image: 'imagenes /suplementos /fresubin3.2.jpg'
        },
        { 
            id: 'f6', 
            name: 'Fresubin 2 kcal Drink', 
            brand: 'Fresenius Kabi',
            category: 'Metabólico', 
            evidence: 'A', 
            price: 'Consulte',
            priceTransfer: 'Consulte',
            priceList: 'Consulte',
            descShort: 'Suplemento líquido hipercalórico e hiperproteico.',
            descLong: 'Diseñado para pacientes con altas necesidades energéticas y proteicas.',
            indications: ['Desnutrición', 'Cáncer', 'Cirugía'],
            composition: '2 kcal por ml y 20g de proteína por botella.',
            clinicalPerspective: 'Aporte nutricional masivo en formato líquido.',
            techSpecs: {
                'Energía': '2.0 kcal/ml',
                'Proteína': '20g / 200ml'
            },
            image: 'imagenes /suplementos /fresubin 2k.jpg'
        }
    ],
    articles: [
        { 
            title: 'Guías ESPEN 2023: Nutrición en el Paciente Crítico', 
            category: 'UCI & Soporte Crítico', 
            snippet: 'Análisis de la actualización "Practical Guideline" sobre el inicio temprano de nutrición enteral y objetivos de 1.3g/kg de proteína.', 
            date: 'Mayo 2026' 
        },
        { 
            title: 'Consenso ASPEN 2021: Soporte Nutricional en Adultos', 
            category: 'Clínica Médica', 
            snippet: 'Revisión de las guías para la provisión de terapia nutricional en pacientes hospitalizados: de la evaluación al monitoreo.', 
            date: 'Abril 2026' 
        },
        { 
            title: 'Implementación Clínica: Del Paper al Paciente', 
            category: 'Metodología', 
            snippet: 'Cómo traducir el rigor de las guías internacionales Thibault et al. (2023) a la práctica diaria en el consultorio y hospital.', 
            date: 'Marzo 2026' 
        }
    ]
};

const app = {
    isLoggedIn: false,
    isMuted: true,

    init() {
        lucide.createIcons();
        this.renderBlog();
        this.renderProducts('Todo');
        this.setupFilters();
        this.setupNavigation();
        this.setupModal();
        this.checkAuth();
        this.setupAudio();
    },

    setupAudio() {
        const audio = document.getElementById('ambient-audio');
        const toggle = document.getElementById('global-sound-toggle');

        if (toggle) {
            toggle.addEventListener('click', () => this.toggleSound());
        }

        if (audio) {
            audio.addEventListener('error', (e) => {
                console.error("Audio error:", audio.error);
                // Si hay un error de red o de decodificación, intentamos recargar
                if (audio.error && audio.error.code === 4) {
                    console.log("Intentando recargar audio...");
                    audio.load();
                }
            });

            // "Prime" the audio on first interaction
            const primeAudio = () => {
                audio.play().then(() => {
                    audio.pause();
                    console.log("Audio primed");
                }).catch(() => {});
                document.removeEventListener('click', primeAudio);
            };
            document.addEventListener('click', primeAudio);
        }
    },

    checkAuth() {
        const authTrigger = document.getElementById('auth-trigger');
        if (this.isLoggedIn) {
            authTrigger.innerHTML = '<i data-lucide="log-out"></i><span>Salir</span>';
            authTrigger.onclick = () => this.logout();
            document.getElementById('campus-locked').style.display = 'none';
            document.getElementById('campus-content').style.display = 'block';
        } else {
            authTrigger.innerHTML = '<i data-lucide="user-circle"></i><span>Entrar</span>';
            authTrigger.onclick = () => this.openAuthModal();
            document.getElementById('campus-locked').style.display = 'block';
            document.getElementById('campus-content').style.display = 'none';
        }
        lucide.createIcons();
    },

    openAuthModal() {
        document.getElementById('auth-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeAuthModal() {
        document.getElementById('auth-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    },

    handleLogin(e) {
        e.preventDefault();
        // Simulación de login exitoso
        this.isLoggedIn = true;
        this.closeAuthModal();
        this.checkAuth();
        this.navigate('campus');
    },

    logout() {
        this.isLoggedIn = false;
        this.checkAuth();
        this.navigate('inicio');
    },

    toggleSound() {
        const toggle = document.getElementById('global-sound-toggle');
        const audio = document.getElementById('ambient-audio');
        
        if (!audio || !toggle) return;

        if (this.isMuted) {
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    toggle.classList.remove('muted');
                    this.isMuted = false;
                }).catch(error => {
                    console.error("Playback failed:", error);
                    // Force reload and play
                    audio.load();
                    audio.play().then(() => {
                        toggle.classList.remove('muted');
                        this.isMuted = false;
                    }).catch(err => {
                        alert("El navegador bloqueó el sonido. Por favor, haz clic en cualquier parte de la página y luego intenta activar el sonido de nuevo.");
                    });
                });
            }
        } else {
            audio.pause();
            toggle.classList.add('muted');
            this.isMuted = true;
        }
    },

    toggleMenu(force) {
        const nav = document.querySelector('.main-nav');
        if (typeof force === 'boolean') {
            nav.classList.toggle('active', force);
        } else {
            nav.classList.toggle('active');
        }
    },

    navigate(targetId, event) {
        if (event) event.preventDefault();
        
        document.querySelectorAll('.view-section').forEach(sec => {
            sec.classList.remove('active');
        });

        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            targetEl.classList.add('active');
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-target') === targetId);
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    setupNavigation() {
        document.querySelectorAll('.nav-link, .logo-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const target = link.getAttribute('data-target') || link.getAttribute('href').replace('#', '');
                if (target) {
                    this.navigate(target, e);
                }
            });
        });

        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && ['inicio', 'tienda', 'campus', 'profesional', 'blog'].includes(hash)) {
                this.navigate(hash);
            }
        });
    },

    setupFilters() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.style.background = 'transparent';
                    b.style.color = 'var(--slate-light)';
                    b.classList.remove('active');
                });
                
                e.target.style.background = 'var(--emerald-deep)';
                e.target.style.color = 'white';
                e.target.classList.add('active');
                
                this.renderProducts(e.target.dataset.filter);
            });
        });
    },

    bookingData: {
        modality: null,
        screening: null
    },

    openBookingWizard() {
        this.navigate('turnos');
        // Reset wizard
        this.showBookingStep(1);
    },

    showBookingStep(step) {
        document.getElementById('step-modality').style.display = step === 1 ? 'block' : 'none';
        document.getElementById('step-screening').style.display = step === 2 ? 'block' : 'none';
        document.getElementById('step-agenda').style.display = step === 3 ? 'block' : 'none';
        
        // Update indicators
        document.getElementById('step-1-ind').classList.toggle('active', step === 1);
        document.getElementById('step-2-ind').classList.toggle('active', step === 2);
        document.getElementById('step-3-ind').classList.toggle('active', step === 3);
    },

    setModality(mod) {
        this.bookingData.modality = mod;
        this.showBookingStep(2);
    },

    submitScreening(e) {
        e.preventDefault();
        const form = e.target;
        this.bookingData.screening = {
            specialty: form.querySelector('select').value,
            reason: form.querySelector('textarea').value
        };
        this.showBookingStep(3);
    },

    finishBooking() {
        const msg = `Hola Lic. Javier Verde, me gustaría agendar una consulta ${this.bookingData.modality}. \n\nMotivo: ${this.bookingData.screening.reason} \nEspecialidad: ${this.bookingData.screening.specialty}`;
        const whatsappUrl = `https://wa.me/yournumber?text=${encodeURIComponent(msg)}`;
        window.open(whatsappUrl, '_blank');
    },

    renderProducts(filter) {
        const grid = document.getElementById('product-grid');
        if (!grid) return;
        
        grid.innerHTML = '';
        const filtered = filter === 'Todo' ? appData.products : appData.products.filter(p => p.category === filter);
        
        filtered.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = 'product-card fade-in';
            card.style.animationDelay = `${index * 0.1}s`;
            card.onclick = () => this.openProductModal(p.id);
            
            card.innerHTML = `
                <div class="product-image-wrapper">
                    <span class="product-evidence-tag">EVIDENCIA ${p.evidence}</span>
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; align-items: center;">
                        <span style="font-size: 0.6rem; font-weight: 800; background: #ecfdf5; color: #065f46; padding: 0.3rem 0.6rem; border-radius: 100px; text-transform: uppercase;">${p.category}</span>
                        <span style="font-size: 0.65rem; font-weight: 700; color: var(--slate-light);">${p.brand}</span>
                    </div>
                    <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--slate-dark);">${p.name}</h4>
                    <p style="font-size: 0.85rem; color: #64748b; line-height: 1.5;">${p.descShort}</p>
                </div>
                <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 1.2rem; font-weight: 900; color: var(--slate-dark);">${p.price}</span>
                    <span style="font-size: 0.75rem; font-weight: 700; color: var(--emerald-mid);">Ver detalles →</span>
                </div>
            `;
            grid.appendChild(card);
        });
    },

    setupModal() {
        const modal = document.getElementById('product-modal');
        const closeBtn = document.querySelector('.close-modal');
        
        closeBtn.onclick = () => this.closeModal();
        
        window.onclick = (event) => {
            if (event.target == modal) {
                this.closeModal();
            }
        };

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    },

    openProductModal(productId) {
        const product = appData.products.find(p => p.id === productId);
        if (!product) return;
        this.currentProduct = product;

        const body = document.getElementById('modal-body');
        
        body.innerHTML = `
            <div class="modal-grid">
                <!-- Visualización -->
                <div style="background: #f8fafc; border-radius: 32px; padding: 2rem; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
                    <div style="background: white; border-radius: 40px; width: 100%; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden;">
                        <img src="${product.image}" style="width: 100%; height: 100%; object-fit: contain;">
                    </div>
                    <div style="position: absolute; top: 3rem; left: 3rem; background: var(--emerald-deep); color: white; font-size: 0.6rem; font-weight: 900; padding: 0.4rem 1rem; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.1em;">
                        Selección Lic. Verde
                    </div>
                </div>

                <!-- Compra e Info -->
                <div class="criteria-shop-module">
                    <div style="margin-bottom: 0.5rem;">
                        <span class="module-title" style="display: inline-block; margin-bottom: 0;">${product.brand} | EVIDENCIA ${product.evidence}</span>
                    </div>
                    
                    <h2 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 1.5rem; color: var(--slate-dark); letter-spacing: -0.02em;">${product.name}</h2>

                    <div class="price-container">
                        ${product.price !== 'Consulte' ? `
                            <p class="price-list">${product.priceList}</p>
                            <div class="price-main-wrapper">
                                <p class="price-main">${product.priceTransfer}</p>
                                <span class="discount-badge">15% OFF</span>
                            </div>
                            <p class="price-note">Precio pagando con Transferencia Bancaria</p>

                            <div class="installments-info">
                                <span style="font-size: 1.5rem;">💳</span>
                                <div class="installments-text">
                                    <p>3 cuotas sin interés de ${this.calculateInstallments(product.priceList)}</p>
                                    <p>Precio de lista: ${product.priceList} con todas las tarjetas</p>
                                </div>
                            </div>
                        ` : `
                            <p class="price-main" style="font-size: 2.5rem;">Precio a Consultar</p>
                            <p class="price-note" style="margin-top: 1rem;">Debido a la naturaleza del producto, se requiere validación profesional.</p>
                        `}

                        <div class="purchase-actions">
                            ${product.price !== 'Consulte' ? `
                                <div class="quantity-selector">
                                    <button onclick="app.updateQty(-1)" class="qty-btn">-</button>
                                    <input id="criteria-qty" type="number" value="1" class="qty-input" readonly>
                                    <button onclick="app.updateQty(1)" class="qty-btn">+</button>
                                </div>
                            ` : ''}
                            <button onclick="app.addToCart()" id="add-to-cart-btn" class="btn btn-primary" style="flex-grow: 1; border-radius: 16px; padding: 1.25rem;">
                                ${product.price !== 'Consulte' ? 'Agregar al Carrito' : 'Consultar Disponibilidad'}
                            </button>
                        </div>
                    </div>

                    <!-- Shipping -->
                    <div class="shipping-module">
                        <span class="module-title">Cálculo de Envío</span>
                        <div class="shipping-input-group">
                            <input id="criteria-cp" type="text" placeholder="Tu código postal" class="shipping-input">
                            <button onclick="app.calculateShipping()" class="btn" style="background: var(--slate-dark); color: white; padding: 0.5rem 1.5rem; font-size: 0.75rem;">Calcular</button>
                        </div>
                        <div id="shipping-results" class="shipping-results" style="display: none;">
                            <div class="shipping-option option-free">
                                <span style="font-weight: 700;">Retiro en IMRC (Río Cuarto)</span>
                                <span style="font-weight: 900; text-transform: uppercase;">Gratis</span>
                            </div>
                            <div class="shipping-option option-paid">
                                <span style="font-weight: 600;">Envío Nacional (Andreani)</span>
                                <span style="font-weight: 900;">$5.200</span>
                            </div>
                        </div>
                    </div>

                    <!-- Tabs -->
                    <div class="info-tabs">
                        <button onclick="app.switchTab('clinical')" id="tab-clinical" class="tab-btn active">Aval Clínico</button>
                        <button onclick="app.switchTab('specs')" id="tab-specs" class="tab-btn">Ficha Técnica</button>
                    </div>
                    <div id="tab-content" class="tab-content">
                        <p style="font-weight: 800; color: var(--slate-dark); margin-bottom: 0.5rem; font-family: 'Outfit';">Perspectiva del Director:</p>
                        <p style="font-style: italic;">"${product.clinicalPerspective}"</p>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('product-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    calculateInstallments(priceStr) {
        if (priceStr === 'Consulte') return '';
        const price = parseInt(priceStr.replace(/[^0-9]/g, ''));
        const installment = Math.floor(price / 3);
        return `$${installment.toLocaleString('es-AR')}`;
    },

    updateQty(val) {
        const input = document.getElementById('criteria-qty');
        if (!input) return;
        let current = parseInt(input.value);
        if (current + val >= 1) {
            input.value = current + val;
        }
    },

    cart: [],

    addToCart() {
        const btn = document.getElementById('add-to-cart-btn');
        const product = this.currentProduct;
        const qty = document.getElementById('criteria-qty') ? parseInt(document.getElementById('criteria-qty').value) : 1;
        
        if (product.price === 'Consulte') {
            const waMessage = encodeURIComponent(`Hola Lic. Javier, me interesa el producto: ${product.name}. ¿Podría darme más información?`);
            window.open(`https://wa.me/549358XXXXXXX?text=${waMessage}`, '_blank');
            return;
        }

        // Add to internal cart
        const existing = this.cart.find(item => item.id === product.id);
        if (existing) {
            existing.qty += qty;
        } else {
            this.cart.push({ id: product.id, name: product.name, price: product.priceTransfer, qty: qty });
        }

        // Update UI Counter
        const totalItems = this.cart.reduce((acc, item) => acc + item.qty, 0);
        const counter = document.getElementById('cart-count');
        if (counter) {
            counter.innerText = totalItems;
            counter.classList.add('animate-fadeIn');
            setTimeout(() => counter.classList.remove('animate-fadeIn'), 500);
        }

        const originalText = btn.innerText;
        btn.innerText = '¡AGREGADO!';
        btn.classList.add('added-feedback');
        btn.style.background = 'var(--emerald-mid)';
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('added-feedback');
            btn.style.background = '';
        }, 2000);

        console.log(`Carrito actualizado:`, this.cart);
    },

    calculateShipping() {
        const cp = document.getElementById('criteria-cp').value;
        const results = document.getElementById('shipping-results');
        if (cp.length >= 4) {
            results.style.display = 'flex';
            results.classList.add('animate-fadeIn');
        } else {
            alert('Por favor ingrese un código postal válido.');
        }
    },

    switchTab(type) {
        const clinicalBtn = document.getElementById('tab-clinical');
        const specsBtn = document.getElementById('tab-specs');
        const content = document.getElementById('tab-content');
        const product = this.currentProduct;

        if (type === 'clinical') {
            clinicalBtn.classList.add('active');
            specsBtn.classList.remove('active');
            content.innerHTML = `
                <p style="font-weight: 800; color: var(--slate-dark); margin-bottom: 0.5rem; font-family: 'Outfit';">Perspectiva del Director:</p>
                <p style="font-style: italic;">"${product.clinicalPerspective}"</p>
            `;
        } else {
            clinicalBtn.classList.remove('active');
            specsBtn.classList.add('active');
            
            let specsHtml = '<ul class="spec-list">';
            for (const [label, value] of Object.entries(product.techSpecs)) {
                specsHtml += `
                    <li class="spec-item">
                        <span class="spec-label">${label}</span>
                        <span class="spec-value">${value}</span>
                    </li>
                `;
            }
            specsHtml += '</ul>';
            content.innerHTML = specsHtml;
        }
    },

    closeModal() {
        document.getElementById('product-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    },

    renderBlog() {
        const grid = document.getElementById('blog-grid');
        if (!grid) return;
        grid.innerHTML = '';
        
        appData.articles.forEach(art => {
            const post = document.createElement('div');
            post.className = 'glass-card';
            post.innerHTML = `
                <span style="color: var(--medical-green); font-weight: 800; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 1rem;">${art.category}</span>
                <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.3;">${art.title}</h3>
                <p style="color: var(--slate-light); font-size: 1rem; margin-bottom: 2rem;">${art.snippet}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; font-weight: 600;">
                    <span style="color: #94a3b8;">${art.date}</span>
                    <a href="#" style="color: var(--emerald-deep); text-decoration: none;">Leer más →</a>
                </div>
            `;
            grid.appendChild(post);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
