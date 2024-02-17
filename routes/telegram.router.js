const express = require("express");
const config = require("../config");
const TelegramBot = require("node-telegram-bot-api");
const e = require("express");
const router = express.Router({ mergeParams: true });

const bot = new TelegramBot(config.botAPI, {
  polling: {
    interval: 300,
    autoStart: true,
  },
});

const sendError = async (chatId) => {
  await bot.sendMessage(
    chatId,
    "Бля игорь прости у меня поломался бот. Повторите попытку позже. Interval server error. code:404"
  );
};

const sendQuestion1 = async (chatId) => {
  const question = "Какое главное правило нашей компании?";
  const options = [
    [{ text: "Хуесосить леху", callback_data: "0_1" }],
    [{ text: "Занимать очередь на пасик", callback_data: "1_1" }],
    [{ text: "Всем вместе ходить на лыжи", callback_data: "2_1" }],
    [{ text: "После школы в пятак идем дружненько", callback_data: "3_1" }],
  ];

  const keyboard = {
    inline_keyboard: options,
  };

  try {
    await bot.sendMessage(chatId, question, { reply_markup: keyboard });
  } catch (error) {
    console.error("Ошибка при отправке вопроса:", error);
  }
};

const sendQuestion2 = async (chatId) => {
  const question = "Найди лишнюю технологию (с подвохом).";
  const options = [
    [{ text: "Энвилоуп", callback_data: "0_2" }],
    [{ text: "1С Бигдилдо", callback_data: "1_2" }],
    [
      {
        text: "Вычисления на кишечных палочках",
        callback_data: "2_2",
      },
    ],
    [{ text: "ALGOL 58", callback_data: "3_2" }],
    [{ text: "ЭВМ", callback_data: "4_2" }],
  ];

  const keyboard = {
    inline_keyboard: options,
  };

  try {
    await bot.sendMessage(chatId, question, { reply_markup: keyboard });
  } catch (error) {
    console.error("Ошибка при отправке вопроса:", error);
  }
};

const sendQuestion3 = async (chatId) => {
  const question =
    "какой долбаеб (уебище) решил проверить огнетушитель на работоспособность";
  const options = [
    [{ text: "Энвилоуп", callback_data: "0_3" }],
    [{ text: "Майкл джордан", callback_data: "1_3" }],
    [
      {
        text: "aLeX",
        callback_data: "2_3",
      },
    ],
    [{ text: "машА", callback_data: "3_3" }],
    [{ text: "Денис лондон", callback_data: "4_3" }],
    [{ text: "каркарыч", callback_data: "5_3" }],
  ];

  const keyboard = {
    inline_keyboard: options,
  };

  try {
    await bot.sendMessage(chatId, question, { reply_markup: keyboard });
  } catch (error) {
    console.error("Ошибка при отправке вопроса:", error);
  }
};

const sendQuestion4 = async (chatId) => {
  const question = "Какой рост самый классный";
  const options = [
    [{ text: "сосательный", callback_data: "0_4" }],
    [{ text: "метр300", callback_data: "1_4" }],
    [
      {
        text: "13 центнеров",
        callback_data: "2_3",
      },
    ],
    [{ text: "рост игоря", callback_data: "3_4" }],
    [{ text: "майкл джордан", callback_data: "4_4" }],
    [{ text: "от земли до бетельгейзе", callback_data: "5_4" }],
  ];

  const keyboard = {
    inline_keyboard: options,
  };

  try {
    await bot.sendMessage(chatId, question, { reply_markup: keyboard });
  } catch (error) {
    console.error("Ошибка при отправке вопроса:", error);
  }
};

const sendQuestion5 = async (chatId) => {
  const question =
    'Вопрос от твоей рабыни:\n "Игорь, как ты думаешь, если бы создавали "мужскую берлогу" на 1С Битрикс с функцией энвилоуп для обмена сообщениями и местом для хранения башмаков рядом с влагалищем, это стало бы популярным сервисом?"';
  const options = [
    [
      {
        text: "Будет хитом для мужчин!",
        callback_data: "0_5",
      },
    ],
    [
      {
        text: "Не привлечёт аудиторию.",
        callback_data: "1_5",
      },
    ],
    [
      {
        text: "Заинтересует только нишу.",
        callback_data: "2_5",
      },
    ],
    [{ text: "Энвилоуп", callback_data: "3_5" }],
    [
      {
        text: "Противоречит правилам 1С Битрикс.",
        callback_data: "4_5",
      },
    ],
  ];

  const keyboard = {
    inline_keyboard: options,
  };

  try {
    await bot.sendMessage(chatId, question, { reply_markup: keyboard });
  } catch (error) {
    console.error("Ошибка при отправке вопроса:", error);
  }
};

