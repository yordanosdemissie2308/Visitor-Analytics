import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';


@WebSocketGateway({ cors: true })
export class AnalyticsGateway {
@WebSocketServer()
server: Server;


broadcastNewVisit(data: any) {
this.server.emit('new-visit', data);
}
}