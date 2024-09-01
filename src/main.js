import {expandTools, waitForDOMLoading} from './utils';

waitForDOMLoading(onDocumentLoaded);

function onDocumentLoaded() {
    expandTools();
}

