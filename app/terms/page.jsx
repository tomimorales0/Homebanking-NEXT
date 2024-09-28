export async function generateMetadata() {
  return {
    title: 'Terminos y condiciones',
    description: 'Consulta los terminos y condiciones del sitio',
    keywords: ['terminos', 'condiciones', 'servicios'],
  };
}

export default function Terms() {
    return (
    <>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Términos y Condiciones del Sitio</h1>
        <p className="mt-4 text-gray-600">
          Horizon Bank S.A.U. (en adelante, “Horizon Bank”) es una sociedad anónima unipersonal constituida bajo las leyes
          de la República Argentina, cuyos accionistas limitan su responsabilidad a la integración de las acciones
          suscritas de acuerdo a la Ley 19.550.
        </p>
        <p className="mt-2 text-gray-600">
          Al acceder al sitio de{' '}
          <a href="https://www.horizonbank.com.ar" className="text-green-500 hover:underline">
            https://www.horizonbank.com.ar
          </a>{' '}
          de Horizon Bank, las personas usuarias están aceptando los términos y condiciones que se detallan a continuación:
        </p>
        <ol className="mt-4 list-decimal list-inside text-gray-600">
          <li>
            Horizon Bank publica información relacionada con su actividad, productos y servicios que ofrece. Se deja
            expresamente aclarado que Horizon Bank se reserva el derecho de modificar la información sin necesidad de
            previo aviso.
          </li>
          <li>
            Es condición esencial del servicio que Horizon Bank pone a su disposición, que la información contenida en el
            presente sitio sea utilizada en forma lícita y de acuerdo con los presentes términos y condiciones.
          </li>
          <li>
            Todos los contenidos del sitio incluyendo, pero no limitándose a: textos, gráficos, logos, imágenes, iconos y
            archivos, hardware y software, así como las marcas Horizon Bank y{' '}
            <a href="https://www.horizonbank.com.ar" className="text-green-500 hover:underline">
              https://www.horizonbank.com.ar
            </a>
            , son propiedad de Horizon Bank y están protegidos por las leyes de Propiedad Intelectual y de derecho de
            autor.
          </li>
          <li>
            Horizon Bank no será responsable de los daños o perjuicios que la persona usuaria pudiera sufrir derivados del
            acceso, uso o mala utilización de los contenidos del sitio{' '}
            <a href="https://www.horizonbank.com.ar" className="text-green-500 hover:underline">
              https://www.horizonbank.com.ar
            </a>{' '}
            y la web en general.
          </li>
          <li>
            Horizon Bank no será responsable de las posibles discrepancias entre la versión impresa de sus documentos y la
            versión electrónica de los mismos que se publiquen en sus sitios, como tampoco por la información que se
            publique en los sitios sobre los cuales posee vínculos o esté imposibilitado de acceder a esos sitios.
          </li>
          <li>
            Horizon Bank no será responsable si por cualquier causa fuera imposible acceder a la presente página, se
            desconectará el servicio, o por los accesos no exitosos a cualquiera de los vínculos incluidos en{' '}
            <a href="https://www.horizonbank.com.ar" className="text-green-500 hover:underline">
              https://www.horizonbank.com.ar
            </a>
            . Tampoco tendrá responsabilidad alguna por la información contenida en los sitios a los cuales el usuario
            acceda por su intermedio.
          </li>
          <li>
            El sitio puede contener o facilitar direcciones web y/o accesos a sitios web de terceros, vinculados o no con
            Horizon Bank, al solo fin de facilitar a la persona usuaria el acceso a información que pudiere considerar de
            utilidad, sin que Horizon Bank valide o apruebe el contenido del sitio vinculado. Horizon Bank no es titular
            de los sitios vinculados de terceros y no es responsable por su contenido ni garantiza de ninguna manera, la
            información allí provista, ni la calidad o validez de los posibles productos o servicios allí ofrecidos, ni
            los términos y condiciones que apliquen a dichos sitios.
          </li>
          <li>
            Horizon Bank prohíbe la duplicación, copia, redistribución, comercialización o cualquier otra actividad que se
            pueda realizar con los contenidos de{' '}
            <a href="https://www.horizonbank.com.ar" className="text-green-500 hover:underline">
              https://www.horizonbank.com.ar
            </a>
            , aun citando las fuentes, salvo consentimiento expreso y por escrito de Horizon Bank.
          </li>
          <li>
            Horizon Bank podrá cambiar o modificar el alcance de los presentes Términos y Condiciones en un futuro.
            Indicaremos la fecha en que se realizaron las revisiones por última vez en la parte inferior de esta página, y
            todas las revisiones entrarán en vigencia al publicarse. Las personas usuarias podrán consultar los presentes
            términos y condiciones de uso periódicamente para ver la versión más reciente.
          </li>
          <li>
            Cualquier controversia o divergencia relacionada con la interpretación, validez, celebración o cumplimiento
            de los presentes términos y condiciones, se someterá a la jurisdicción exclusiva de los Tribunales Nacionales
            Ordinarios con asiento en la Ciudad Autónoma de Buenos Aires, renunciando expresamente el usuario a cualquier
            otro fuero y/o jurisdicción que pudiera corresponderle.
          </li>
        </ol>
        <p className="mt-4 text-gray-600">Versión vigente: 14 de agosto de 2024.</p>
      </div>
      </>
    );
  }
  