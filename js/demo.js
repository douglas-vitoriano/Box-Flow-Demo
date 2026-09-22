const STORAGE_KEY = "boxflow-demo"
const AUTH_KEY = "boxflow-demo-auth"
const SIDEBAR_KEY = "sidebar-collapsed"

const ICONS = {
  plus: '<path d="M12 5v14M5 12h14"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V6a2 2 0 0 1 2-2h10"/>',
  download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  back: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  panel_close: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',
  panel_open: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m13 9 3 3-3 3"/>',
  user: '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  box: '<path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  restore: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'
}

const STATUSES = ["aberta", "enviada", "aprovada", "perdida"]

function seed() {
  return {
    admin: {
      name: "Admin Exemplo",
      document: "111.111.111-11",
      phone: "(11) 99999-0000",
      email: "admin@boxflow.com.br",
      password: "mudeesta123"
    },
    empresas: [
      {
        id: "e1", name: "Cartonagem Exemplo", document: "00.000.000/0001-91", division: "Ondulado",
        phone: "(11) 3333-4444", email: "contato@boxflow.com.br", site: "https://boxflow.com.br",
        uf: "SP", color: "#233240", representative: "Ana Ribeiro", regime: "presumido",
        icms: 18, pis: 1.65, cofins: 7.6, margem: 30, comissao: 5,
        observations: "Preços válidos para retirada na fábrica. Frete a combinar."
      },
      {
        id: "e2", name: "Ondulados Sul", document: "11.222.333/0001-44", division: "Papelão",
        phone: "(51) 3222-1010", email: "vendas@onduladossul.com.br", site: "https://onduladossul.com.br",
        uf: "RS", color: "#1a4d3e", representative: "Rafael Dutra", regime: "real",
        icms: 17, pis: 1.65, cofins: 7.6, margem: 28, comissao: 4,
        observations: "Entrega na região metropolitana inclusa acima de 5.000 unidades."
      },
      {
        id: "e3", name: "Caixas Litoral", document: "55.666.777/0001-88", division: "Embalagens",
        phone: "(48) 3344-9090", email: "oi@caixaslitoral.com.br", site: "",
        uf: "SC", color: "#3d2a4a", representative: "Helena Vaz", regime: "simples",
        icms: 0, pis: 0, cofins: 0, margem: 35, comissao: 6,
        observations: "Produção sob encomenda. Arte aprovada em até 2 dias úteis."
      }
    ],
    clientes: [
      { id: "c1", empresaId: "e1", name: "Embalagens Norte", document: "22.222.222/0001-22", phone: "(11) 98888-7777", email: "cliente@exemplo.com.br", contact: "Carlos Mendes" },
      { id: "c2", empresaId: "e1", name: "Mercado Central", document: "33.444.555/0001-66", phone: "(11) 97777-1212", email: "compras@mercadocentral.com.br", contact: "Lúcia Prado" },
      { id: "c3", empresaId: "e2", name: "Vinícola Serra", document: "44.555.666/0001-77", phone: "(54) 3333-8080", email: "logistica@vinicolaserra.com.br", contact: "Pedro Alves" },
      { id: "c4", empresaId: "e3", name: "Pescados Atlântico", document: "77.888.999/0001-00", phone: "(48) 99911-2020", email: "marina@pescadosatlantico.com.br", contact: "Marina Costa" }
    ],
    propostas: [
      {
        id: "p1", number: "2026-0001", empresaId: "e1", clienteId: "c1", invoice: "FV-1042",
        initialAt: "2026-09-22", status: "aberta", validity: "10 dias", payment: "28 dias",
        representative: "Ana Ribeiro", lede: "Segue nossa proposta para as embalagens abaixo.",
        observations: "Preços válidos para retirada na fábrica. Frete a combinar.",
        product: {
          name: "Caixa 84400", reference: "84400", option: "Padrão", shipping: "FOB",
          quantities: [
            { qtd: "1000", preco: "1.20" },
            { qtd: "5000", preco: "1.05" },
            { qtd: "10000", preco: "0.95" }
          ],
          components: [
            { titulo: "Caixa", sub: "tampa e fundo", medidas: "400 × 300 × 200 mm", sistema: "Corte e vinco", material: "Ondulado C", onda: "C" },
            { titulo: "Divisória", sub: "interna", medidas: "390 × 290 mm", sistema: "Colada", material: "Kraft", onda: "B" }
          ]
        }
      },
      {
        id: "p2", number: "2026-0002", empresaId: "e1", clienteId: "c2", invoice: "FV-1108",
        initialAt: "2026-09-18", status: "enviada", validity: "15 dias", payment: "21 dias",
        representative: "Ana Ribeiro", lede: "Proposta para a linha de hortifruti da loja centro.",
        observations: "Impressão flexográfica em uma cor.",
        product: {
          name: "Bandeja hortifruti", reference: "HF-12", option: "Com alça", shipping: "CIF",
          quantities: [{ qtd: "2000", preco: "0.86" }, { qtd: "8000", preco: "0.74" }],
          components: []
        }
      },
      {
        id: "p3", number: "2026-0003", empresaId: "e2", clienteId: "c3", invoice: "PV-77",
        initialAt: "2026-09-10", status: "aprovada", validity: "20 dias", payment: "À vista",
        representative: "Rafael Dutra", lede: "Embalagem para o rótulo da safra 2026.",
        observations: "Entrega na região metropolitana inclusa acima de 5.000 unidades.",
        product: {
          name: "Caixa garrafa 6 un.", reference: "VG-6", option: "Micro-ondulado", shipping: "CIF",
          quantities: [{ qtd: "3000", preco: "2.40" }, { qtd: "6000", preco: "2.15" }],
          components: []
        }
      },
      {
        id: "p4", number: "2026-0004", empresaId: "e3", clienteId: "c4", invoice: "ORC-19",
        initialAt: "2026-08-28", status: "perdida", validity: "7 dias", payment: "30 / 60 dias",
        representative: "Helena Vaz", lede: "Caixa térmica para pescado fresco.",
        observations: "Produção sob encomenda. Arte aprovada em até 2 dias úteis.",
        product: {
          name: "Caixa isotérmica", reference: "ISO-20", option: "Com tampa", shipping: "FOB",
          quantities: [{ qtd: "500", preco: "8.90" }],
          components: []
        }
      }
    ]
  }
}

