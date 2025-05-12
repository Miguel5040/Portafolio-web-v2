
const Presentation = () => {

  return (
    <>
      <div className="hero-project relative xl:h-[65vh] h-[50vh] w-screen bg-fixed overflow-hidden bg-no-repeat bg-top bg-cover"></div>

      <main className="max-w-3xl mx-auto p-8 py-8 font-inter text-gray-800 opacity-100">

        <div className="mb-8">
          <h1 className="text-4xl font-semibold font-noto-sans leading-tight tracking-tight text-gray-900 mb-6">
            Exportación del catálogo de productos: cómo automatize un proceso manual en nuestra empresa
          </h1>
        </div>

        <div>
          <img
            src="./images/diagrama-background-less.png"
            alt="Busy city street at night with people crossing"
            className="w-full h-auto block"
          />
        </div>

        <span className="text-xs text-[#6B6B6B] py-1">Diagrama de sistema de exportacion</span>

        <div className="space-y-6 mt-8 mb-6">


          <p className="text-lg">
            En la oficina usamos CONTPAQi como sistema principal para manejar varios procesos administrativos y contables, entre ellos el control del almacén. Ahí tenemos registrado todo el catálogo de productos: precios, existencias, proveedores, etc. Sin embargo, para trabajar esa información de manera práctica, siempre la hemos usado en Excel.
          </p>

          <p className="text-lg font-semibold italic text-gray-600">El problema y los primeros obstáculos</p>

          <p className="text-lg">
            Actualizar ese catálogo era un proceso completamente manual: había que exportar los datos desde CONTPAQi, filtrarlos, ordenarlos en Excel y luego pegarlos en un archivo compartido. <span className="bg-yellow-100 italic"> Este proceso consumía alrededor de 20 minutos cada vez </span>, además de estar expuesto a errores manuales.
          </p>

          <p className="text-lg">
            Cuando comencé a trabajar en la automatización, el primer gran obstáculo fue descubrir que CONTPAQi no ofrece una API oficial para acceder a sus datos. Esto complicaba el proceso, ya que no podía simplemente hacer consultas desde una aplicación externa. Después de investigar, decidí ir directamente al origen: la base de datos SQL Server. Desarrollé un script en JavaScript que se conecta a la base, extrae, ordena y filtra los datos, generando un archivo <span className="font-normal">productos.csv</span> listo para usarse.
          </p>

          <p className="text-lg font-semibold italic text-gray-600">Resolver el acceso remoto y exponer el servicio</p>

          <p className="text-lg">
            {`
            Tener el archivo actualizado era solo parte del reto. Otro problema era el acceso remoto: ese archivo se generaba en el servidor físico de la oficina, y necesitábamos poder consumirlo desde cualquier lugar, incluso fuera de la red local.

            Para resolverlo, creé un servidor en Node.js con Express, configurando un endpoint "/productos" que ejecuta el script y responde con el archivo actualizado. Para exponer este servicio al exterior de manera rápida, utilicé el port forwarding nativo de Visual Studio Code, que permite abrir el puerto local a internet sin necesidad de configuraciones complejas. Finalmente, conecté Excel directamente a ese endpoint para que, con un solo clic, pudiera consumir los datos actualizados.
            `}
          </p>

          <div className="mb-2 rounded-md overflow-hidden shadow-xl">
            <img
              src="./images/script-catalogo-imagen.png"
              alt="Busy city street at night with people crossing"
              className="w-full h-auto block"
            />
          </div>

          <span className="text-xs text-[#6B6B6B] py-1">Script para extraccion de catalgo</span>

          <p className="text-lg font-semibold italic text-gray-600">Resultados y beneficios</p>

          <p className="text-lg">
            El proceso pasó de ser lento y repetitivo a casi instantáneo, eliminando errores manuales y asegurando que la información esté siempre actualizada. Este proyecto no solo resolvió un problema práctico del día a día, sino que demostró el valor de aplicar soluciones tecnológicas bien pensadas para optimizar procesos internos, logrando un impacto real y medible en el flujo de trabajo.
          </p>

        </div>
        <a className="font-light underline text-[#333] flex gap-1 text-base" href="/" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
          Menu principal
        </a>
      </main >
    </>
  )
}

export default Presentation;