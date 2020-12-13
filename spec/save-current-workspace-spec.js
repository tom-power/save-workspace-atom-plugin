'use babel';

import SaveWorkspaceAtomPlugin from '../lib/save-workspace';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('SaveWorkspaceAtomPlugin', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('save-workspace');
  });

  describe('when the save-workspace-atom-plugin:save-current event is triggered', () => {
    it('hides and shows the modal panel with current workspace', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.select-list')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'save-workspace:save-current');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        let saveWorkspaceAtomPluginElement = workspaceElement.querySelector('.select-list');
        expect(saveWorkspaceAtomPluginElement).toExist();

        // let saveWorkspaceAtomPluginPanel = atom.workspace.panelForItem(saveWorkspaceAtomPluginElement);
        // expect(saveWorkspaceAtomPluginPanel).toExist();
        // expect(saveWorkspaceAtomPluginPanel.isVisible()).toBe(true);
      });
    });
  });
});