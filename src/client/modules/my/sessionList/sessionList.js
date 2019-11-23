import { LightningElement, track } from 'lwc';
import { getSessions } from 'data/sessionService';
export default class SessionList extends LightningElement {
    @track sessions = [];
    connectedCallback() {
        getSessions().then(result => {
            this.sessions = this.allSessions = result;
        });
    }
    handleSessionClick(event) {
        const index = event.currentTarget.dataset.index;
        const navigateEvent = new CustomEvent('navigate', {
            detail: this.sessions[index].id
        });
        this.dispatchEvent(navigateEvent);
    }
}
