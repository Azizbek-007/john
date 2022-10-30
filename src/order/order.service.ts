import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios'
import { map } from 'rxjs';
import { Members } from '../entity/Members';
import { Product } from '../entity/Product';
import { Category } from '../entity/Category';
import { Orders } from '../entity/Statistika';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Members)
    private readonly membersRepos: Repository<Members>,
    @InjectRepository(Product)
    private readonly productRespos: Repository<Product>,
    @InjectRepository(Orders)
    private readonly OrdersRep: Repository<Orders>,
    private readonly httpService: HttpService,
  ) {}

  async SendChannel (body: object) {

    var TEXT= "";
    var summa = 0;
    const phone_number =  (await this.membersRepos.findOneBy({user_id: body['user_id']}));

    for await (const iterator of  body['orders']) {
      const ProductName = (await this.productRespos.findOne({
        where: {
          id: iterator.product_id
        },
        relations: {
          category:  true 
        }
      })); 
      const category_name = JSON.parse(JSON.stringify(ProductName.category)).name
      TEXT += `${category_name} ${ProductName.name} ${iterator.count}X - ${iterator.price}\n`
      summa = + Number(summa) + Number(iterator.price) 
    }


    TEXT += `\nsumma: ${summa}\ntel: ${phone_number.phone_number}`
    console.log(TEXT)

    const UserOrder = await this.OrdersRep.save(
      this.OrdersRep.create({
        product_name: TEXT,
        user_id: String(body['user_id'])
      })
    );
    let lang_text = {
      "text": {
        "qq": "Буйыртпаны қай тәризде алыуды қәлейсиз:",
        "ru":  "Как вы предпочитайте получить ваш заказ?",
        "uz": "Buyurtmani qay tarizda olishni hohlaysiz:"
      },
      "awa": {
        "qq": "Жеткизип бериу арқалы",
        "ru": "С помощью доставки",
        "uz": "Yetkazib berish",
      },
      "yaq": {
        "qq": "Өзим барып алып кетемен",
        "ru": "Сам(а) заберу",
        "uz": "O’zim boraman",
      },
      "cancel": {
        "qq": "Бийкарлау",
        "ru": "Отмена",
        "uz": "Bekor qilish",
      }
    }
    const user_lang = phone_number.lang;
    const keyboard = {
      resize_keyboard: true,
      inline_keyboard: [
        [
          { text: lang_text['awa'][user_lang].toString(), callback_data: `OrderID=${UserOrder.id}` }
        ],
        [
          { text: lang_text['yaq'][user_lang].toString(), callback_data: `OrrderNo=${UserOrder.id}` }
        ],
        [
          { text: lang_text['cancel'][user_lang].toString(), callback_data: "otmen"}
        ],
      ],
    };

    const key = JSON.stringify(keyboard);
    // const url1 = `https://api.telegram.org/bot${
    //   process.env.BOT_TOKEN
    // }/sendmessage?chat_id=${  
    //   body['user_id']
    // }&text=${TEXT}`;

    // axios.get(url1)
    // .then(function (response) {
    //   // handle success
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .finally(function () {
    //   // always executed
    // });

    // this.httpService.get(encodeURI(url1), ).pipe(map((resp) => resp.data));

    const url = `https://api.telegram.org/bot${
      process.env.BOT_TOKEN
    }/sendmessage?chat_id=${ 
      body['user_id']
    }&text=${lang_text['text'][user_lang].toString()}&reply_markup=${key}&parse_mode=markdown`;
    axios.get(encodeURI(url))
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    // return ok;
  } 

  async SendLocationMessage (user_id: string) {
    const message = 'locatsiya jiberin'
    const keyboard = {
      "resize_keyboard": true,
      "keyboard": [
        [
          {
            "text": "Lokatsiya jiberiw",
            "request_location": true
          }
        ]
      ]
    }

    const url = `https://api.telegram.org/bot${
      process.env.BOT_TOKEN
    }/sendmessage?chat_id=${
      user_id
    }&text=${
      message
    }&reply_markup=${
     JSON.stringify(keyboard)
    }&parse_mode=markdown`;
    console.log(url)
    const ok = this.httpService.get(url).pipe(map((resp) => resp.data));

    return ok;

  }
}

