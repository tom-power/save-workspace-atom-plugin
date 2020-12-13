'use babel'

import { CompositeDisposable } from 'atom'
import OpenCommand from './commands/open'
import SaveCommand from './commands/save'
import SaveCurrentCommand from './commands/saveCurrent'
import RemoveCommand from './commands/remove'

export default {

  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable()

    this.openCommand = new OpenCommand()
    this.saveCommand = new SaveCommand()
    this.saveCurrentCommand = new SaveCurrentCommand()
    this.removeCommand = new RemoveCommand()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'save-workspace:save': () => this.saveCommand.execute(),
      'save-workspace:save-current': () => this.saveCurrentCommand.execute(),
      'save-workspace:open': () => this.openCommand.execute(),
      'save-workspace:remove': () => this.removeCommand.execute(),
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  serialize() {
    return {}
  },
}
