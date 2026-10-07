/**
 * ViaUrbana - Guia de Rotas de Entradas
 * Application Logic & Media Integration
 */

// Route Data extracted from TESTE.pdf
const ROUTES_DATA = [
  { id: 'caca-e-pesca', title: 'ENTRADA CAÇA E PESCA', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1yp0fluPc6SVDOANzQt3zxB4STy8DwZb7/view?usp=sharing', icon: 'fa-bus' },
  { id: 'l-redonda-855', title: 'ENTRADA L REDONDA 855', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1yhZtKNK7HJ3hZou82KdIRC7IcZy3AWND/view?usp=sharing', icon: 'fa-bus' },
  { id: 'abreulandia', title: 'ENTRADA ABREULÂNDIA', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1v-ixfY_3tepC_sz2RgQZ4zjzpxqboGb8/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'terra-e-mar', title: 'ENTRADA TERRA E MAR', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1uy_QWOCZmr8o5_PEyznhYjSOOpNJwAUj/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'lagoa', title: 'ENTRADA LAGOA', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1tIAC736o6WiqPLFtbJ9-rUSQ0BZ3qb0h/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'messejana', title: 'ENTRADA MESSEJANA', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1lO59KsRD4oFouVBskE93kyxfE38xQSrw/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'barro-duro', title: 'ENTRADA BARRO DURO', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1kG3qhukA19QNiasuKX4qJ9Vwi4WFbd1m/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'papicu-velho', title: 'ENTRADA PAPICU VELHO', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1k9dNtoL3IiOD8hPiN7V-YrVHadit-eYy/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'upa', title: 'ENTRADA UPA', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1jmB9l6hkPgjVheqp-LnejGLC0MmBRMNN/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'parangaba', title: 'ENTRADA PARANGABA', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1fH_C7FH0Qj0hr_FKu1qCQfTrGuyKTP5Q/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'faece', title: 'ENTRADA FAECE', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1d4jC9F5d0ywvWtCMFXHiGI35iUOZrttD/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'siqueira', title: 'ENTRADA SIQUEIRA', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1bSVHkn-PGENqTmFQNRYvXcfGbzXPbxpE/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'm-lisboa-626', title: 'ENTRADA M LISBOA 626', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1Z-IYnKGYRK8MJsG98Oi-FPdg63lD4X2N/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'ant-bezerra', title: 'ENTRADA ANT BEZERRA', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1WteTFmlU4_fh9Rx1cQNPyUgb_e92QRx0/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'fic', title: 'ENTRADA FIC', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1U4lwp_SRgfZy1h-SO72veMf1HP4T1nLo/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'papicu-novo', title: 'ENTRADA PAPICU NOVO', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1TXp77XIBbx00ZPgN9EvzBJq9fjp-n5d5/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'alvorada', title: 'ENTRADA ALVORADA', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1NIRDazPVhTEmJqYXoFMrQ1Crh88wf_ek/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'opaia', title: 'ENTRADA OPAIA', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1G8pubAGtBAQXCCfKWvepJERAZs-pB3Ur/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'mini-terminal', title: 'ENTRADA MINI TERMINAL W. SOARES', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1DuU4aKu3YmunrRzGkgvaG2omRokwL79K/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'cid-2000', title: 'ENTRADA CID 2000', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/1B_yLaP4tTeL4F4k-dz7W-5AJbpNqMNsB/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'ed-queiroz', title: 'ENTRADA ED QUEIROZ', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/17iodEmTbFmT1-1u7b8h4dv2IykwP9ra5/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rio-mar-kennedy', title: 'ENTRADA RIO MAR KENNEDY', type: 'entrada', driveUrl: 'https://drive.google.com/file/d/14l36QrkA1cTkUJQLTWzAJK8RH0k4jalD/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-barro-duro', title: 'RECOLHIMENTO BARRO DURO', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1zVqmHa3E0zSeMg5JqTLGFeqBsUPPUpJi/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-lagoa-redonda-627', title: 'RECOLHIMENTO LAGOA REDONDA 627', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1nsV-a_P4HNSn8L2ypgmlJt9EHtf5dViI/view?usp=sharing', icon: 'fa-bus' },
  { id: 'rec-terra-e-mar-804', title: 'RECOLHIMENTO TERRA E MAR 804', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1p8pNZkdaHerGv3TAYDrPNE19OCAbKPQD/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-faece', title: 'RECOLHIMENTO FAECE', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1l7QQuX8IXddaIptTueCSDD97upflDL-k/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-opaia', title: 'RECOLHIMENTO OPAIA', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1ivsgQ5EAJx5fqXZIxJjK9sEPG9xdt-rG/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-rio-mar-papicu', title: 'RECOLHIMENTO RIO MAR PAPICU', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1emcTUmlgHvqWLhrpzNAk1NczrRgy1pwJ/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-abreulandia', title: 'RECOLHIMENTO ABREULÂNDIA', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1eJpw3d7wVCq8YvodyghCLbH7Eb5BZuIm/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-ant-bezerra', title: 'RECOLHIMENTO ANT BEZERRA', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1dd1vd5Z3KWARATpmpNTL0hO9sCwSswAf/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-cais-do-porto', title: 'RECOLHIMENTO CAIS DO PORTO', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1__TMMKN8ev-RLN4xy02IC_jugKv821f_/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-parangaba', title: 'RECOLHIMENTO PARANGABA', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1Spu8Nd2x_7lDa9DHWsi26ukHKpyG5asr/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-papicu-terminal-novo', title: 'RECOLHIMENTO PAPICU TERMINAL NOVO', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1Pnx36knQF7Dd-pIjHRqauRMNpg1KdOsB/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-ed-queiroz', title: 'RECOLHIMENTO ED QUEIROZ', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1OzQ5Vx8Hv9wjz9CgKPwe4EyykzJlPcpW/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-rio-mar-kennedy', title: 'RECOLHIMENTO RIO MAR KENNEDY', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1MjFyP9OUKlubi888FzYQwMi7QxTbmFRk/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-messejana', title: 'RECOLHIMENTO MESSEJANA', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1HaqOmZCxuTfXPttF3CE3A4KOXUE_OrU8/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-mini-terminal-w-soares', title: 'RECOLHIMENTO MINI TERMINAL W. SOARES', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1FGGwPYvO1-lt9a4i0nTSpV1Kq4kmA3Ch/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-lagoa-redonda-855', title: 'RECOLHIMENTO LAGOA REDONDA 855', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1CdR3_Q22ESDqE_hv9CRGHhfcnfihSR_5/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-papicu-terminal-velho', title: 'RECOLHIMENTO PAPICU TERMINAL VELHO', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1CAFRQqAGBN3OkA58K1s9U6imBnkDvneJ/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-caca-e-pesca', title: 'RECOLHIMENTO CAÇA E PESCA', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/19eTe5UdM6pWzkD0rV5mJVQBkh6dHvnDD/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-alvorada', title: 'RECOLHIMENTO ALVORADA', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/16gNY6tuoiRzhuKIGXYy6Hb4zpBDzdDgL/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-siqueira', title: 'RECOLHIMENTO SIQUEIRA', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/14YefHeYQ_4a7Ubxp1m7GaAyrFub8Uva_/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-cid-2000', title: 'RECOLHIMENTO CID 2000', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1439oyAtsVNECYvC2Gd3dhn2-gFREYIio/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-lagoa', title: 'RECOLHIMENTO LAGOA', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/13IW1dXHOtayFC5FTE6tCRgfnZ7Nlsg1o/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-upa-p-futuro', title: 'RECOLHIMENTO UPA P. FUTURO', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/11orRLiavFxpGOa4Ymamu6uEjbxisIjPw/view?usp=drive_link', icon: 'fa-bus' },
  { id: 'rec-fic', title: 'RECOLHIMENTO FIC', type: 'recolhimento', driveUrl: 'https://drive.google.com/file/d/1-nnvl63Nwsc4Lq7yguGHhEHnjX1qq3rz/view?usp=drive_link', icon: 'fa-bus' }
];

// App State
let currentTab = 'entrada';
let searchQuery = '';

const tabBtns = document.querySelectorAll('.tab-btn');

// DOM Elements
const routesGrid = document.getElementById('routes-grid');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const noResultsState = document.getElementById('no-results');
const themeToggleBtn = document.getElementById('theme-toggle');



// Toast Container
const toastContainer = document.getElementById('toast-container');

/* ==========================================================================
   HELPER FUNCTIONS
   ========================================================================== */



/**
 * Shows a toast notification message
 */
function showToast(message, iconClass = 'fa-circle-check') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideToast 0.3s ease-out reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/**
 * Copies text to clipboard with feedback
 */
function copyToClipboard(text, routeTitle) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Link para "${routeTitle}" copiado!`, 'fa-copy');
  }).catch(() => {
    showToast('Erro ao copiar link.', 'fa-triangle-exclamation');
  });
}

/* ==========================================================================
   RENDER FUNCTIONS
   ========================================================================== */

/**
 * Renders Route Cards in Grid
 */
function renderCards(routes) {
  routesGrid.innerHTML = '';

  if (routes.length === 0) {
    noResultsState.classList.remove('hidden');
    return;
  }
  noResultsState.classList.add('hidden');

  routes.forEach(route => {
    const card = document.createElement('div');
    card.className = 'route-card';

    card.innerHTML = `
      <div class="card-content-wrapper" tabindex="0" role="button" title="Assistir vídeo">
        <div class="card-header-row">
          <div class="card-icon"><i class="fa-solid ${route.icon}"></i></div>
        </div>
        <h3 class="card-title">${route.title}</h3>
        <div class="card-hint">
          <i class="fa-solid fa-play-circle"></i> Assistir
        </div>
      </div>
    `;

    // Event listeners for card interaction
    card.querySelector('.card-content-wrapper').addEventListener('click', () => {
      window.open(route.driveUrl, '_blank', 'noopener,noreferrer');
    });

    card.querySelector('.card-content-wrapper').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(route.driveUrl, '_blank', 'noopener,noreferrer');
      }
    });

    routesGrid.appendChild(card);
  });
}



/**
 * Filter & Search Logic
 */
function filterRoutes() {
  const normalizedQuery = searchQuery.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filtered = ROUTES_DATA.filter(route => {
    const normalizedTitle = route.title.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // Search Query Match (ignoring accents)
    return route.type === currentTab && normalizedTitle.includes(normalizedQuery);
  });

  renderCards(filtered);
}



/* ==========================================================================
   EVENT LISTENERS & INITIALIZATION
   ========================================================================== */

// Search Input Listener
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  if (searchQuery.length > 0) {
    clearSearchBtn.classList.add('visible');
  } else {
    clearSearchBtn.classList.clearSearchBtn?.classList.remove('visible');
    clearSearchBtn.classList.remove('visible');
  }
  filterRoutes();
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.classList.remove('visible');
  filterRoutes();
});

// Theme Switcher (Dark/Light Mode)
function initTheme() {
  const savedTheme = localStorage.getItem('viaurbana-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('viaurbana-theme', newTheme);
});

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  // Ordenar as rotas alfabeticamente ignorando a palavra inicial (Entrada/Recolhimento)
  ROUTES_DATA.sort((a, b) => {
    const nameA = a.title.replace(/^(ENTRADA|RECOLHIMENTO)\s+/i, '').trim();
    const nameB = b.title.replace(/^(ENTRADA|RECOLHIMENTO)\s+/i, '').trim();
    return nameA.localeCompare(nameB, 'pt-BR');
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      filterRoutes();
    });
  });
  initTheme();
  filterRoutes();
});
