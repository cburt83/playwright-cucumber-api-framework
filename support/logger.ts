// support/logger.ts

export class Logger {
  static info(message: string, data?: any) {
    console.log(`\n[INFO] ${message}`);
    if (data) console.log(JSON.stringify(data, null, 2));
  }

  static warn(message: string, data?: any) {
    console.warn(`\n[WARN] ${message}`);
    if (data) console.warn(JSON.stringify(data, null, 2));
  }

  static error(message: string, data?: any) {
    console.error(`\n[ERROR] ${message}`);
    if (data) console.error(JSON.stringify(data, null, 2));
  }

  static request(method: string, url: string, payload?: any) {
    console.log(`\n[REQUEST] ${method.toUpperCase()} ${url}`);
    if (payload) console.log(`Payload:\n${JSON.stringify(payload, null, 2)}`);
  }

  static response(status: number, body: any) {
    console.log(`\n[RESPONSE] Status: ${status}`);
    console.log(`Body:\n${JSON.stringify(body, null, 2)}`);
  }
}