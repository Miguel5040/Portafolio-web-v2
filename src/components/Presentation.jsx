import { useTranslation, Trans } from 'react-i18next';

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="hero-project relative xl:h-[65vh] h-[50vh] w-screen bg-fixed overflow-hidden bg-no-repeat bg-top bg-cover bg-[url(/images/system-hero.webp)]"></div>

      <main className="max-w-3xl mx-auto p-8 py-8 font-inter text-gray-800 opacity-100 text-pretty">

        <div className="mb-8">
          <h1 className="text-4xl font-semibold font-noto-sans leading-tight tracking-tight text-gray-900 mb-6">
            {t('title')}
          </h1>
        </div>

        <div>
          <img
            src="./images/diagrama-background-less.webp"
            alt="Diagram of system background less"
            className="w-full h-auto block"
          />
        </div>

        <span className="text-xs text-[#6B6B6B] py-1">{t('diagramCaption')}</span>

        <div className="space-y-6 mt-8 mb-6">

          <p className="text-lg">
            {t('intro')}
          </p>

          <p className="text-lg font-semibold italic text-gray-600">{t('problemTitle')}</p>

          <p className="text-lg">
            <Trans i18nKey="problem" t={t} components={{ 1: <span className="bg-yellow-100 italic" /> }} />
          </p>

          <p className="text-lg">
            <Trans i18nKey="obstacle" t={t} components={{ 1: <span className="font-normal" /> }} />
          </p>

          <div className="mb-2 rounded-md overflow-hidden shadow-xl">
            <img
              src="./images/script-catalogo-imagen.webp"
              alt="Script para extraccion de catalogo"
              className="w-full h-auto block"
            />
          </div>

          <span className="text-xs text-[#6B6B6B] py-1">{t('scriptCaption')}</span>

          <p className="text-lg font-semibold italic text-gray-600">{t('remoteTitle')}</p>

          <p className="text-lg whitespace-pre-line">
            {t('remote')}
          </p>

          <div className="mb-2 rounded-md overflow-hidden shadow-xl">
            <img
              src="./images/server.webp"
              alt="Servidor Node.js con Express"
              className="w-full h-auto block"
            />
          </div>

          <span className="text-xs text-[#6B6B6B] py-1">{t('serverCaption')}</span>

          <p className="text-lg font-semibold italic text-gray-600">{t('resultsTitle')}</p>

          <p className="text-lg">
            {t('results')}
          </p>

        </div>
        <a className="font-light underline text-[#333] flex gap-1 text-base" href="/" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
          {t('mainMenu')}
        </a>
      </main >
    </>
  )
}

export default Presentation;