const app = document.querySelector("#app")
let db = load()
let notice = null
let mobileOpen = false

function load() {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch (_) { /* dados iniciais */ }
  return seed()
}

function save() {
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(db)) } catch (_) { /* a página segue só na memória */ }
}

function signedIn() {
  return sessionStorage.getItem(AUTH_KEY) === "1"
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]))
}

function icon(name) {
  return `<span class="icon-svg" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg></span>`
}

function money(value) {
  const number = Number(String(value).replace(",", "."))
  if (!Number.isFinite(number)) return "—"
  return number.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 4 })
}

function dateBR(iso) {
  if (!iso) return "—"
  const [year, month, day] = iso.split("-")
  return `${day}/${month}/${year}`
}

function empresa(id) { return db.empresas.find((item) => item.id === id) }
function cliente(id) { return db.clientes.find((item) => item.id === id) }

function uid(prefix) {
  return `${prefix}${Math.random().toString(36).slice(2, 8)}`
}

function nextNumber(empresaId) {
  const year = new Date().getFullYear()
  const used = db.propostas.filter((item) => item.empresaId === empresaId && item.number.startsWith(`${year}-`))
  const seq = used.reduce((max, item) => Math.max(max, Number(item.number.split("-")[1]) || 0), 0) + 1
  return `${year}-${String(seq).padStart(4, "0")}`
}

function route() {
  const raw = (location.hash || "#/propostas").replace(/^#/, "")
  const [path, query = ""] = raw.split("?")
  const parts = path.split("/").filter(Boolean)
  return { parts, params: new URLSearchParams(query) }
}

function go(hash) {
  if (location.hash === hash) render()
  else location.hash = hash
}

function flash(type, text) {
  notice = { type, text }
}

function field(label, html) {
  return `<div class="field"><label class="label">${label}</label><div class="control">${html}</div></div>`
}

function options(items, selected, blank) {
  const head = blank ? `<option value="">${esc(blank)}</option>` : ""
  return head + items.map(([value, label]) => `<option value="${esc(value)}" ${value === selected ? "selected" : ""}>${esc(label)}</option>`).join("")
}

function render() {
  const { parts } = route()
  if (!signedIn()) {
    app.innerHTML = parts[0] === "recuperar" ? recoverScreen() : loginScreen()
    bindAuth()
    return
  }
  if (!parts.length || parts[0] === "entrar") {
    location.replace("#/propostas")
    return
  }
  app.innerHTML = shell(screenFor(parts))
  bindShell()
  bindScreen(parts)
}

function loginScreen() {
  return `<section class="auth"><div class="auth__card">
    <div class="auth__brand"><img class="logo logo--vertical" src="assets/vertical.png" alt="BoxFlow"></div>
    <h1 class="auth__title">Entrar</h1>
    <form id="login-form">
      ${field("E-mail", `<input class="input" name="email" type="email" autocomplete="username" required value="admin@boxflow.com.br">`)}
      ${field("Senha", `<input class="input" name="password" type="password" autocomplete="current-password" required>`)}
      <p id="login-error" class="help" hidden></p>
      <button class="button is-primary is-block" type="submit">Entrar</button>
      <button class="button is-block" type="button" id="demo-enter">Entrar com a conta de exemplo</button>
    </form>
    <p class="auth__hint"><br>Email: admin@boxflow.com.br · Senha: mudeesta123</p>
    <div class="auth__links"><a href="#/recuperar">Esqueceu a senha?</a></div>
  </div></section>`
}

function recoverScreen() {
  return `<section class="auth"><div class="auth__card">
    <div class="auth__brand"><img class="logo logo--vertical" src="assets/vertical.png" alt="BoxFlow"></div>
    <h1 class="auth__title">Recuperar senha</h1>
    <p class="help">Nesta demonstração a senha não é enviada por e-mail. Use a conta de exemplo na tela de entrada.</p>
    <a class="button is-primary" href="#/entrar">Voltar</a>
  </div></section>`
}

function bindAuth() {
  const form = document.querySelector("#login-form")
  if (!form) return
  const error = document.querySelector("#login-error")
  const submit = (email, password) => {
    if (email === db.admin.email && password === db.admin.password) {
      sessionStorage.setItem(AUTH_KEY, "1")
      go("#/propostas")
      return
    }
    error.hidden = false
    error.textContent = "E-mail ou senha não conferem."
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const data = new FormData(form)
    submit(String(data.get("email") || "").trim(), String(data.get("password") || ""))
  })
  document.querySelector("#demo-enter").addEventListener("click", () => {
    submit(db.admin.email, db.admin.password)
  })
}

