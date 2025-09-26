import { Controller, Post, Body } from '@nestjs/common';
import * as fs from 'fs/promises'; // Для записи в файл

@Controller('form')
export class AppController {
  @Post('a')
  async createFormA(@Body() data: any) {
    console.log('Form A data:', data); // Вывод в консоль
    await fs.appendFile('forms.log', `Form A: ${JSON.stringify(data)}\n`); // Запись в файл
    if (Math.random() < 0.2) return { error: 'Ошибка на сервере' };
    return { requestId: this.generateId(data), classifier: 'classifier-a' };
  }

  @Post('b')
  async createFormB(@Body() data: any) {
    console.log('Form B data:', data);
    await fs.appendFile('forms.log', `Form B: ${JSON.stringify(data)}\n`);
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
