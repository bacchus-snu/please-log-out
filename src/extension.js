const Main = imports.ui.main;
const Lang = imports.lang;
const system = Main.panel.statusArea['aggregateMenu']._system;
const actor = system._actionsItem.actor;
const BoxPointer = imports.ui.boxpointer;

let logOutAction;

function _onLogOutClicked() {
  this.menu.itemActivated();
  Main.overview.hide();
  this._session.LogoutRemote(0);
}

function init() {
  logOutAction = system._createActionButton('system-log-out-symbolic', _("Log Out"));
  logOutAction.connect('clicked', () => {
    system.menu.itemActivated(BoxPointer.PopupAnimation.NONE);
    system._systemActions.activateLogout();
  });
}

function enable() {
  actor.add(logOutAction, { expand: true, x_fill: false });
  actor.remove_actor(system._settingsAction);
  actor.remove_actor(system._lockScreenAction);
  actor.remove_actor(system._altSwitcher.actor);
}

function disable() {
  actor.remove_actor(logOutAction);
  actor.add(system._settingsAction, { expand: true, x_fill: false });
  actor.add(system._lockScreenAction, { expand: true, x_fill: false });
  actor.add(system._altSwitcher.actor, { expand: true, x_fill: false });
}
