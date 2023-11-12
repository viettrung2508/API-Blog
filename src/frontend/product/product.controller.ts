import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get('list')
  async getListsProducts() {
    return 'hellog produc';
  }
}
