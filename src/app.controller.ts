import { Controller, Post, Body } from '@nestjs/common';

@Controller('form')
export class AppController {
  @Post('a')
  createFormA(@Body() data: any) {
    console.log('Form A data:', data); // Только консоль
    if (Math.random() < 0.2) return { error: 'Ошибка на сервере' };
    return { requestId: this.generateId(data), classifier: 'classifier-a' };
  }

  @Post('b')
  createFormB(@Body() data: any) {
    console.log('Form B data:', data);
    if (Math.random() < 0.2) return { error: 'Ошибка на сервере' };
    return { requestId: this.generateId(data), classifier: 'classifier-b' };
  }

  private generateId(data: any): string {
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash).toString(36);
  }
}
