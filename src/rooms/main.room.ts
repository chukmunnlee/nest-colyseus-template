import {Client, Room} from "colyseus";

export class MainRoom extends Room {

	constructor() { 
		super()
	}

	async onCreate(options: any) {
		console.info('Main room created: ', options)
	}

	async onJoin(client: Client, options: any) {
		console.info(`Client ${client.sessionId} joined`)
	}

	async onLeave(client: Client, options: any) {
		console.info(`Client ${client.sessionId} left`)
	}

	async onDispose() {
	}

}
