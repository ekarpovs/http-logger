import {describe, test} from '@jest/globals';
import { Logger } from "winston";

import { LoggerFormatter, initHttpLogger } from '../src';

describe("Http Logger E2E test", () => {

  test("Has to write to a log", async ()=> {

    const logger = new Logger();
    const cfg: LoggerFormatter = {
      token: ':remote-addr :method :url :status :res[content-length] - :response-time ms'
    };
    
    initHttpLogger(logger, cfg);
  });
});