function shell(content) {
  const collapsed = localStorage.getItem(SIDEBAR_KEY) === "1"
  const here = (location.hash || "#/propostas").split("?")[0]
  const link = (hash, ic, label) => {
    const propostasActive = hash === "#/propostas" && (here === "#/propostas" || /^#\/propostas\/(?!nova)/.test(here))
    const on = hash === "#/propostas" ? propostasActive : (here === hash || here.startsWith(`${hash}/`))
    return `<a href="${hash}" class="${on ? "is-active" : ""}" title="${label}">${icon(ic)} <span class="sidebar__text">${label}</span></a>`
  }
  const novaActive = here === "#/propostas/nova"
  return `<div class="${collapsed ? "is-collapsed" : ""}" id="nav">
    <header class="topbar">
      <a class="topbar__brand" href="#/propostas">
        <img class="logo logo--horizontal" src="assets/horizontal.png" alt="BoxFlow">
        <span class="topbar__sep">·</span>
        <span class="topbar__sub">Carta-proposta</span>
      </a>
      <div class="topbar__right">
        <span class="demo-pill">Demo</span>
        <button type="button" class="button is-small topbar__logout" id="logout" title="Sair">${icon("logout")} <span>Sair</span></button>
        <button type="button" class="topbar__burger" id="burger" aria-label="Abrir menu" aria-expanded="${mobileOpen}">
          <span class="icon-open">${icon("menu")}</span>
          <span class="icon-close">${icon("close")}</span>
        </button>
      </div>
    </header>
    ${mobileOpen ? `<div class="backdrop" id="backdrop"></div>` : ""}
    <div class="shell">
      <aside class="sidebar ${mobileOpen ? "is-open" : ""}">
        <p class="sidebar__label">Navegação</p>
        <nav class="sidebar__nav">
          ${link("#/propostas", "file", "Propostas")}
          <a href="#/propostas/nova" class="${novaActive ? "is-active" : ""}" title="Nova proposta">${icon("plus")} <span class="sidebar__text">Nova proposta</span></a>
          ${link("#/clientes", "user", "Clientes")}
          ${link("#/empresas", "box", "Empresas")}
        </nav>
        <div class="sidebar__foot">
          <a class="sidebar__account ${here === "#/perfil" ? "is-active" : ""}" href="#/perfil" title="Meus dados">
            ${icon("user")}
            <span class="sidebar__text"><strong>${esc(db.admin.name)}</strong><small>${esc(db.admin.email)}</small></span>
          </a>
          <button type="button" class="sidebar__collapse" id="collapse" aria-label="${collapsed ? "Abrir menu" : "Recolher menu"}">
            <span class="icon-collapse">${icon("panel_close")}</span>
            <span class="icon-expand">${icon("panel_open")}</span>
            <span class="sidebar__collapse-label sidebar__collapse-label--desk">Recolher</span>
            <span class="sidebar__collapse-label sidebar__collapse-label--mob">Fechar</span>
          </button>
          <button type="button" class="sidebar__restore" id="restore" title="Restaurar dados">${icon("restore")} <span class="sidebar__text">Restaurar demo</span></button>
        </div>
      </aside>
      <main class="content-area">
        ${notice ? `<div class="notification is-${notice.type}">${esc(notice.text)}</div>` : ""}
        ${content}
      </main>
    </div>
  </div>`
}

function bindShell() {
  notice = null
  document.querySelector("#logout").addEventListener("click", () => {
    sessionStorage.removeItem(AUTH_KEY)
    mobileOpen = false
    go("#/entrar")
  })
  document.querySelector("#collapse").addEventListener("click", (event) => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      mobileOpen = false
      render()
      return
    }
    const nav = document.querySelector("#nav")
    const collapsed = nav.classList.toggle("is-collapsed")
    localStorage.setItem(SIDEBAR_KEY, collapsed ? "1" : "0")
    const label = collapsed ? "Abrir menu" : "Recolher menu"
    event.currentTarget.setAttribute("aria-label", label)
    event.currentTarget.setAttribute("title", label)
  })
  document.querySelector("#burger").addEventListener("click", () => {
    mobileOpen = !mobileOpen
    render()
  })
  document.querySelector("#backdrop")?.addEventListener("click", () => {
    mobileOpen = false
    render()
  })
  document.querySelector("#restore").addEventListener("click", () => {
    if (!confirm("Voltar aos dados originais da demonstração?")) return
    db = seed()
    save()
    flash("success", "Dados da demonstração restaurados.")
    go("#/propostas")
  })
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", () => { mobileOpen = false })
  })
}

