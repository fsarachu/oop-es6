import BaseElement from './BaseElement';

export default class TitleBar extends BaseElement {

  constructor(title, links) {
    super();
    this._title = title;
    this._links = links || [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get links() {
    return this._links;
  }

  set links(value) {
    this._links = value;
  }

  getElementString() {
    let linksString = '';

    for (let link of this.links) {
      if (!link.icon) {
        linksString += `<a class="mdl-navigation__link" href="${link.url}">${link.title}</a>`;
      } else {
        linksString += `<a class="mdl-navigation__link" href="${link.url}"><span class="material-icons">${link.icon}</span> ${link.title}</a>`;
      }
    }

    return `
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">${this.title}</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
            ${linksString}
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">${this.title}</span>
          <nav class="mdl-navigation">
          ${linksString}
          </nav>
        </div>
        <main class="mdl-layout__content">
          <div class="page-content"><!-- Your content goes here --></div>
        </main>
      </div>
    `;
  }

  addLink(title, url, icon) {
    this.links.push({title, url, icon});
  }
}
