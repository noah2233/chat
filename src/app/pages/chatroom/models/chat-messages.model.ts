import { Observable } from 'rxjs';

export class ChatMessage {
    $key?: string;
    email?: string;
    userName?: Observable<string>;
    message?: string;
    timeSent?: Date = new Date();
}