function screenFor(parts) {
  const [area, id, action] = parts
  if (area === "propostas" && !id) return propostasIndex()
  if (area === "propostas" && id === "nova") return propostaForm(null)
  if (area === "propostas" && action === "editar") return propostaForm(id)
  if (area === "propostas" && id) return propostaShow(id)
  if (area === "clientes" && !id) return clientesIndex()
  if (area === "clientes" && id === "novo") return clienteForm(null)
  if (area === "clientes") return clienteForm(id)
  if (area === "empresas" && !id) return empresasIndex()
  if (area === "empresas" && id === "nova") return empresaForm(null)
  if (area === "empresas") return empresaForm(id)
  if (area === "perfil") return perfilForm()
  return propostasIndex()
}

function propostasIndex() {
  const situacao = route().params.get("situacao")
  const rows = db.propostas.filter((item) => !situacao || item.status === situacao)
  const tab = (label, value) => {
    const href = value ? `#/propostas?situacao=${value}` : "#/propostas"
    const active = (value || "") === (situacao || "")
    return `<li class="${active ? "is-active" : ""}"><a href="${href}">${label}</a></li>`
  }
  const body = rows.length ? `<div class="table-container"><table class="table"><thead><tr><th>Número</th><th>Cliente</th><th>Empresa</th><th>Data</th><th>Situação</th><th></th></tr></thead><tbody>
    ${rows.map((item) => `<tr>
      <td><a href="#/propostas/${item.id}">${esc(item.number)}</a></td>
      <td>${esc(cliente(item.clienteId)?.name || "—")}</td>
      <td>${esc(empresa(item.empresaId)?.name || "—")}</td>
      <td>${dateBR(item.initialAt)}</td>
      <td><span class="tag">${esc(item.status)}</span></td>
      <td class="has-text-right"><div class="row-actions">
        <a class="button is-small is-icon" title="Ver" href="#/propostas/${item.id}">${icon("eye")}</a>
        <a class="button is-small is-icon" title="Editar" href="#/propostas/${item.id}/editar">${icon("pencil")}</a>
        <button class="button is-small is-icon" title="Duplicar" data-duplicate="${item.id}">${icon("copy")}</button>
      </div></td>
    </tr>`).join("")}
  </tbody></table></div>` : `<div class="box empty">Nenhuma proposta encontrada.</div>`
  return `<div class="level"><h1 class="title">Propostas</h1><a class="button is-primary" href="#/propostas/nova">${icon("plus")} Nova proposta</a></div>
    <div class="tabs"><ul>${tab("Todas", "")}${STATUSES.map((status) => tab(status[0].toUpperCase() + status.slice(1), status)).join("")}</ul></div>
    ${body}`
}

