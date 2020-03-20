import nodemailer from 'nodemailer';
// tslint:disable-next-line:no-var-requires
const sgTransport = require('nodemailer-sendgrid-transport');
import mailConfig from '../config/mailer';
import Service, { TResponse } from './Service';
import { generateTestMail } from '../utils/mailer';

const mailer = nodemailer.createTransport(sgTransport(mailConfig));

type TSendMailRequestBody = {
  to: string;
};

export class MailService {
  /**
   * Send a mail
   *
   * body Mail Mail address need to send message
   * no response value expected for this operation
   */
  static sendMail({ to }: TSendMailRequestBody): Promise<TResponse> {
    return new Promise(
      async (resolve) => {
        try {
          const mail = generateTestMail(to);
          await mailer.sendMail(mail);
          resolve(Service.successResponse({
            message: 'Email sent!',
          }));
        } catch (e) {
          resolve(Service.rejectResponse(
              { error: e.message || 'Invalid input' },
            e.status || 405,
          ));
        }
      },
    );
  }
}
