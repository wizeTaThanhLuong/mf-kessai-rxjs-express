import mailTypes from '../constants/mailTypes';

export const generateTestMail = (toAddress: string) => {
  return {
    ...mailTypes.TEST_MAIL,
    to: toAddress,
  };
};