function propostaShow(id) {
  const item = db.propostas.find((proposta) => proposta.id === id)
  if (!item) return `<div class="box empty">Proposta não encontrada.</div>`
  const company = empresa(item.empresaId)
  const person = cliente(item.clienteId)
  const product = item.product
  const rows = (product.quantities || []).filter((faixa) => faixa.qtd && faixa.preco).map((faixa) => {
    const total = Number(String(faixa.qtd).replace(/\D/g, "")) * Number(String(faixa.preco).replace(",", "."))
    return `<tr><td>${esc(Number(faixa.qtd).toLocaleString("pt-BR"))}</td><td>R$ ${money(faixa.preco)}</td><td>R$ ${money(total)}</td></tr>`
  }).join("")
  const comps = (product.components || []).map((comp) => `<div class="cbox"><div class="n">${esc(comp.titulo)} <span class="s">${esc(comp.sub || "")}</span></div><div class="cspec">
    <div><div class="k">Medidas</div><div>${esc(comp.medidas)}</div></div>
    <div><div class="k">Sistema</div><div>${esc(comp.sistema)}</div></div>
    <div><div class="k">Material</div><div>${esc(comp.material)}</div></div>
    <div><div class="k">Onda</div><div>${esc(comp.onda)}</div></div>
  </div></div>`).join("")
  const pisCofins = (Number(company.pis) + Number(company.cofins)).toLocaleString("pt-BR")
  const fiscal = company.regime === "simples"
    ? `<div><div class="k">ICMS/PIS/COFINS</div><div>Inclusos conforme o regime (Simples Nacional)</div></div><div><div class="k">IPI</div><div>Não destacado</div></div>`
    : `<div><div class="k">ICMS</div><div>Incluso — ${esc(company.icms)}%</div></div><div><div class="k">PIS/COFINS</div><div>Incluso — ${esc(pisCofins)}%</div></div><div><div class="k">IPI</div><div>Não incluso — preço acima + IPI</div></div>`
  return `<div class="level no-print"><h1 class="title">${esc(item.number)}</h1><div class="actions">
      <a class="button is-small is-icon" title="Voltar" href="#/propostas">${icon("back")}</a>
      <a class="button is-small is-icon" title="Editar" href="#/propostas/${item.id}/editar">${icon("pencil")}</a>
      <button class="button is-small is-icon is-primary" title="Baixar PDF" id="print">${icon("download")}</button>
      <button class="button is-small is-icon" title="Duplicar" data-duplicate="${item.id}">${icon("copy")}</button>
    </div></div>
    <div class="paper-scroll"><article class="paper" style="--brand:${esc(company.color)}">
      <div class="ph"><div class="ph-name">${esc(company.name)}</div><div class="ph-right"><div class="ph-kind">Carta-proposta</div><div class="ph-no">Nº ${esc(item.number)}</div></div></div>
      <div class="ph-band"><span>${esc(company.division || company.name)}</span><span>${dateBR(item.initialAt)}</span></div>
      <div class="pbody">
        <div class="dest"><div class="fv">${esc(item.invoice || "FV")}</div><div><div class="nm">${esc(person?.name || "")}</div><div class="cnpj">${esc(person?.document || "")}</div></div></div>
        <div class="ac"><b>A/Sr(a).</b> ${esc(person?.contact || "")}</div>
        <div class="lede">${esc(item.lede || "")}</div>
        <div class="pinfo"><dl><dt>Produto</dt><dd>${esc(product.name)}</dd><dt>Referência</dt><dd>${esc(product.reference)}</dd><dt>Opção</dt><dd>${esc(product.option)}</dd><dt>Frete</dt><dd>${esc(product.shipping)}</dd></dl></div>
        <table class="qt"><thead><tr><th>Quantidade</th><th>Preço unitário</th><th>Total do pedido</th></tr></thead><tbody>${rows}</tbody></table>
        ${comps ? `<div class="sect">Composição técnica</div><div class="comps">${comps}</div>` : ""}
        <div class="cond" style="margin-top:18px"><div class="bar"><span class="k">Validade da proposta</span><span>${esc(item.validity)}</span></div><div class="bar"><span class="k">Condições de pagamento</span><span>${esc(item.payment)}</span></div></div>
        <div class="trib"><div>Tributações</div><div class="cols">${fiscal}</div></div>
        <div class="obs"><h3>Observações</h3><div class="u"></div><p>${esc(item.observations || "")}</p></div>
        <div class="rep"><div>Atenciosamente,</div><div class="r">${esc(item.representative)}<br>${esc(company.phone)}</div></div>
        <div class="sign"><div>Cliente</div><div>${esc(company.name)}</div></div>
      </div>
      <div class="pf"><span>${esc(company.name)} — ${esc(company.uf)}</span><span>Página 1/1</span></div>
    </article></div>`
}

