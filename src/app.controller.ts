import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
	constructor() {}

	@Get()
	index(): string {
		return `Welcome ${new Date()}`
	}
}
