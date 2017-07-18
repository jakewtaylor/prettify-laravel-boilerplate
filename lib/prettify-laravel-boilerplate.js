'use babel';

import { CompositeDisposable } from 'atom';

export default {
    subscriptions: null,

    activate (state) {
        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
        this.subscriptions = new CompositeDisposable();

        // Register command that toggles this view
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'prettify-laravel-boilerplate:prettify': this.format,
        }));
    },

    deactivate () {
        this.subscriptions.dispose();
    },

    format () {
        // Get Editor
        const editor = atom.workspace.getActiveTextEditor();

        // Get file contents
        const text = editor.getText()
                        // Put space before function parentheses
                        .replace(/(\w)\(/g, '$1 (')
                        // Put curly brace on same line as function declaration with space
                        .replace(/\)[\s]\{*/g, ') {')
                        // Put curly brace on same line as class declaration with space
                        .replace(/(\w)[\s]*\{/g, '$1 {')
                        // Remove doc-block comments
                        .replace(/\n? *\/\*\*[^\/]*\//g, '');

        // Replace file contents
        editor.setText(text);
    }
};
