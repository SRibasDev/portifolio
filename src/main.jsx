import {
  lu as useReducedMotion,
  Y as JSX,
  du as motion,
  _u as ArrowUpRight,
  S as React,
  Nu as X,
  ku as Menu,
  kb as HeroGrid,
  jb as HeroStroke,
  Mb as ShinyLink,
  gu as ArrowRight,
  Tu as Github,
  Eu as GraduationCap,
  Au as Pause,
  ju as Play,
  Nb as ShinyButton,
  bu as Code2,
  Su as Database,
  Mu as ShieldCheck,
  wu as FlaskConical,
  Du as Layers,
  Ab as AboutEffects,
  Ou as Linkedin,
  vu as Check,
  xu as Copy,
  Cu as ExternalLink,
  yu as ChevronRight,
  uu as ReactDOMClient,
} from "./preserved-runtime.js";
import "./style.css";
import { projects } from "./projects.js";
import { CaseStudy, ProjectVisual } from "./project-details.jsx";
import "./project-details.css";
const github = "https://github.com/SRibasDev";
const linkedin = "https://www.linkedin.com/in/samuelribasdev";
function Reveal({ children: e, className: t = `` }) {
  let n = useReducedMotion();
  return (
    <motion.div
      className={t}
      initial={
        !n && {
          opacity: 0,
          y: 24,
        }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: !0,
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {e}
    </motion.div>
  );
}
function useReducedMotionSetting() {
  let [e, t] = (0, React.useState)(!0);
  return (
    (0, React.useEffect)(() => {
      let e = window.matchMedia(`(prefers-reduced-motion: reduce)`),
        n = () => t(e.matches);
      return (
        n(),
        e.addEventListener(`change`, n),
        () => e.removeEventListener(`change`, n)
      );
    }, []),
    e
  );
}
function App() {
  let e = useReducedMotionSetting(),
    [t, n] = (0, React.useState)(!1),
    r = !e && !t,
    [i, a] = (0, React.useState)(!1),
    [o, s] = (0, React.useState)(`Destaques`),
    [c, l] = (0, React.useState)(null),
    [u, d] = (0, React.useState)(!1),
    f = (0, React.useRef)(null),
    p = (0, React.useRef)(null);
  (0, React.useEffect)(
    () => (
      c
        ? (f.current?.showModal(), (document.body.style.overflow = `hidden`))
        : (f.current?.close(),
          (document.body.style.overflow = ``),
          p.current?.focus()),
      () => {
        document.body.style.overflow = ``;
      }
    ),
    [c],
  );
  function m(e) {
    ((p.current = document.activeElement), l(e));
  }
  async function h() {
    try {
      (await navigator.clipboard.writeText(linkedin),
        d(!0),
        setTimeout(() => d(!1), 2500));
    } catch {
      window.open(linkedin, `_blank`, `noopener,noreferrer`);
    }
  }
  let g =
    o === `Destaques`
      ? projects.filter((project) => project.featured)
      : o === `Sistemas`
        ? projects.filter((e) => e.kind === "Sistema")
        : o === `Websites`
          ? projects.filter((e) => e.kind === "Website")
          : projects;
  return (
    <JSX.Fragment>
      <a
        className={`skip-link`}
        href={`#conteudo`}
      >{`Pular para o conteúdo`}</a>
      <header>
        <nav className={`nav-shell`} aria-label={`Principal`}>
          <a
            className={`wordmark`}
            href={`#inicio`}
            aria-label={`Samuel Ribas início`}
          >
            {`sr`}
            <span>{`.`}</span>
          </a>
          <div className={`nav-links ` + (i ? `is-open` : ``)}>
            {[
              [`Projetos`, `projetos`],
              [`Tecnologias`, `tecnologias`],
              [`Sobre`, `sobre`],
            ].map(([e, t]) => (
              <a href={`#` + t} onClick={() => a(!1)} key={t}>
                {e}
              </a>
            ))}
          </div>
          <a className={`nav-contact`} href={`#contato`}>
            {`Vamos conversar `}
            <ArrowUpRight size={14} />
          </a>
          <button
            className={`menu-toggle`}
            onClick={() => a(!i)}
            aria-label={i ? `Fechar menu` : `Abrir menu`}
            aria-expanded={i}
          >
            {i ? <X /> : <Menu />}
          </button>
        </nav>
      </header>
      <main id={`conteudo`}>
        <section id={`inicio`} className={`hero container`}>
          <Reveal className={`hero-intro-panel`}>
            <HeroGrid enabled={r} />
            <div className={`availability`}>
              <span />
              {` Aberto a oportunidades de estágio`}
            </div>
            <p className={`hero-intro`}>{`OLÁ, EU SOU SAMUEL RIBAS`}</p>
            <h1 aria-label={`Ideias que viram sistemas de verdade.`}>
              <span
                className={`hero-title-first`}
                aria-hidden={`true`}
              >{`Ideias que viram`}</span>
              <span aria-hidden={`true`}>
                <HeroStroke enabled={r} />
              </span>
            </h1>
            <p className={`hero-description`}>
              {`Desenvolvedor em formação. Curioso por natureza.`}
              <br className={`desktop-break`} />
              {` Construindo soluções com Java, Spring Boot e tecnologias web.`}
            </p>
            <div className={`hero-actions`}>
              <ShinyLink enabled={r} href={`#projetos`}>
                {`Explore meus projetos `}
                <ArrowRight size={17} />
              </ShinyLink>
              <a
                className={`text-link`}
                href={github}
                target={`_blank`}
                rel={`noreferrer`}
              >
                <Github size={18} />
                {` Meu GitHub `}
                <ArrowUpRight size={14} />
              </a>
            </div>
            <div className={`hero-meta`}>
              <span>
                <GraduationCap size={16} />
                {` ADS · FATEC-SP`}
              </span>
              <i />
              <span>{`São Paulo, Brasil`}</span>
            </div>
          </Reveal>
          <Reveal className={`hero-showcase`}>
            <div className={`showcase-label`}>
              <span>
                <i />
                {` EM CONSTRUÇÃO CONSTANTE`}
              </span>
              <button
                className={`effects-toggle`}
                onClick={() => n(!t)}
                aria-pressed={r}
                disabled={!!e}
                aria-label={
                  e
                    ? `Movimento reduzido ativado no dispositivo`
                    : r
                      ? `Pausar efeitos visuais`
                      : `Ativar efeitos visuais`
                }
              >
                {r ? <Pause size={12} /> : <Play size={12} />}
                {` `}
                {e
                  ? `Movimento reduzido`
                  : r
                    ? `Pausar efeitos`
                    : `Ativar efeitos`}
              </button>
            </div>
            <button
              className={`hero-project`}
              onClick={() => m(projects[0])}
              aria-label={`Explorar Tetra Pet`}
            >
              <ProjectVisual project={projects[0]} large={!0} />
              <span className={`floating-stack`}>
                <span className={`java-icon`}>
                  <ArrowRight size={18} />
                </span>
                <div>
                  {`Tetra Pet · Sistema no ar`}
                  <small>{`Explore as telas reais.`}</small>
                </div>
                <ArrowUpRight size={17} />
              </span>
            </button>
            <div className={`showcase-footer`}>
              <span>{`Software pensado para o mundo real.`}</span>
              <a href={`#projetos`}>
                {`Conheça os projetos `}
                <DownArrow />
              </a>
            </div>
          </Reveal>
        </section>
        <section id={`projetos`} className={`projects-section container`}>
          <Reveal className={`section-top`}>
            <div>
              <p className={`eyebrow`}>{`01 / PROJETOS SELECIONADOS`}</p>
              <h2>
                {`Aprender. Construir.`}
                <br />
                <span>{`Fazer acontecer.`}</span>
              </h2>
            </div>
            <p>
              {`Projetos reais. Telas de verdade.`}
              <br />
              {`Explore a ideia, o sistema e o código.`}
            </p>
          </Reveal>
          <div
            className={`filter-row`}
            role={`group`}
            aria-label={`Filtrar projetos`}
          >
            {[`Destaques`, `Sistemas`, `Websites`, `Todos`].map((e) => (
              <button
                aria-pressed={o === e}
                className={o === e ? `active` : ``}
                onClick={() => s(e)}
                key={e}
              >
                {e}
                {e === `Todos` && <span>{`08`}</span>}
              </button>
            ))}
            <span className={`project-count`}>
              {g.length.toString().padStart(2, `0`)}
              {` projetos`}
            </span>
          </div>
          <div className={`project-grid`}>
            {g.map((e) => (
              <Reveal className={`project-card`} key={e.id}>
                <button
                  className={`project-image-button`}
                  onClick={() => m(e)}
                  aria-label={`Explorar ` + e.name}
                >
                  <ProjectVisual project={e} />
                  <span className={`image-open`}>
                    <ArrowUpRight size={20} />
                  </span>
                </button>
                <div className={`card-info`}>
                  <p className={`eyebrow`}>{e.category}</p>
                  <button className={`project-title`} onClick={() => m(e)}>
                    {e.name}
                    <ArrowUpRight size={19} />
                  </button>
                  <p className={`card-desc`}>{e.desc}</p>
                  <div className={`tags`}>
                    {e.tags.map((e) => (
                      <span key={e}>{e}</span>
                    ))}
                  </div>
                  <button className="case-card-link" onClick={() => m(e)}>
                    Ver projeto por dentro{" "}
                    <span>
                      {e.screenshots.length} telas <ArrowRight size={15} />
                    </span>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          {o === `Destaques` && (
            <ShinyButton enabled={r} onClick={() => s(`Todos`)}>
              {`Conheça os 8 projetos `}
              <ArrowRight size={16} />
            </ShinyButton>
          )}
        </section>
        <section id={`tecnologias`} className={`tech-section`}>
          <div className={`container`}>
            <Reveal className={`section-top`}>
              <div>
                <p className={`eyebrow`}>{`02 / MINHA CAIXA DE FERRAMENTAS`}</p>
                <h2>
                  {`A tecnologia muda.`}
                  <br />
                  <span>{`A vontade de aprender, não.`}</span>
                </h2>
              </div>
              <p>
                {`Tecnologias que uso para transformar`}
                <br />
                {`problemas em soluções.`}
              </p>
            </Reveal>
            <div className={`tech-grid`}>
              {[
                {
                  icon: Code2,
                  title: `Backend`,
                  copy: `Onde as regras viram solução.`,
                  tags: [`Java 21`, `Spring Boot`, `APIs REST`],
                },
                {
                  icon: Database,
                  title: `Dados`,
                  copy: `Estrutura para crescer com consistência.`,
                  tags: [`SQL · MySQL`, `H2`, `JPA · Hibernate`, `Flyway`],
                },
                {
                  icon: ShieldCheck,
                  title: `Segurança`,
                  copy: `Acesso certo, no lugar certo.`,
                  tags: [`Spring Security`, `JWT`, `Permissões por perfil`],
                },
                {
                  icon: FlaskConical,
                  title: `Qualidade`,
                  copy: `Confiança a cada nova entrega.`,
                  tags: [`JUnit 5`, `Mockito`, `MockMvc`, `Git · GitHub`],
                },
              ].map(({ icon: e, title: t, copy: n, tags: r }, i) => (
                <Reveal className={`tech-card`} key={t}>
                  <div className={`tech-card-top`}>
                    <e size={23} strokeWidth={1.5} />
                    <span>
                      {`0`}
                      {i + 1}
                    </span>
                  </div>
                  <h3>{t}</h3>
                  <p>{n}</p>
                  <div className={`tech-tags`}>
                    {r.map((e) => (
                      <span key={e}>{e}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className={`learning-strip`}>
              <Layers size={19} />
              <p>
                <strong>{`Sempre expandindo o repertório.`}</strong>
                {` Também exploro JavaScript, React e experiências para a web.`}
              </p>
              <span>
                {`APRENDIZADO CONTÍNUO `}
                <ArrowUpRight size={15} />
              </span>
            </Reveal>
          </div>
        </section>
        <section id={`sobre`} className={`about-section container`}>
          <Reveal className={`about-visual`}>
            <AboutEffects enabled={r} />
            <div className={`about-monogram`}>
              {`sr`}
              <span>{`.`}</span>
            </div>
            <div className={`orbit orbit-one`} />
            <div className={`orbit orbit-two`} />
            <span
              className={`about-coordinate`}
            >{`23°33′ S \xA0 46°38′ W`}</span>
            <span className={`about-note`}>{`CURIOSIDADE EM MOVIMENTO.`}</span>
            <div className={`about-label`}>
              <span />
              {` Desenvolvedor em formação`}
            </div>
          </Reveal>
          <Reveal className={`about-copy`}>
            <p className={`eyebrow`}>{`03 / ALÉM DO CÓDIGO`}</p>
            <h2>
              {`Prazer,`}
              <br />
              {`Samuel Ribas`}
              <span className={`blue`}>{`.`}</span>
            </h2>
            <p>
              {`Sou Samuel Ribas Castro, estudante de `}
              <strong>{`Análise e Desenvolvimento de Sistemas na FATEC-SP`}</strong>
              {`. Gosto de entender como as coisas funcionam — e de descobrir como fazê-las funcionar melhor.`}
            </p>
            <p>{`Meu foco está no desenvolvimento backend com Java e Spring Boot. Nos projetos, coloco em prática orientação a objetos, APIs, banco de dados e regras de negócio.`}</p>
            <p>{`Busco um estágio para aprender com uma equipe, contribuir com o que já construí e continuar evoluindo, uma entrega de cada vez.`}</p>
            <a
              className={`text-link`}
              href={linkedin}
              target={`_blank`}
              rel={`noreferrer`}
            >
              {`Mais sobre minha trajetória `}
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </section>
        <section id={`contato`} className={`contact-section container`}>
          <Reveal>
            <div className={`availability`}>
              <span />
              {` Vamos construir algo juntos?`}
            </div>
            <h2>
              {`O próximo desafio`}
              <br />
              {`pode começar `}
              <span>{`aqui.`}</span>
            </h2>
            <p>
              {`Tem uma oportunidade de estágio ou quer conversar sobre tecnologia?`}
              <br className={`desktop-break`} />
              {` Estou pronto para aprender, colaborar e fazer acontecer.`}
            </p>
            <div className={`contact-actions`}>
              <a
                className={`button primary`}
                href={linkedin}
                target={`_blank`}
                rel={`noreferrer`}
              >
                <Linkedin size={18} />
                {` Converse comigo no LinkedIn `}
                <ArrowUpRight size={16} />
              </a>
              <a
                className={`button secondary`}
                href={github}
                target={`_blank`}
                rel={`noreferrer`}
              >
                <Github size={18} />
                {` Explore meu GitHub`}
              </a>
              <button
                className={`copy-button`}
                onClick={h}
                aria-label={`Copiar link do LinkedIn`}
              >
                {u ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
            <span className={`copy-feedback`} role={`status`}>
              {u ? `Link do LinkedIn copiado.` : ``}
            </span>
          </Reveal>
        </section>
      </main>
      <footer className={`container`}>
        <a
          className={`wordmark`}
          href={`#inicio`}
          aria-label={`Voltar ao início`}
        >
          {`sr`}
          <span>{`.`}</span>
        </a>
        <span>
          {`Samuel Ribas Castro `}
          <span className={`footer-dot`}>{`·`}</span>
          {` Feito com intenção. E código.`}
        </span>
        <div>
          <a
            href={github}
            target={`_blank`}
            rel={`noreferrer`}
            aria-label={`GitHub`}
          >
            <Github size={18} />
          </a>
          <a
            href={linkedin}
            target={`_blank`}
            rel={`noreferrer`}
            aria-label={`LinkedIn`}
          >
            <Linkedin size={18} />
          </a>
          <a href={`#inicio`} aria-label={`Voltar ao topo`}>
            <ArrowUpRight size={19} />
          </a>
        </div>
      </footer>
      <dialog
        ref={f}
        className={`case-dialog`}
        aria-labelledby="case-title"
        onCancel={(event) => {
          if (event.defaultPrevented) return;
          l(null);
        }}
        onClick={(e) => {
          e.target === f.current && l(null);
        }}
      >
        {c && <CaseStudy key={c.id} project={c} onClose={() => l(null)} />}
      </dialog>
    </JSX.Fragment>
  );
}
function DownArrow() {
  return (
    <ChevronRight
      size={15}
      style={{
        transform: `rotate(90deg)`,
      }}
    />
  );
}
(0, ReactDOMClient.createRoot)(document.getElementById(`root`)).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