function propostaForm(id) {
  const item = id ? db.propostas.find((proposta) => proposta.id === id) : null
  const companyId = item?.empresaId || db.empresas[0]?.id || ""
  const people = db.clientes.filter((person) => person.empresaId === companyId)
  const product = item?.product || { name: "", reference: "", option: "", shipping: "FOB", quantities: [{ qtd: "", preco: "" }, { qtd: "", preco: "" }, { qtd: "", preco: "" }] }
  const quantities = [...product.quantities]
  while (quantities.length < 3) quantities.push({ qtd: "", preco: "" })
  return `<div class="level"><h1 class="title">${item ? "Editar proposta" : "Nova proposta"}</h1></div>
    <form id="record-form">
      <div class="box"><h2 class="title is-5">Dados gerais</h2>
        <div class="grid grid-3">
          ${field("Empresa", `<select class="input" name="empresaId" id="empresaId">${options(db.empresas.map((row) => [row.id, row.name]), companyId)}</select>`)}
          ${field("Cliente", `<select class="input" name="clienteId" id="clienteId">${options(people.map((row) => [row.id, row.name]), item?.clienteId || "", "Selecione")}</select>`)}
          ${field("Data", `<input class="input" type="date" name="initialAt" value="${esc(item?.initialAt || new Date().toISOString().slice(0, 10))}">`)}
        </div>
        <div class="grid grid-3">
          ${field("Fatura", `<input class="input" name="invoice" value="${esc(item?.invoice || "")}">`)}
          ${field("Validade", `<input class="input" name="validity" value="${esc(item?.validity || "10 dias")}">`)}
          ${field("Situação", `<select class="input" name="status">${options(STATUSES.map((status) => [status, status[0].toUpperCase() + status.slice(1)]), item?.status || "aberta")}</select>`)}
        </div>
        ${field("Representante", `<input class="input" name="representative" value="${esc(item?.representative || empresa(companyId)?.representative || "")}">`)}
        ${field("Abertura", `<textarea class="textarea" name="lede">${esc(item?.lede || "Segue nossa proposta para as embalagens abaixo.")}</textarea>`)}
        ${field("Pagamento", `<input class="input" name="payment" value="${esc(item?.payment || "28 dias")}">`)}
        ${field("Observações", `<textarea class="textarea" name="observations">${esc(item?.observations || "")}</textarea>`)}
      </div>
      <div class="box"><h2 class="title is-5">Produto</h2>
        <div class="grid grid-2">
          ${field("Nome", `<input class="input" name="productName" required value="${esc(product.name)}">`)}
          ${field("Referência", `<input class="input" name="reference" value="${esc(product.reference)}">`)}
          ${field("Opção", `<input class="input" name="option" value="${esc(product.option)}">`)}
          ${field("Frete", `<input class="input" name="shipping" value="${esc(product.shipping)}">`)}
        </div>
        <p class="label">Faixas de quantidade e preço</p>
        ${quantities.slice(0, 3).map((faixa, index) => `<div class="qty">
          ${field("Quantidade", `<input class="input" name="qtd${index}" value="${esc(faixa.qtd)}">`)}
          ${field("Preço", `<input class="input" name="preco${index}" value="${esc(faixa.preco)}">`)}
        </div>`).join("")}
      </div>
      <div class="actions">
        <button class="button is-primary" type="submit">Salvar</button>
        <a class="button" href="${item ? `#/propostas/${item.id}` : "#/propostas"}">Cancelar</a>
      </div>
    </form>`
}

function clienteForm(id) {
  const item = id && id !== "editar" ? db.clientes.find((person) => person.id === id) : null
  if (id && id !== "novo" && !item) return `<div class="box empty">Cliente não encontrado.</div>`
  return `<div class="level"><h1 class="title">${item ? "Editar cliente" : "Novo cliente"}</h1></div>
    <form id="record-form"><div class="box">
      ${field("Nome", `<input class="input" name="name" required value="${esc(item?.name || "")}">`)}
      ${field("Empresa", `<select class="input" name="empresaId">${options(db.empresas.map((row) => [row.id, row.name]), item?.empresaId || db.empresas[0]?.id)}</select>`)}
      <div class="grid grid-2">
        ${field("Documento", `<input class="input" name="document" value="${esc(item?.document || "")}">`)}
        ${field("Telefone", `<input class="input" name="phone" value="${esc(item?.phone || "")}">`)}
      </div>
      <div class="grid grid-2">
        ${field("E-mail", `<input class="input" type="email" name="email" required value="${esc(item?.email || "")}">`)}
        ${field("Contato", `<input class="input" name="contact" value="${esc(item?.contact || "")}">`)}
      </div>
    </div>
    <div class="actions"><button class="button is-primary" type="submit">Salvar</button><a class="button" href="#/clientes">Cancelar</a></div></form>`
}

function empresaForm(id) {
  const item = id && id !== "editar" ? db.empresas.find((company) => company.id === id) : null
  if (id && id !== "nova" && !item) return `<div class="box empty">Empresa não encontrada.</div>`
  const regimes = [["presumido", "Presumido"], ["real", "Real"], ["simples", "Simples"]]
  return `<div class="level"><h1 class="title">${item ? "Editar empresa" : "Nova empresa"}</h1></div>
    <form id="record-form"><div class="box">
      <div class="grid grid-2">
        ${field("Nome", `<input class="input" name="name" required value="${esc(item?.name || "")}">`)}
        ${field("CNPJ", `<input class="input" name="document" required value="${esc(item?.document || "")}">`)}
        ${field("Divisão", `<input class="input" name="division" value="${esc(item?.division || "")}">`)}
        ${field("UF", `<input class="input" name="uf" maxlength="2" value="${esc(item?.uf || "")}">`)}
        ${field("Telefone", `<input class="input" name="phone" value="${esc(item?.phone || "")}">`)}
        ${field("E-mail", `<input class="input" type="email" name="email" value="${esc(item?.email || "")}">`)}
      </div>
      ${field("Site", `<input class="input" name="site" value="${esc(item?.site || "")}">`)}
      ${field("Representante", `<input class="input" name="representative" value="${esc(item?.representative || "")}">`)}
      ${field("Cor da marca", `<div class="color-row"><input type="color" name="color" value="${esc(item?.color || "#233240")}"><input class="input" name="colorText" value="${esc(item?.color || "#233240")}"></div>`)}
      <div class="grid grid-3">
        ${field("Regime", `<select class="input" name="regime">${options(regimes, item?.regime || "presumido")}</select>`)}
        ${field("ICMS %", `<input class="input" name="icms" value="${esc(item?.icms ?? 18)}">`)}
        ${field("PIS %", `<input class="input" name="pis" value="${esc(item?.pis ?? 1.65)}">`)}
        ${field("COFINS %", `<input class="input" name="cofins" value="${esc(item?.cofins ?? 7.6)}">`)}
        ${field("Margem %", `<input class="input" name="margem" value="${esc(item?.margem ?? 30)}">`)}
        ${field("Comissão %", `<input class="input" name="comissao" value="${esc(item?.comissao ?? 5)}">`)}
      </div>
      ${field("Observações", `<textarea class="textarea" name="observations">${esc(item?.observations || "")}</textarea>`)}
    </div>
    <div class="actions"><button class="button is-primary" type="submit">Salvar</button><a class="button" href="#/empresas">Cancelar</a></div></form>`
}

function perfilForm() {
  const admin = db.admin
  return `<h1 class="title" style="margin-bottom:18px">Meus dados</h1>
    <form id="record-form">
      <div class="box">
        ${field("Nome", `<input class="input" name="name" required value="${esc(admin.name)}">`)}
        ${field("Documento", `<input class="input" name="document" value="${esc(admin.document)}">`)}
        ${field("Telefone", `<input class="input" name="phone" value="${esc(admin.phone)}">`)}
        ${field("E-mail", `<input class="input" type="email" name="email" required value="${esc(admin.email)}">`)}
      </div>
      <div class="box">
        <h2 class="title is-5">Senha</h2>
        <p class="help">Preencha só se quiser trocar a senha.</p>
        ${field("Senha atual", `<input class="input" type="password" name="currentPassword" autocomplete="current-password">`)}
        ${field("Nova senha", `<input class="input" type="password" name="password" autocomplete="new-password">`)}
        ${field("Confirmar nova senha", `<input class="input" type="password" name="passwordConfirmation" autocomplete="new-password">`)}
      </div>
      <div class="actions"><button class="button is-primary" type="submit">Salvar</button><a class="button" href="#/propostas">Cancelar</a></div>
    </form>`
}

function clientesIndex() {
  const body = db.clientes.length ? `<div class="table-container"><table class="table"><thead><tr><th>Nome</th><th>Empresa</th><th>Documento</th><th>Contato</th><th></th></tr></thead><tbody>
    ${db.clientes.map((item) => `<tr>
      <td>${esc(item.name)}</td><td>${esc(empresa(item.empresaId)?.name || "—")}</td><td>${esc(item.document)}</td><td>${esc(item.contact)}</td>
      <td class="has-text-right"><div class="row-actions">
        <a class="button is-small is-icon" title="Editar" href="#/clientes/${item.id}/editar">${icon("pencil")}</a>
        <button class="button is-small is-icon is-danger" title="Remover" data-delete-cliente="${item.id}">${icon("trash")}</button>
      </div></td>
    </tr>`).join("")}
  </tbody></table></div>` : `<div class="box empty">Nenhum cliente encontrado.</div>`
  return `<div class="level"><h1 class="title">Clientes</h1><a class="button is-primary" href="#/clientes/novo">${icon("plus")} Novo cliente</a></div>${body}`
}

function empresasIndex() {
  const body = db.empresas.length ? `<div class="table-container"><table class="table"><thead><tr><th>Nome</th><th>CNPJ</th><th>Regime</th><th>UF</th><th></th></tr></thead><tbody>
    ${db.empresas.map((item) => `<tr>
      <td><span class="swatch" style="background:${esc(item.color)}"></span>${esc(item.name)}</td>
      <td>${esc(item.document)}</td><td><span class="tag">${esc(item.regime)}</span></td><td>${esc(item.uf)}</td>
      <td class="has-text-right"><div class="row-actions">
        <a class="button is-small is-icon" title="Editar" href="#/empresas/${item.id}/editar">${icon("pencil")}</a>
        <button class="button is-small is-icon is-danger" title="Remover" data-delete-empresa="${item.id}">${icon("trash")}</button>
      </div></td>
    </tr>`).join("")}
  </tbody></table></div>` : `<div class="box empty">Nenhuma empresa encontrada.</div>`
  return `<div class="level"><h1 class="title">Empresas</h1><a class="button is-primary" href="#/empresas/nova">${icon("plus")} Nova empresa</a></div>${body}`
}

function duplicate(id) {
  const item = db.propostas.find((proposta) => proposta.id === id)
  if (!item) return
  const copy = JSON.parse(JSON.stringify(item))
  copy.id = uid("p")
  copy.number = nextNumber(item.empresaId)
  copy.status = "aberta"
  copy.invoice = `${item.invoice || "FV"}-C`
  db.propostas.unshift(copy)
  save()
  flash("success", `Proposta duplicada como ${copy.number}.`)
  go("#/propostas")
}

function readForm(form) {
  return Object.fromEntries(new FormData(form).entries())
}

function bindScreen(parts) {
  document.querySelectorAll("[data-duplicate]").forEach((button) => {
    button.addEventListener("click", () => duplicate(button.dataset.duplicate))
  })
  document.querySelector("#print")?.addEventListener("click", () => window.print())
  document.querySelectorAll("[data-delete-cliente]").forEach((button) => {
    button.addEventListener("click", () => {
      const person = cliente(button.dataset.deleteCliente)
      if (!person || !confirm(`Remover ${person.name}?`)) return
      db.clientes = db.clientes.filter((item) => item.id !== person.id)
      db.propostas.forEach((proposta) => { if (proposta.clienteId === person.id) proposta.clienteId = "" })
      save()
      flash("success", "Cliente removido.")
      render()
    })
  })
  document.querySelectorAll("[data-delete-empresa]").forEach((button) => {
    button.addEventListener("click", () => {
      const company = empresa(button.dataset.deleteEmpresa)
      if (!company || !confirm(`Remover ${company.name}?`)) return
      if (db.propostas.some((item) => item.empresaId === company.id) || db.clientes.some((item) => item.empresaId === company.id)) {
        flash("danger", "Remova antes os clientes e as propostas desta empresa.")
        render()
        return
      }
      db.empresas = db.empresas.filter((item) => item.id !== company.id)
      save()
      flash("success", "Empresa removida.")
      render()
    })
  })

  const empresaSelect = document.querySelector("#empresaId")
  empresaSelect?.addEventListener("change", () => {
    const people = db.clientes.filter((person) => person.empresaId === empresaSelect.value)
    const select = document.querySelector("#clienteId")
    select.innerHTML = options(people.map((row) => [row.id, row.name]), "", "Selecione")
    const company = empresa(empresaSelect.value)
    const rep = document.querySelector("[name=representative]")
    if (company && rep && !rep.value) rep.value = company.representative
  })

  const form = document.querySelector("#record-form")
  if (!form) return
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const data = readForm(form)
    const [area, id] = parts
    if (area === "perfil") return savePerfil(data)
    if (area === "clientes") return saveCliente(id === "novo" ? null : id, data)
    if (area === "empresas") return saveEmpresa(id === "nova" ? null : id, data)
    if (area === "propostas") return saveProposta(id === "nova" ? null : id, data)
  })
}

function savePerfil(data) {
  if (data.password) {
    if (data.currentPassword !== db.admin.password) {
      flash("danger", "A senha atual não confere.")
      render()
      return
    }
    if (data.password !== data.passwordConfirmation) {
      flash("danger", "A confirmação da senha não confere.")
      render()
      return
    }
    db.admin.password = data.password
  }
  db.admin.name = data.name.trim()
  db.admin.document = data.document.trim()
  db.admin.phone = data.phone.trim()
  db.admin.email = data.email.trim()
  save()
  flash("success", "Dados atualizados.")
  go("#/perfil")
}

function saveCliente(id, data) {
  const record = {
    id: id || uid("c"),
    empresaId: data.empresaId,
    name: data.name.trim(),
    document: data.document.trim(),
    phone: data.phone.trim(),
    email: data.email.trim(),
    contact: data.contact.trim()
  }
  if (id) db.clientes = db.clientes.map((item) => item.id === id ? record : item)
  else db.clientes.push(record)
  save()
  flash("success", id ? "Cliente atualizado." : "Cliente criado.")
  go("#/clientes")
}

function saveEmpresa(id, data) {
  const current = id ? empresa(id) : {}
  const record = {
    ...current,
    id: id || uid("e"),
    name: data.name.trim(),
    document: data.document.trim(),
    division: data.division.trim(),
    uf: data.uf.trim().toUpperCase(),
    phone: data.phone.trim(),
    email: data.email.trim(),
    site: data.site.trim(),
    representative: data.representative.trim(),
    color: data.color,
    regime: data.regime,
    icms: Number(data.icms) || 0,
    pis: Number(data.pis) || 0,
    cofins: Number(data.cofins) || 0,
    margem: Number(data.margem) || 0,
    comissao: Number(data.comissao) || 0,
    observations: data.observations.trim()
  }
  if (id) db.empresas = db.empresas.map((item) => item.id === id ? record : item)
  else db.empresas.push(record)
  save()
  flash("success", id ? "Empresa atualizada." : "Empresa criada.")
  go("#/empresas")
}

function saveProposta(id, data) {
  if (!data.productName.trim()) return
  const quantities = [0, 1, 2].map((index) => ({
    qtd: String(data[`qtd${index}`] || "").trim(),
    preco: String(data[`preco${index}`] || "").trim()
  })).filter((faixa) => faixa.qtd || faixa.preco)
  const current = id ? db.propostas.find((item) => item.id === id) : null
  const record = {
    id: id || uid("p"),
    number: current?.number || nextNumber(data.empresaId),
    empresaId: data.empresaId,
    clienteId: data.clienteId,
    invoice: data.invoice.trim(),
    initialAt: data.initialAt,
    status: data.status,
    validity: data.validity.trim(),
    payment: data.payment.trim(),
    representative: data.representative.trim(),
    lede: data.lede.trim(),
    observations: data.observations.trim(),
    product: {
      name: data.productName.trim(),
      reference: data.reference.trim(),
      option: data.option.trim(),
      shipping: data.shipping.trim(),
      quantities,
      components: current?.product?.components || []
    }
  }
  if (id) db.propostas = db.propostas.map((item) => item.id === id ? record : item)
  else db.propostas.unshift(record)
  save()
  flash("success", id ? "Proposta atualizada." : "Proposta criada.")
  go(`#/propostas/${record.id}`)
}

window.addEventListener("hashchange", render)
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileOpen) {
    mobileOpen = false
    render()
  }
})

if (!location.hash) location.replace(signedIn() ? "#/propostas" : "#/entrar")
render()
