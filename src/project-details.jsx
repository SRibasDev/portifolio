import {
  S as React,
  Nu as X,
  gu as ArrowRight,
  Cu as ExternalLink,
  yu as ChevronRight,
  Tu as Github,
} from "./preserved-runtime.js";

function Screenshot({ shot, className = "", eager = false }) {
  const [failed, setFailed] = React.useState(false);
  if (failed)
    return (
      <div className="screen-error" role="status">
        Esta tela não pôde ser carregada.
        {shot.source && (
          <a href={shot.source} target="_blank" rel="noreferrer">
            Abrir a tela no projeto <ExternalLink size={16} />
          </a>
        )}
      </div>
    );
  return (
    <img
      className={className}
      src={shot.src}
      alt={`${shot.title} — captura real da interface`}
      width={shot.mobile ? 390 : 1440}
      height={shot.mobile ? 844 : 960}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export function ProjectVisual({ project, large = false }) {
  const shot = project.screenshots[0];
  return (
    <div
      className={`real-project-visual ${project.theme} ${large ? "large" : ""}`}
    >
      <div className="screen-browser" aria-hidden="true">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-address">
          {project.url
            ? new URL(project.url).hostname
            : "Interface do projeto · execução local"}
        </span>
        <ExternalLink size={12} />
      </div>
      <div className="project-screen">
        <Screenshot key={shot.src} shot={shot} eager={large} />
      </div>
      <div className="screen-label">
        <span>
          <i /> {project.status}
        </span>
        <span>
          {project.screenshots.length} telas para explorar{" "}
          <ArrowRight size={13} />
        </span>
      </div>
    </div>
  );
}

function Gallery({ project }) {
  const [active, setActive] = React.useState(0);
  const lightbox = React.useRef(null);
  const shot = project.screenshots[active];
  const count = project.screenshots.length;
  const move = (delta) =>
    setActive((current) => (current + delta + count) % count);
  const closeLightbox = () => lightbox.current?.close();
  const openLightbox = () => lightbox.current?.showModal();
  const onKeys = (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      event.stopPropagation();
      move(event.key === "ArrowRight" ? 1 : -1);
    }
  };
  return (
    <section
      className="case-gallery"
      id={`case-${project.id}-screens`}
      aria-labelledby="screens-heading"
      onKeyDown={onKeys}
    >
      <div className="case-section-heading">
        <div>
          <p className="eyebrow">01 / O PROJETO POR DENTRO</p>
          <h3 id="screens-heading">Telas de verdade.</h3>
        </div>
        <span className="gallery-counter" aria-live="polite">
          {String(active + 1).padStart(2, "0")}{" "}
          <span>/ {String(count).padStart(2, "0")}</span>
        </span>
      </div>
      <div className="gallery-stage">
        <div className="gallery-bar">
          <span className="browser-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>{shot.title}</span>
          <button
            onClick={openLightbox}
            aria-label={`Ampliar tela: ${shot.title}`}
          >
            <ExternalLink size={15} />
            <span>Ampliar</span>
          </button>
        </div>
        <button
          className={`gallery-image ${shot.mobile ? "is-mobile" : ""}`}
          onClick={openLightbox}
          aria-label={`Ampliar captura de ${shot.title}`}
        >
          <Screenshot key={shot.src} shot={shot} eager />
          <span className="image-enlarge-hint">
            <ExternalLink size={14} /> Clique para ampliar
          </span>
        </button>
        <div className="gallery-controls">
          <button onClick={() => move(-1)} aria-label="Tela anterior">
            <ChevronRight className="rotate-arrow" size={18} />
          </button>
          <p aria-live="polite">{shot.title}</p>
          <button onClick={() => move(1)} aria-label="Próxima tela">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div
        className="gallery-thumbnails"
        role="group"
        aria-label="Escolher uma tela"
      >
        {project.screenshots.map((item, index) => (
          <button
            key={item.src}
            onClick={() => setActive(index)}
            className={index === active ? "selected" : ""}
            aria-pressed={index === active}
            aria-label={`Mostrar tela ${index + 1}: ${item.title}`}
          >
            <span
              className={`thumbnail-image ${item.mobile ? "is-mobile" : ""}`}
            >
              <Screenshot shot={item} />
            </span>
            <span>
              <b>{String(index + 1).padStart(2, "0")}</b> {item.title}
            </span>
          </button>
        ))}
      </div>
      <div className="gallery-caption">
        <p>{shot.caption}</p>
        {shot.source && (
          <a href={shot.source} target="_blank" rel="noreferrer">
            Abrir esta tela no projeto <ExternalLink size={13} />
          </a>
        )}
      </div>
      <p className="capture-note">{project.note}</p>
      <dialog
        ref={lightbox}
        className="screen-lightbox"
        aria-label={`Captura ampliada: ${shot.title}`}
        onCancel={(event) => {
          event.preventDefault();
          event.stopPropagation();
          closeLightbox();
        }}
        onClick={(event) => {
          event.stopPropagation();
          if (event.target === lightbox.current) closeLightbox();
        }}
      >
        <div className="lightbox-toolbar">
          <div>
            <strong>{project.name}</strong>
            <span>
              {shot.title} · {active + 1} de {count}
            </span>
          </div>
          <button onClick={closeLightbox} aria-label="Fechar imagem ampliada">
            <X size={22} />
          </button>
        </div>
        <div className={`lightbox-canvas ${shot.mobile ? "is-mobile" : ""}`}>
          <Screenshot key={shot.src} shot={shot} eager />
        </div>
        <div className="lightbox-bottom">
          <button onClick={() => move(-1)}>
            <ChevronRight className="rotate-arrow" size={17} /> Anterior
          </button>
          <span>Use as setas para navegar · Esc para voltar</span>
          <button onClick={() => move(1)}>
            Próxima <ChevronRight size={17} />
          </button>
        </div>
      </dialog>
    </section>
  );
}

export function CaseStudy({ project, onClose }) {
  const jump = (section) =>
    document
      .getElementById(`case-${project.id}-${section}`)
      ?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
  return (
    <article className="case-study">
      <div className="case-topbar">
        <button className="case-back" onClick={onClose}>
          <ArrowRight size={16} className="rotate-arrow" /> Voltar aos projetos
        </button>
        <span className="case-top-label">
          ESTUDO DE CASO <span> / {project.kind}</span>
        </span>
        <button
          className="case-close"
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          <X size={21} />
        </button>
      </div>
      <div className="case-content">
        <div className="case-intro">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h2 id="case-title">
              {project.name}
              <span>.</span>
            </h2>
            <p className="case-deck">{project.desc}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="case-intro-aside">
            <span className="case-status">
              <i />
              {project.status}
            </span>
            <div className="case-action-list">
              {project.demo && (
                <a
                  className="button primary"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explorar demonstração <ExternalLink size={16} />
                </a>
              )}
              {project.url && (
                <a
                  className={`button ${project.demo ? "secondary" : "primary"}`}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar projeto <ExternalLink size={16} />
                </a>
              )}
              {project.repo && (
                <a
                  className="button primary"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} /> Ver código no GitHub{" "}
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <p>
              {project.screenshots.length} capturas reais
              <br />
              Ideia, funcionamento e arquitetura
            </p>
          </div>
        </div>
        <nav className="case-nav" aria-label="Seções do projeto">
          <button onClick={() => jump("screens")}>
            As telas <span>01</span>
          </button>
          <button onClick={() => jump("idea")}>
            A ideia <span>02</span>
          </button>
          <button onClick={() => jump("flow")}>
            Como funciona <span>03</span>
          </button>
          <button onClick={() => jump("architecture")}>
            Arquitetura <span>04</span>
          </button>
        </nav>
        <Gallery project={project} />
        <section
          className="case-idea case-text-section"
          id={`case-${project.id}-idea`}
          aria-labelledby="idea-heading"
        >
          <div>
            <p className="eyebrow">02 / POR QUE EXISTE</p>
            <h3 id="idea-heading">
              A ideia por trás
              <br />
              do projeto.
            </h3>
            <div className="case-audience">
              <span>PARA QUEM</span>
              <p>{project.audience}</p>
            </div>
          </div>
          <div>
            <p className="case-idea-copy">{project.idea}</p>
            <div className="case-features">
              {project.features.map(([title, text]) => (
                <div key={title}>
                  <span className="feature-dot" />
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="case-text-section"
          id={`case-${project.id}-flow`}
          aria-labelledby="flow-heading"
        >
          <div className="case-section-heading">
            <div>
              <p className="eyebrow">03 / DO PRIMEIRO CLIQUE AO RESULTADO</p>
              <h3 id="flow-heading">Como funciona na prática.</h3>
            </div>
          </div>
          <ol className="case-flow">
            {project.steps.map(([title, text], index) => (
              <li key={title}>
                <span className="flow-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>
        <section
          className="case-text-section"
          id={`case-${project.id}-architecture`}
          aria-labelledby="architecture-heading"
        >
          <div className="case-section-heading">
            <div>
              <p className="eyebrow">04 / COMO FOI CONSTRUÍDO</p>
              <h3 id="architecture-heading">Tecnologia com propósito.</h3>
            </div>
            <span className="architecture-label">
              ARQUITETURA EM VISÃO GERAL
            </span>
          </div>
          <ol className="case-architecture">
            {project.architecture.map(([layer, tech, text], index) => (
              <li key={layer}>
                <div>
                  <span>{layer}</span>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                </div>
                <h4>{tech}</h4>
                <p>{text}</p>
                {index < project.architecture.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="architecture-arrow"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
          <p className="case-technical">{project.technical}</p>
          <div className="case-evidence">
            <span>Sobre esta apresentação</span>
            <p>{project.evidence}</p>
            <small>Capturas de 11 de novembro de 2026.</small>
          </div>
        </section>
        <div className="case-end">
          <div>
            <p className="eyebrow">DO CÓDIGO À EXPERIÊNCIA</p>
            <h3>Quer ver funcionando?</h3>
          </div>
          {project.demo ? (
            <a
              className="button primary"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Abrir demonstração <ExternalLink size={17} />
            </a>
          ) : project.url ? (
            <a
              className="button primary"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              Visitar projeto <ExternalLink size={17} />
            </a>
          ) : (
            <a
              className="button primary"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              Explorar o código <Github size={17} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
