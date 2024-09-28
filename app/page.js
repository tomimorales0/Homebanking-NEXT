"use server";
export async function generateMetadata() {
  return {
    title: 'Lading page',
    description: 'Ve todas las opciones que ofrece nuestro sitio',
    keywords: ['horizon', 'homebanking', 'banco'],
  };
}

export default async function Inicio() {
  return (
    <>

      {/* Sección de la tarjeta */}
      <div className="relative isolate overflow-hidden bg-gray-600 py-24 sm:py-32 rounded mx-auto w-full">

        <img
          src="/images/slider2.jpg"
          alt="imagen-persona-feliz"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-top opacity-15"
        />
        {/* Gradiente decorativo */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)`,
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Pide tu tarjeta
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              ¡Con tu tarjeta, aprovecha al máximo tus compras semanales y obtén
              increíbles recompensas!
              <br />
              <br />
              ¿Sabías que al realizar compras semanales por un monto superior a
              $15,000 no solo te llevas a casa todo lo que necesitas, sino que
              también acumulas valiosos puntos que puedes canjear por fabulosos
              premios? Con cada compra, estarás un paso más cerca de disfrutar
              de beneficios exclusivos diseñados especialmente para ti.
            </p>
          </div>

          {/* Botón de acción */}
          <div className="mt-12">
            <a
              href="#"
              className="flex w-36 justify-center rounded-2xl bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center"
            >
              Solicita tu tarjeta
            </a>
          </div>
        </div>
      </div>

      {/* Sección "Nosotros" */}
      <div className="mt-12 rounded-lg  p-8 ">
        <h2 className="text-3xl font-semibold text-center">Nosotros</h2>
        <p className="mt-6 text-lg leading-8">
          Horizon Bank fue fundado en 1973, en Michigan City, Indiana, Estados Unidos.
          Comenzó como un banco local con un enfoque en servir a la comunidad y
          ayudar al crecimiento económico de la región. A lo largo de los años,
          ha expandido sus operaciones, manteniendo siempre su compromiso de
          proporcionar un servicio personalizado y de alta calidad a sus
          clientes.
          <br />
          Desde su fundación, ha evolucionado de ser una pequeña institución
          financiera comunitaria a un banco con presencia en varios estados,
          adaptándose a los cambios en la industria bancaria mientras sigue
          arraigado en los valores que lo han caracterizado desde sus inicios.
          <br />
          <br />
          Nos distinguimos por ofrecer un servicio cercano y personalizado,
          esforzándonos por entender las necesidades individuales de nuestros
          clientes y adaptar soluciones a las mismas.
          <br />
          Aunque es un banco con una tradición sólida, Horizon Bank también
          invierte en tecnología moderna para ofrecer servicios digitales
          convenientes, como la banca en línea y aplicaciones móviles,
          facilitando la gestión de las finanzas desde cualquier lugar.
          <br />
          Contamos con un fuerte enfoque en el apoyo a la comunidad local,
          participando en proyectos y ofreciendo productos que benefician a los
          negocios locales y a las personas en su área de influencia.
          <br />
          Nos enorgullece operar con altos estándares éticos, siendo
          transparentes en nuestras políticas y tarifas, lo que permite a los
          clientes tomar decisiones informadas sobre sus finanzas.
        </p>
      </div>
    </>
  );
}