const sendFalseAnswerText = async (chatId) => {
  await bot.sendMessage(chatId, "э бля неправильно, соберись, ковбой");
};

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    await bot.sendPhoto(chatId, "https://ibb.co/z5ctr8q");
    await bot.sendMessage(
      chatId,
      "Стоять, ковбой! *притянул тебя за лассо, удар по банджо*\n  Кто уже может смотреть фильмы для взрослых?\n  Мы с друзьями приготовили тестирование (не на весь урок и не на оценку), пройдя которое ты получишь или хуем по лбу или 5 подарков\n  Удачи, чемпион! *воодушевляющая музыка*"
    );

    await bot.sendMessage(chatId, 'Напиши "бульбулятор", когда будешь готов.');
  } catch (error) {
    await sendError(chatId);
  }
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  if (msg.text.toLowerCase() === "бульбулятор") await sendQuestion1(chatId);
  else if (msg.text.toLowerCase() === "башмак") await sendQuestion2(chatId);
  else if (msg.text.toLowerCase() === "бугульма") await sendQuestion3(chatId);
  else if (msg.text.toLowerCase() === "брынза") await sendQuestion4(chatId);
  else if (msg.text.toLowerCase() === "авоська") {
    await bot.sendPhoto(chatId, "https://ibb.co/d5mjZPK");
    await sendQuestion5(chatId);
  } else {
    if (msg.text !== "/start")
      await bot.sendMessage(chatId, "игорь посмотри в телефон и на клавиатуру");
  }
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const answer = query.data[0];
  const questionNumber = query.data[2];

  if (questionNumber === "1") {
    if (answer === "1") {
      await bot.sendPhoto(
        chatId,
        "https://demotions.ru/uploads/posts/2022-12/1671632839_Obratite-vnimanie-na_demotions.ru.jpg"
      );
      setTimeout(
        async () =>
          await bot.sendMessage(
            chatId,
            "боже игорь ты апофеоз интеллекта. ты и есть разум!"
          ),
        1000
      );

      setTimeout(
        async () =>
          await bot.sendMessage(
            chatId,
            "ты выигрываешь первый подарок!!! *овации, эякуляции*\n Чтобы его забрать сделай сигму"
          ),
        1500
      );

      setTimeout(
        async () => await bot.sendMessage(chatId, 'напиши "башмак"'),
        3000
      );
    } else {
      await bot.sendMessage(chatId, "игорек, проснись, ты обосрался");
      setTimeout(async () => await sendQuestion1(chatId), 1500);
    }
  } else if (questionNumber === "2") {
    if (answer === "1") {
      await bot.sendMessage(chatId, "Вот ты и попался!, 1с битрикс enjoyer)");
      setTimeout(
        async () => await bot.sendPhoto(chatId, "https://ibb.co/cFx0DQP"),
        500
      );

      setTimeout(
        async () =>
          await bot.sendMessage(
            chatId,
            "https://chelyabinsk.hh.ru/vacancy/93141592?query=1%D0%A1+%D0%B1%D0%B8%D1%82%D1%80%D0%B8%D0%BA%D1%81&hhtmFrom=vacancy_search_list"
          ),
        1500
      );

      setTimeout(
        async () =>
          await bot.sendMessage(
            chatId,
            "ты выигрываешь второй подарок!!! *апплодисменты*\n Чтобы мы тебе его отдали дай под говно алексею"
          ),
        2000
      );

      setTimeout(
        async () => await bot.sendMessage(chatId, 'напиши "бугульма"'),
        2500
      );
    } else {
      await bot.sendMessage(chatId, "Interval server error");
      setTimeout(async () => await sendQuestion2(chatId), 1500);
    }
  } else if (questionNumber === "3") {
    if (answer === "2") {
      await bot.sendPhoto(chatId, "https://ibb.co/bgT25fJ");
      setTimeout(
        async () =>
          await bot.sendMessage(
            chatId,
            "Ты прав, ковбой! Посмотри на этого еблана."
          ),
        500
      );

      setTimeout(
        async () =>
          await bot.sendMessage(
            chatId,
            "ты уже выигрываешь третий подарок... (остановите его кто нибудь)\n Заберешь его после того как споешь свою любимую песню (с выражением и чувством такта и ритма)"
          ),
        1000
      );

      setTimeout(
        async () => await bot.sendMessage(chatId, 'напиши "брынза"'),
        2500
      );
    } else {
      await sendFalseAnswerText(chatId);
      setTimeout(async () => await sendQuestion3(chatId), 1500);
    }
  } else if (questionNumber === "4") {
    if (answer === "3") {
      await bot.sendPhoto(chatId, "https://ibb.co/2hJ1ZN6");

      setTimeout(
        async () => await bot.sendMessage(chatId, "Правильно! Так держать!"),
        500
      );

      setTimeout(
        async () =>
          await bot.sendMessage(
            chatId,
            "Тебя ждет еще более крутой подарок\n Мы тебе его отдадим если ты угадаешь число которое загадал дмитрий ленц"
          ),
        2000
      );

      setTimeout(
        async () =>
          bot.sendMessage(chatId, "напиши предмет который помогает ходить"),
        3500
      );
    } else {
      await bot.sendMessage(chatId, "Ответ не бетельгейзе(");
      setTimeout(async () => await sendQuestion4(chatId), 1500);
    }
  } else if (questionNumber === "5") {
    if (answer === "0") {
      await bot.sendMessage(
        chatId,
        "Поздравляю, ты прошел радиотелевикторину. И щас ты получишь главный приз."
      ),
        setTimeout(
          async () => bot.sendPhoto(chatId, "https://ibb.co/6BNxrZP"),
          2500
        );
    } else {
      await bot.sendMessage(chatId, "Ева задумала другой ответ(((((((");
      setTimeout(async () => await sendQuestion5(chatId), 1500);
    }
  }
});

module.exports = router;
