const CronJob = require("cron").CronJob;
const sinon = require("sinon");

const callback = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

test("advanceTimersByTime works", (done) => {
  jest.useFakeTimers();
  const job = new CronJob({
    cronTime: "* * * * *",
    onTick: function () {
      callback();
    },
    start: true,
  });
  jest.advanceTimersByTime(2 * 60 * 1000);

  expect(callback).toBeCalledTimes(2);
  job.stop();
  done();
});

test("advanceTimersByTime works (modern)", (done) => {
  jest.useFakeTimers("modern");
  const job = new CronJob({
    cronTime: "* * * * *",
    onTick: function () {
      callback();
    },
    start: true,
  });
  jest.advanceTimersByTime(2 * 60 * 1000);

  expect(callback).toBeCalledTimes(2);
  job.stop();
  done();
});

test("sinon clock.tick works", (done) => {
  const clock = sinon.useFakeTimers();
  const job = new CronJob({
    cronTime: "* * * * *",
    onTick: function () {
      callback();
    },
    start: true,
  });
  clock.tick(2 * 60 * 1000);

  expect(callback).toBeCalledTimes(2);
  job.stop();
  clock.restore();
  done();
});
