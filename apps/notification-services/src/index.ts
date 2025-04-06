import { sendSmsNotification } from "./services/sms";
import { sendTelegramNotification } from "./services/telegram";
import { sendEmailNotification } from "./services/email";
// import { sendDiscordNotification } from "./services/discord";
import {RedisData, NotificationType} from "@repo/common/types"
import {config} from "dotenv";
config();
import {redis} from "@repo/queue"
const notificationServer = async () => {
  try {

    while (true) {
      const data = await redis.brPop("notifications", 0);
      console.log("redis data", data);
      
      if (data?.element) {
        const { type, transactionData, notificationId, channelId } = JSON.parse(
          data.element
        ) as RedisData;

        await processNotification(type, {
          ...transactionData,
          notificationId,
          channelId,
        });
      }
    }
  } catch (error) {
    console.log("Redis failed to connect", error);
  }
};
notificationServer();

const processNotification = async (
  type: string,
  data: {
    TransferType: string;
    amount: number;
    recieverPubkey: string;
    transactionLink: string;
    message: string;
    notificationId: string;
    channelId: string | null;
  }
) => {
  switch (type) {
    // case NotificationType.DISCORD:
    //   await sendDiscordNotification(data);
    //   break;
    case NotificationType.EMAIL:
      await sendEmailNotification(data);
      break;
    case NotificationType.SMS:
      await sendSmsNotification(data);
      break;
    case NotificationType.TELEGRAM:
      await sendTelegramNotification(data);
      break;
  }
};
